from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI

from app.api.routes.upload import router as document_router
from app.api.routes.risk import router as risk_router
from app.api.routes.drift import router as drift_router
from app.api.routes.regulation import router as regulation_router
from app.api.routes.health import router as health_router
from app.api.routes.system import router as system_router

app = FastAPI(
    title="Contract Guardian API",
    version="1.0.0",
    description="RAG-powered contract analysis system"
)

app.include_router(document_router)
app.include_router(risk_router)
app.include_router(drift_router)
app.include_router(regulation_router)
app.include_router(health_router)
app.include_router(system_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Contract Guardian Running"
    }

@app.get("/health")
def health():
    return {"status": "healthy"}
from fastapi import FastAPI


