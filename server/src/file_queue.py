from bullmq import Queue

fileQueue = Queue(
    "file_upload",
    {
        "connection": {
            "host": "localhost",
            "port": 6379,
        }
    },
)
