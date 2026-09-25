from src.features.uploads.routes import resume_upload
from fastapi import FastAPI

app=FastAPI()

app.include_router(resume_upload.router)

@app.get("/")
def home():
    return ("server si start")
print("ok")