from typing import Optional
from fastapi import APIRouter, File, UploadFile, Form
from ..controllers.resume_uploads_file import handle_upload
from ..schema.schema import UploadResponse

router = APIRouter(prefix="/uploads", tags=["uploads"])

@router.post("/", response_model=UploadResponse)
async def upload_resume_endpoint(
    job: str = Form(...),
    experience_level: str = Form(...),
    file: Optional[UploadFile] = File(None)
):
    # Pass all fields to your controller function
    return await handle_upload(job=job, experience_level=experience_level, file=file)