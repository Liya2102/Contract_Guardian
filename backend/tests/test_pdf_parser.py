from app.parser.pdf_parser import PDFParser

def test_parser():

    parser = PDFParser()

    result = parser.parse("C:/Users/T9993/Downloads/SampleContract.pdf")

    assert result["total_pages"] > 0

    assert len(result["pages"]) > 0