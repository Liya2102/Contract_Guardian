from fastapi import APIRouter
from app.schemas.regulation import RegulatoryImpactRequest

router = APIRouter(
    prefix="/regulations",
    tags=["Regulation Impact"]
)

@router.post("/impact")
async def regulatory_impact(
    request: RegulatoryImpactRequest
):

    return {
        "regulation": request.regulation_id,
        "affected_documents": 5,
        "impact": "High"
    }


@router.get("/legal-updates")
async def legal_updates():

    return [
        {
            "law": "GDPR",
            "section": "Consent"
        }
    ]


@router.get("/affected-documents")
async def affected_documents():

    return [
        {
            "document_id": "DOC001",
            "impact": "High"
        }
    ]