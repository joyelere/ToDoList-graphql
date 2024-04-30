const { buildSchema } = require("graphql");

const typeDefs = buildSchema(`
  type Todo {
    _id: ID!
    title: String!
    description: String!
    completed: Boolean!
  }

  input TodoInput {
    title: String!
    description: String!
    completed: Boolean!
  }

  type RootQuery {
    getAllTodos: [Todo!]!
    getTodoById(_id: ID!): Todo
  }

  type RootMutation {
    createTodo(todoInput: TodoInput): Todo
    updateTodo(
      _id: ID!
      title: String
      description: String
      completed: Boolean
    ): Todo
    deleteTodo(_id: ID!): Todo
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = typeDefs;
