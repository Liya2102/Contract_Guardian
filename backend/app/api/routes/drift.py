from fastapi import APIRouter
from app.schemas.drift import CompareVersionsRequest

router = APIRouter(
    prefix="/drift",
    tags=["Drift Tracker"]
)

@router.post("/compare")
async def compare_versions(
    request: CompareVersionsRequest
):

    return {
        "added": 5,
        "removed": 3,
        "modified": 7
    }


@router.get("/report/{version_id}")
async def get_report(
    version_id: str
):

    return {
        "version": version_id,
        "rights_erosion_score": 15
    }