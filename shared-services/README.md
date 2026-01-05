# Shared Services

This directory contains shared services and APIs that will be used across various tutorials and examples in the langwork project.

## Purpose

The shared services provide practical examples for learning modern AI development concepts:

- **AI Tool Integration**: Demonstrates how AI agents can interact with external APIs
- **MCP Server Development**: Shows API patterns suitable for MCP (Model Context Protocol) server implementations  
- **REST API Design**: Provides realistic endpoints for learning and development
- **TypeScript Best Practices**: Full type safety and modern development patterns

## Available Services

### Demo API

A REST API built with NestJS that provides mock user and order data.

**Location**: `demo-api/`

**Documentation**: See the [Demo API README](demo-api/README.md) for detailed setup instructions, API endpoints, and usage examples.

**Purpose**: Serves as a practical example for AI tool integration and MCP server tutorials.

**Key Features**:
- Mock user management with random data generation
- Mock order management with various status states
- RESTful design with standard HTTP methods
- Full TypeScript support and validation

## Getting Started

Each service has its own README with specific setup instructions. See the individual service directories for detailed information.

## Development Philosophy

These shared services are designed with the following principles:

1. **Educational Focus**: Clear, well-documented code suitable for learning
2. **Realistic Patterns**: Follows industry best practices for API design
3. **AI-Ready**: Structured to work well with AI agents and tools
4. **Type Safety**: Full TypeScript implementation with proper typing
5. **Modular Design**: Each service is self-contained and independently usable

## Usage in Tutorials

These services are specifically created to support tutorials on:

- **LangChain Integration**: Connecting AI agents to external data sources
- **Tool Development**: Building custom tools for AI systems
- **MCP Servers**: Creating Model Context Protocol servers
- **API Design**: Understanding RESTful patterns for AI applications

## Contributing

When adding new shared services:

1. Follow the established patterns in the demo API
2. Include comprehensive documentation
3. Ensure TypeScript compatibility
4. Add appropriate validation and error handling
5. Make services self-contained and easy to run

## License

All shared services are provided under MIT License for educational and development purposes.
