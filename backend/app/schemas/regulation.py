from pydantic import BaseModel

class RegulatoryImpactRequest(BaseModel):
    regulation_id: str