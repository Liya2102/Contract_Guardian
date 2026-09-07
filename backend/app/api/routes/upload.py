from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)

@router.post("/upload")
async def upload_document(
        file: UploadFile = File(...)
):

    return {
        "document_id": "DOC001",
        "filename": file.filename,
        "status": "uploaded"
    }


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