# Langwork

A comprehensive tutorial project for learning and implementing various LangChain, LangGraph, LLM, and agent technologies.

## Overview

Langwork is designed to be a practical learning resource that covers:

- **LangChain**: Building applications with language models
- **LangGraph**: Creating stateful, multi-actor applications with LLMs
- **LLM Integration**: Working with various language models
- **Agent Development**: Building intelligent agents with tools
- **Tool Creation**: Developing custom tools for LLM agents

## Tutorial Structure

Each tutorial module is organized as a separate directory with its own README, code examples, and dependencies.

### 📚 Available Tutorials

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
cd langchain1-llm  # or other tutorial modules
```

3. Install dependencies:
```bash
npm install
```

4. Start Ollama (if not already running):
```bash
ollama serve
```

5. Pull the required model:
```bash
ollama pull deepseek-r1:1.5b
```

### Running Examples

Each tutorial module includes runnable examples. Check the specific README in each directory for detailed instructions.

## Tutorial Path

Recommended learning progression:

1. **Start with [langchain1-llm](./langchain1-llm/)** - Learn the basics
2. **Advanced tutorials** (coming soon) - Build on foundational knowledge

## Contributing

This is a learning project. Feel free to:
- Suggest new tutorial topics
- Report issues or unclear explanations
- Submit improvements to existing examples

## License

ISC License - See individual package.json files for details.

---

**Note**: This project is actively being developed as a learning resource. More tutorials and examples will be added over time.
