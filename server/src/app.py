from fastapi import FastAPI, UploadFile, File
from .file_queue import fileQueue
import os
app = FastAPI()


from fastapi import FastAPI, UploadFile, File

app = FastAPI()


@app.post("/uploads")
async def upload_file(file: UploadFile = File(...)):
    upload_dir = "uploads"
    os.makedirs(upload_dir, exist_ok=True)

    file_path = os.path.join(upload_dir, file.filename)

    contents = await file.read()

    with open(file_path, "wb") as f:
        f.write(contents)

    job = await fileQueue.add(
        "process_file",
        {
            "filename": file.filename,
            "content_type": file.content_type,
            "size": len(contents),
            "file_path": file_path,
        },
    )

    return {
        "filename": file.filename,
        "size": len(contents),
        "job_id": job.id,
        "message": "File uploaded and added to queue",
    }

