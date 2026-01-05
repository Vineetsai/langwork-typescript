# Demo API

A REST API built with NestJS that provides mock user and order data.

## Overview

This is part of the [shared-services](../README.md) collection, designed to demonstrate practical API patterns for AI tool integration and MCP server development.

## Purpose

This demo API serves as a practical example for:
- **AI Tool Integration**: Shows how AI agents can interact with external APIs
- **MCP Server Development**: Demonstrates API patterns suitable for MCP server implementations
- **Tutorial Examples**: Provides realistic endpoints for learning concepts

## Features

- **Users Service**: Mock user management with random data generation
- **Orders Service**: Mock order management with various status states
- **RESTful Design**: Standard HTTP methods and status codes
- **TypeScript**: Full type safety and IntelliSense support
- **Validation**: Input validation using class-validator

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Running the API

```bash
# Development mode with hot reload
npm run start:dev

# Production mode
npm run start:prod

# Build the project
npm run build
```

The API will start on `http://localhost:3000` by default.

## API Endpoints

### Users

- `GET /users` - Get a list of random users (1-10 users)
- `GET /users/:id` - Get a specific user by ID

**Example Response:**
```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    }
  ],
  "total": 1,
  "page": 1,
  "pageSize": 10
}
```

### Orders

- `GET /orders/:id` - Get a specific order by ID

**Example Response:**
```json
{
  "id": "order-123",
  "userId": "user-123",
  "status": "pending",
  "amount": 42,
  "quantity": 3
}
```

## Usage in Tutorials

This API is designed to be easily integrated with AI agents and MCP servers:

### For AI Tool Integration

The endpoints follow predictable patterns that make them suitable for AI tool definitions:

```typescript
// Example tool definition for an AI agent
{
  "name": "get_users",
  "description": "Get a list of users from the demo API",
  "parameters": {
    "type": "object",
    "properties": {},
    "required": []
  },
  "function": async () => {
    const response = await fetch('http://localhost:3000/users');
    return response.json();
  }
}
```

### For MCP Server Development

The API structure demonstrates best practices for MCP server implementations:

- Consistent response formats
- Proper HTTP status codes
- Clear error handling
- Type-safe data transfer objects

## Development

### Project Structure

```
src/
├── users/
│   ├── users.controller.ts  # User endpoints
│   ├── users.service.ts     # User business logic
│   └── users.dto.ts         # User data transfer objects
├── orders/
│   ├── orders.controller.ts # Order endpoints
│   ├── orders.service.ts    # Order business logic
│   └── orders.dto.ts        # Order data transfer objects
├── app.module.ts            # Main application module
└── main.ts                  # Application entry point
```

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### Code Quality

```bash
# Linting
npm run lint

# Formatting
npm run format
```

## Configuration

The API runs on port 3000 by default. You can modify the port in the `src/main.ts` file:

```typescript
await app.listen(process.env.PORT || 3000);
```

## License

MIT License - feel free to use this demo API for learning and development purposes.
