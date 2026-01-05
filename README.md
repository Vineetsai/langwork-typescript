# Langwork

A comprehensive tutorial project for learning and implementing various LangChain, LangGraph, LLM, and agent technologies.

## Overview

Langwork is designed to be a practical learning resource that covers:

- **LangChain**: Building applications with language models
- **LangGraph**: Creating stateful, multi-actor applications with LLMs
- **LLM Integration**: Working with various language models
- **Agent Development**: Building intelligent agents with tools
- **Tool Creation**: Developing custom tools for LLM agents

## Project Structure

```
langwork/
├── shared-services/          # Reusable APIs and services for tutorials
│   ├── demo-api/             # NestJS REST API for user/order management
│   └── README.md             # Shared services documentation
├── langchain1-llm/           # Basic LLM integration examples
├── langchain2-agent/         # AI agent development examples
├── langgraph-base/          # LangGraph workflow examples
└── README.md                # This file
```

### 📚 Available Tutorials & Services

#### [shared-services](./shared-services/)
**Reusable APIs and Services**
- Demo API with user and order management endpoints
- Designed for AI tool integration and MCP server development
- RESTful patterns suitable for AI agent consumption
- Full TypeScript support and validation

#### [langchain1-llm](./langchain1-llm/)
**Basic LangChain with LLM Integration**
- Introduction to LangChain fundamentals
- Setting up Ollama with DeepSeek model
- Creating custom tools for mathematical operations
- Basic agent implementation with tool binding
- Performance monitoring and token usage tracking

**Key Concepts Covered:**
- LLM initialization and configuration
- Tool creation with Zod schemas
- Agent invocation patterns
- Token usage optimization

#### [langchain2-agent](./langchain2-agent/)
**Advanced Agent Implementation with createAgent**
- Using `createAgent` function for better agent management
- Message-based agent API and proper invocation patterns
- Model compatibility and tool support (Llama3.2 vs DeepSeek)
- Advanced error handling and troubleshooting
- Performance optimization for agent workflows

**Key Concepts Covered:**
- Advanced agent creation patterns
- Message-based API usage
- Model selection and compatibility
- Error handling and debugging
- Performance comparison and optimization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Ollama installed and running locally
- DeepSeek model pulled in Ollama

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd langwork
```

2. Navigate to the specific tutorial directory:
```bash
cd shared-services/demo-api  # Start with the demo API
# or
cd langchain1-llm  # or other tutorial modules
```

3. Install dependencies:
```bash
npm install
```

4. For tutorials requiring the demo API, start it first:
```bash
cd shared-services/demo-api
npm run start:dev
```

5. Start Ollama (if not already running):
```bash
ollama serve
```

6. Pull the required models:
```bash
ollama pull deepseek-r1:1.5b
ollama pull llama3.2:3b  # For better tool support in langchain2-agent
```

### Running Examples

Each tutorial module includes runnable examples. Check the specific README in each directory for detailed instructions.

## Tutorial Path

Recommended learning progression:

1. **Start with [shared-services](./shared-services/)** - Set up the demo API and understand the available endpoints
2. **Continue with [langchain1-llm](./langchain1-llm/)** - Learn the basics of LangChain and tool creation
3. **Move to [langchain2-agent](./langchain2-agent/)** - Master advanced agent patterns and createAgent usage
4. **Advanced tutorials** (coming soon) - Build on foundational knowledge

## Contributing

This is a learning project. Feel free to:
- Suggest new tutorial topics
- Report issues or unclear explanations
- Submit improvements to existing examples

## License

ISC License - See individual package.json files for details.

---

**Note**: This project is actively being developed as a learning resource. More tutorials and examples will be added over time.
