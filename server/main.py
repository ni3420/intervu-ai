from fastapi import FastAPI,File,UploadFile
from src.lib.file_queue import queue
from src.lib.vector import vector_store
from langchain_ollama import ChatOllama
import datetime
import os

app=FastAPI()

llm=ChatOllama(
    model="llama3.2:3b",
    base_url="http://localhost:11434"
)

@app.post("/chat")
async def Chat(text:str):
    search=vector_store.similarity_search(text)
    context = "\n\n".join([doc.page_content for doc in search])
    messages = [
        (
            "system",
            f"You are an AI assistant. Answer the user question using ONLY the following context:\n\n{context}",
        ),
        ("human",text),
    ]
    result=llm.invoke(messages)
    print(result.content)



@app.post("/")
async def file_upload(upload:UploadFile=File(...)):
    print("file upload")
    os.makedirs("uploads",exist_ok=True)
    file=datetime.datetime.now().strftime('%Y%m%d%H')
    filepath=f"uploads/{file}.pdf"
    with open(filepath, "wb") as f:
        f.write( upload.file.read())
        await queue.add("process_file",{
            "name":upload.filename,
            "file":filepath
        })
        queue
        return{
            "filename":filepath,

        }


