from pydantic import BaseModel

class CompareVersionsRequest(BaseModel):
    old_version: str
    new_version: str