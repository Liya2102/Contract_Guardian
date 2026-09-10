from app.parser.pdf_parser import PDFParser


class DocumentService:

    def __init__(self):
        self.parser = PDFParser()

    def process_pdf(self, file_path):

        result = self.parser.parse(file_path)

        return result