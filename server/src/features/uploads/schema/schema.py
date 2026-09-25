from pydantic import BaseModel

class UploadRequest(BaseModel):
    filename: str
    file_size: int
    

class UploadResponse(BaseModel):
    filename: str
    status: str