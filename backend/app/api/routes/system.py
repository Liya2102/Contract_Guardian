from fastapi import APIRouter
from sqlalchemy import text
from sqlalchemy.orm import Session
from fastapi import Depends

from app.database.session import get_db

router = APIRouter(
    tags=["System"]
)

@router.get("/db-check")
def db_check(
    db: Session = Depends(get_db)
):

    result = db.execute(
        text("SELECT NOW();")
    )

    return {
        "database": "connected",
        "timestamp": str(result.scalar())
    }