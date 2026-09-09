import ollama


def create_embedding(text: str):
    response = ollama.embed(
        model="embeddinggemma",
        input=text,
    )

    return response["embeddings"][0]


if __name__ == "__main__":
    embedding = create_embedding("This is my interview preparation document.")

    print("Embedding dimensions:", len(embedding))
    print("First 5 values:", embedding[:5])
