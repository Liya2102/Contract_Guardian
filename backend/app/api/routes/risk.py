from fastapi import APIRouter
from app.schemas.risk import RiskRequest

router = APIRouter(
    prefix="/risk",
    tags=["Risk Analysis"]
)

@router.post("/analyze")
async def analyze_risk(
    request: RiskRequest
):

    return {
        "document_id": request.document_id,
        "risk_level": "High",
        "score": 84
    }


@router.get("/summary/{document_id}")
async def risk_summary(
    document_id: str
):

    return {
        "low": 12,
        "medium": 4,
        "high": 3
    }