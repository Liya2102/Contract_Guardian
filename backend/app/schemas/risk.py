from pydantic import BaseModel

class RiskRequest(BaseModel):
    document_id: str


class RiskResponse(BaseModel):
    document_id: str
    risk_level: str
    score: int