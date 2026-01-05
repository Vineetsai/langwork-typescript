import { createAgent } from "langchain";
import { addition, subtraction, multiplication, division } from "./tools";
import { ChatOllama } from "@langchain/ollama";

// model
const llm = new ChatOllama({
    model: 'llama3.2:3b', // "deepseek-r1:1.5b", as deepseek-r1 doesn't support tools
    temperature: 0.7,
    baseUrl: "http://localhost:11434",
});

const agent = createAgent({
    model: llm,
    tools: [addition, subtraction, multiplication, division]
});

(async () => {
    // agent.bindTools([addition, subtraction, multiplication, division]);
    // want to mesaure total time it took for invoke call
    const startTime = Date.now();
    // here agent invoke take parameter: messages array with user message
    const result = await agent.invoke({ messages: [{ role: "user", content: "Hello!, add 5 and 4 then multiply by 2" }] });
    const endTime = Date.now();
    console.log(`Invoke took ${endTime - startTime} ms`);
    console.log("Response:", result.messages[result.messages.length - 1].content);
})();

