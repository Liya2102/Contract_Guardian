import fitz
import uuid
import re
from typing import List, Dict


LEGAL_KEYWORDS = {
    "DEFINITIONS",
    "TERM",
    "PAYMENT",
    "TERMINATION",
    "CONFIDENTIALITY",
    "PRIVACY",
    "LIABILITY",
    "LIMITATION OF LIABILITY",
    "INDEMNIFICATION",
    "WARRANTY",
    "FORCE MAJEURE",
    "GOVERNING LAW",
    "JURISDICTION",
    "DATA PROTECTION",
    "DATA SHARING",
    "REFUND",
    "SERVICES",
    "OBLIGATIONS",
}


class PDFParser:

    def __init__(self):
        pass

    def _is_heading_pattern(self, text: str) -> bool:

        text = text.strip()

        patterns = [
            r"^\d+\.\s+[A-Za-z].*",                   # 1. Definitions
            r"^\d+\.\d+\s+[A-Za-z].*",               # 1.1 Affiliate
            r"^\d+\.\d+\.\d+\s+[A-Za-z].*",          # 1.1.1 Details
            r"^ARTICLE\s+[IVX\d]+.*",
            r"^SECTION\s+\d+.*",
            r"^[A-Z\s]{4,}$",                        # TERMINATION
        ]

        for pattern in patterns:
            if re.match(pattern, text.upper()):
                return True

        return False

    def _calculate_heading_score(
        self,
        text: str,
        font_size: float,
        font_name: str,
        avg_font_size: float
    ) -> int:

        score = 0

        text = text.strip()

        if not text:
            return 0

        # Larger than average
        if font_size > avg_font_size:
            score += 2

        if font_size >= avg_font_size + 1.5:
            score += 2

        # Bold font
        if "bold" in font_name.lower():
            score += 3

        # Numbered section
        if re.match(r"^\d+(\.\d+)*", text):
            score += 3

        # All caps
        if text.isupper() and len(text.split()) <= 8:
            score += 2

        # Short line
        if len(text.split()) <= 10:
            score += 1

        # Legal keyword
        if text.upper() in LEGAL_KEYWORDS:
            score += 4

        # Pattern-based heading
        if self._is_heading_pattern(text):
            score += 4

        return score

    def _extract_page_structure(self, page) -> Dict:

        raw_blocks = page.get_text("dict")["blocks"]

        structures = []

        font_sizes = []

        # Gather font sizes
        for block in raw_blocks:
            if "lines" not in block:
                continue

            for line in block["lines"]:
                for span in line["spans"]:
                    font_sizes.append(span["size"])

        avg_font_size = (
            sum(font_sizes) / len(font_sizes)
            if font_sizes else 12
        )

        # Process lines
        for block in raw_blocks:

            if "lines" not in block:
                continue

            for line in block["lines"]:

                spans = line["spans"]

                line_text = " ".join(
                    span["text"].strip()
                    for span in spans
                    if span["text"].strip()
                )

                if not line_text:
                    continue

                max_font_size = max(
                    span["size"] for span in spans
                )

                dominant_font = spans[0]["font"]

                score = self._calculate_heading_score(
                    line_text,
                    max_font_size,
                    dominant_font,
                    avg_font_size
                )

                element_type = (
                    "heading"
                    if score >= 8
                    else "paragraph"
                )

                structures.append({
                    "type": element_type,
                    "score": score,
                    "text": line_text,
                    "font_size": max_font_size,
                    "font": dominant_font
                })

        return {
            "avg_font_size": avg_font_size,
            "structures": structures
        }

    def parse(self, pdf_path: str):

        document_id = str(uuid.uuid4())

        doc = fitz.open(pdf_path)

        pages = []

        document_headings = []

        for page_no in range(len(doc)):

            page = doc[page_no]

            structure = self._extract_page_structure(page)

            headings = [
                item["text"]
                for item in structure["structures"]
                if item["type"] == "heading"
            ]

            document_headings.extend(headings)

            page_text = page.get_text()

            pages.append({
                "page": page_no + 1,
                "headings": headings,
                "text": page_text,
                "structure": structure["structures"]
            })

        metadata = doc.metadata

        return {
            "document_id": document_id,
            "filename": pdf_path.split("/")[-1],
            "total_pages": len(doc),
            "metadata": {
                "title": metadata.get("title"),
                "author": metadata.get("author"),
                "producer": metadata.get("producer"),
            },
            "detected_headings": list(set(document_headings)),
            "pages": pages
        }