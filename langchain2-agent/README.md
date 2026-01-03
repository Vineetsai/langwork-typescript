# LangChain 2-Agent Tutorial

**Advanced Agent Implementation with createAgent**

This tutorial builds on the basics learned in langchain1-llm, demonstrating how to create a more sophisticated agent using LangChain's `createAgent` function for better tool management and execution.

## Overview

This example demonstrates:
- Creating agents with `createAgent` instead of manual tool binding
- Proper agent invocation with message-based API
- Working with multiple models (Llama3.2 and DeepSeek)
- Advanced agent patterns and error handling
- Performance monitoring in agent workflows

## Prerequisites

- Node.js (v16 or higher)
- Ollama installed and running on `http://localhost:11434`
- Compatible models: 
  - `ollama pull llama3.2:3b` (recommended for tool support)
  - `ollama pull deepseek-r1:1.5b` (limited tool support)

## Installation

```bash
npm install
```

## Project Structure

```
langchain2-agent/
├── main.ts          # Agent implementation with createAgent
├── tools.ts         # Custom mathematical tools (shared)
├── package.json     # Dependencies and scripts
└── README.md        # This file
```

## Key Components

### 1. Agent Creation (`main.ts`)

Uses `createAgent` for better agent management:
```typescript
const agent = createAgent({
    model: llm,
    tools: [addition, subtraction, multiplication, division]
});
```

### 2. Model Configuration

Supports multiple models with automatic fallback:
```typescript
const llm = new ChatOllama({
    model: 'llama3.2:3b', // Better tool support than deepseek-r1
    temperature: 0.7,
    baseUrl: "http://localhost:11434",
});
```

### 3. Agent Invocation

Proper message-based agent API:
```typescript
const result = await agent.invoke({ 
    messages: [{ 
        role: "user", 
        content: "Hello!, add 5 and 4 then multiply by 2" 
    }] 
});
```

### 4. Custom Tools (`tools.ts`)

Same mathematical tools as langchain1-llm:
- **addition**: Adds two numbers
- **subtraction**: Subtracts two numbers  
- **multiplication**: Multiplies two numbers
- **division**: Divides two numbers

## Running the Example

```bash
npm start
```

**Example Query:**
```
"Hello!, add 5 and 4 then multiply by 2"
```

**Expected Output:**
```
Invoke took XXX ms
Response: The result is 18
```

## Learning Objectives

After completing this tutorial, you'll understand:

✅ **Agent Creation**: Using `createAgent` for better agent management  
✅ **Message API**: Proper agent invocation with message arrays  
✅ **Model Compatibility**: Understanding tool support across models  
✅ **Advanced Patterns**: More sophisticated agent workflows  
✅ **Error Handling**: Dealing with model limitations and tool issues  

## Key Differences from langchain1-llm

| Feature | langchain1-llm | langchain2-agent |
|---------|----------------|------------------|
| Agent Creation | Manual tool binding | `createAgent` function |
| Invocation | `llm.invoke()` | `agent.invoke()` |
| API | Direct string input | Message-based API |
| Model Support | DeepSeek only | Multiple models |
| Error Handling | Basic | Advanced patterns |

## Common Issues and Solutions

### Model Compatibility

**Problem**: DeepSeek models have limited tool support
**Solution**: Use Llama3.2 or other models with better tool integration

```typescript
// Works well with tools
model: 'llama3.2:3b'

// Limited tool support
model: 'deepseek-r1:1.5b'
```

### Agent Invocation Errors

**Problem**: "This expression is not callable" error
**Solution**: Use proper agent API, don't call agent as function

```typescript
// ❌ Wrong
const result = agent("query");

// ✅ Correct  
const result = await agent.invoke({ messages: [...] });
```

### Response Handling

**Problem**: Accessing response properties incorrectly
**Solution**: Agent responses use different structure

```typescript
// ❌ LLM pattern
console.log(result.content);

// ✅ Agent pattern
console.log(result.messages[result.messages.length - 1].content);
```

## Performance Insights

Based on testing with different models:

- **Llama3.2:3b**: Better tool understanding, consistent responses
- **DeepSeek-r1:1.5b**: Faster but limited tool capabilities
- **Response times**: 3-7 seconds depending on model and complexity

## Next Steps

After mastering this agent implementation:

1. **Multi-step workflows**: Chain multiple tool calls
2. **State management**: Maintain conversation context
3. **Custom middleware**: Add logging and validation
4. **Error recovery**: Handle tool failures gracefully
5. **Parallel execution**: Run multiple tools simultaneously

## Dependencies

- `@langchain/core`: Core LangChain functionality
- `@langchain/ollama`: Ollama integration
- `langchain`: Main LangChain library with agent support
- `zod`: Schema validation

## Troubleshooting

**Common Issues:**

1. **Agent not responding**: Check model compatibility with tools
2. **Type errors**: Ensure proper message format in invoke()
3. **Slow responses**: Consider using smaller models or caching
4. **Tool failures**: Verify tool schemas and parameter types

---

**← [Previous: langchain1-llm](../langchain1-llm/)** | **[Back to Main README](../README.md)** | **[Next Tutorial](../tutorial3/)** (coming soon)
