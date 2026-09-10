import { serve } from "bun";
import { Hono } from "hono";
import { file_queue } from "./src/lib/file_queue";
import { vectorStore } from "./src/lib/qdrant";
import { Ollama } from "@langchain/ollama";


const ollama=new Ollama({
  model:"llama3.2:3b",
  baseUrl:"http://localhost:11434"

})
const app=new Hono()

app.get("/",async(c)=>{
  console.log("heelo")
    return c.json({
        "msg":"server is start"
    })
})

app.post("/uploads", async (c) => {
  const body = await c.req.parseBody();

  const filedata = body["file"];

  if (!(filedata instanceof File)) {
    return c.json(
      {
        msg: "File is required",
      },
      400
    );
  }



  // Save file
  const file_path=`uploads/${Date.now()}.pdf`
  await Bun.write(file_path, filedata);

  // Add job to BullMQ
  await file_queue.add("process_file", {
    filename: filedata.name,
    type: filedata.type,
    size: filedata.size,
    path: file_path,
  });

  return c.json({
    msg: "File successfully uploaded and queued",
  });
});


app.get("/chat", async (c) => {
  try {
    console.log("gekko")
    const question = c.req.query("q") || "part-time";

    // 1. Search Qdrant
    const docs = await vectorStore.similaritySearch(question, 3);

    // 2. Convert documents into context
    const context = docs
      .map((doc, index) => {
        return `Document ${index + 1}:\n${doc.pageContent}`;
      })
      .join("\n\n");

    // 3. Create prompt
    const prompt = `
You are a helpful AI assistant.

Answer the user's question using ONLY the information in the context.

If the answer is not available in the context, say:
"I couldn't find the answer in the provided documents."

Keep the answer short and clear.

Context:
${context}

Question:
${question}

Answer:
`;

    // 4. Ask Ollama
    const result = await ollama.invoke(prompt);
    console.log("resultssss",result)

    return c.json({
      question,
      answer: result,
      sources: docs,
    });
  } catch (error) {
    console.error("CHAT ERROR:", error);

    return c.json(
      {
        error: error instanceof Error ? error.message : String(error),
      },
      500
    );
  }
});


serve({
    port:3000,
    fetch:app.fetch
})

console.log("server is starting on 3000")