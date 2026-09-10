from pydantic import BaseModel
from typing import List


class PageData(BaseModel):
    page: int
    text: str
    headings: List[str]


class ParsedDocument(BaseModel):
    document_id: str
    filename: str
    total_pages: int
    pages: List[PageData]