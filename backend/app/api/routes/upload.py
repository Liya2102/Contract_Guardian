from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

from app.services.contract_service import DocumentService

import os


router = APIRouter()

service = DocumentService()


@router.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):

    upload_dir = "uploads"

    os.makedirs(upload_dir, exist_ok=True)

    file_path = os.path.join(upload_dir, file.filename)

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    result = service.process_pdf(file_path)

    return result

@router.get("/")
async def get_documents():

    return [
        {
            "document_id": "DOC001",
            "name": "Netflix Terms"
        }
    ]


@router.get("/{document_id}")
async def get_document(document_id: str):

    return {
        "document_id": document_id,
        "status": "processed"
    }


@router.delete("/{document_id}")
async def delete_document(document_id: str):

    return {
        "message": "Deleted successfully"
    }