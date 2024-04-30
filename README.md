# GraphQL API for To-Do List Application

This project implements a GraphQL API for a to-do list application using MongoDB and AWS Lambda.

## Features

- **GraphQL API**: Built using Express.js and graphqlHTTP middleware.
- **MongoDB**: Data storage using MongoDB with Mongoose for schema modeling.
- **AWS Lambda Integration**: Serverless deployment using aws-serverless-express.
- **CRUD Operations**: Full CRUD functionality for managing to-do list items.
- **GraphQL Schema and Resolvers**: Defined GraphQL schema using buildSchema and implemented resolvers for queries and mutations.

## Project Structure

- **app.js**: Entry point for the Express.js application.
- **index.js**: AWS Lambda handler for deploying the application.
- **schema/typeDefs.js**: GraphQL schema definitions using buildSchema.
- **resolvers/todoResolvers.js**: GraphQL resolvers for CRUD operations on to-do items.
- **models/todo.js**: Mongoose model for the Todo schema.
- **.env**: Environment variables configuration file (not included in repository).

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables in a `.env` file (not included in repository).
4. Start the server locally using `npm start`.

## Usage

### GraphQL Queries

- `getAllTodos`: Retrieves all to-do items.
- `getTodoById`: Retrieves a to-do item by ID.

### GraphQL Mutations

- `createTodo`: Creates a new to-do item.
- `updateTodo`: Updates an existing to-do item.
- `deleteTodo`: Deletes a to-do item.

## Testing

You can test the API using tools like Postman or GraphQL Playground.

### Sample Queries and Mutations

```graphql
query {
  getAllTodos {
    _id
    title
    description
    completed
  }
}

mutation {
  createTodo(
    todoInput: {
      title: "A teaching class"
      description: "This is a class for Python beginners"
      completed: true
    }
  ) {
    _id
    title
  }
}

