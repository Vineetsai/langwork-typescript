import { tool } from 'langchain';
import * as z from "zod";

const addition = tool(
    ({ a, b }) => a + b,
    {
        name: 'addition',
        description: 'add two number together',
        schema: z.object({
            a: z.number().describe('first number'),
            b: z.number().describe('second number'),
        }),
    }
);

const subtraction = tool(
    ({ a, b }) => a - b,
    {
        name: 'subtraction',
        description: 'multiply two numbers together',
        schema: z.object({
            a: z.number().describe('first number'),
            b: z.number().describe('second number'),
        }),
    }
);

const multiplication = tool(
    ({ a, b }) => a * b,
    {
        name: 'multiplication',
        description: 'multiply two numbers together',
        schema: z.object({
            a: z.number().describe('first number'),
            b: z.number().describe('second number'),
        }),
    }
);

const division = tool(
    ({ a, b}) => a / b,
    {
        name: 'division',
        description: `divide fist number by second number`,
        schema: z.object({
            a: z.number().describe('first number'),
            b: z.number().describe('second number'),
        }),
    },
);

export {
    addition,
    subtraction,
    multiplication,
    division
};