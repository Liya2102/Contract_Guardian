class RiskService:

    @staticmethod
    def analyze(document_id):
        return {
            "document_id": document_id,
            "risk": "High",
            "score": 84
        }