import { createAgent } from "langchain";
import { addition, subtraction, multiplication, division } from "./tools";
import { ChatOllama } from "@langchain/ollama";

// model
const llm = new ChatOllama({
    model: "deepseek-r1:1.5b",
    temperature: 0.7,
    baseUrl: "http://localhost:11434",
});

(async () => {
    llm.bindTools([addition, subtraction, multiplication, division]);
    // want to mesaure total time it took for invoke call
    const startTime = Date.now();
    const result = await llm.invoke("Hello!, add 5 and 4 then multiply by 2");
    const endTime = Date.now();
    console.log(`Invoke took ${endTime - startTime} ms`);
    console.log("Response:", result.content);
    console.log("Input tokens:", result.usage_metadata?.input_tokens);
    console.log("Output tokens:", result.usage_metadata?.output_tokens);
    console.log("Total tokens:", result.usage_metadata?.total_tokens);
})();

