import asyncio
from bullmq import Worker

from .lib.chunking import chunk_file


async def process_file(job, token):
    print(f"Processing job: {job.id}")
    print(f"Job data: {job.data}")

    filename = job.data.get("filename")
    content_type = job.data.get("content_type")
    file_path = job.data.get("file_path")

    print(f"File name: {filename}")
    print(f"Content type: {content_type}")
    print(f"File path: {file_path}")

    # Read the file
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()

    # Create chunks
    chunks = chunk_file(text)

    print(f"Created {len(chunks)} chunks")

    for index, chunk in enumerate(chunks):
        print(f"Chunk {index}: {chunk[:100]}...")

    return {
        "status": "processed",
        "filename": filename,
        "chunks": len(chunks),
    }


async def main():
    worker = Worker(
        "file_upload",
        process_file,
        {
            "connection": {
                "host": "localhost",
                "port": 6379,
            }
        },
    )

    print("Worker started...")

    try:
        await asyncio.Event().wait()
    finally:
        await worker.close()


if __name__ == "__main__":
    asyncio.run(main())
