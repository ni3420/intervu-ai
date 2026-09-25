import os
from typing import Optional
from fastapi import UploadFile, File, Form
from ..schema.schema import UploadResponse
from datetime import datetime

async def handle_upload(
    job: str = Form(...),
    experience_level: str = Form(...),
    file: Optional[UploadFile] = File(None)
) -> UploadResponse:
    
    file_path = None
    
    if file and file.filename:
        upload_dir = "uploads"
        os.makedirs(upload_dir, exist_ok=True)
        
        # Extract original extension or default to .pdf
        ext = os.path.splitext(file.filename)[1] or ".pdf"
        generate_file_path = f"S{datetime.now().strftime('%H%M%S')}{ext}"
        file_path = os.path.join(upload_dir, generate_file_path)
        
        # Read and write the file to disk
        contents = await file.read()
        with open(file_path, "wb") as f:
            f.write(contents)
            
    print(f"Target Job: {job}")
    print(f"Experience Level: {experience_level}")
    print(f"Saved File Path: {file_path if file_path else 'None'}")
    
    return UploadResponse(
        filename=file.filename if file else "No file provided",
        status="success",
        message="Interview details and resume processed successfully"
    )