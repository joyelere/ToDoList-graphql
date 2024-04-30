const Todo = require("../models/todo");

const resolvers = {
  getAllTodos: async () => {
    try {
      const todos = await Todo.find();
      return todos;
    } catch (err) {
      throw err;
    }
  },
  getTodoById: async (args) => {
    try {
      const todo = await Todo.findById(args._id);
      if (!todo) {
        throw new Error("Todo not found");
      }
      return todo;
    } catch (err) {
      throw new Error("Failed to fetch todo by ID");
    }
  },
  createTodo: async (args) => {
    try {
      // Create a new todo instance
      const todo = new Todo({
        title: args.todoInput.title,
        description: args.todoInput.description,
        completed: args.todoInput.completed,
      });
      // Save the new todo to the database
      const result = await todo.save();
      return result;
    } catch (err) {
      throw new Error("Failed to create todo");
    }
  },
  updateTodo: async (args) => {
    try {
      const todo = await Todo.findByIdAndUpdate(
        args._id,
        {
          title: args.title,
          description: args.description,
          completed: args.completed,
        },
        { new: true } // Return the updated todo
      );
      if (!todo) {
        throw new Error("Todo not found");
      }
      return todo;
    } catch (err) {
      throw new Error("Failed to update todo");
    }
  },
  deleteTodo: async (args) => {
    try {
      const todo = await Todo.findByIdAndDelete(args._id);
      if (!todo) {
        throw new Error("Todo not found");
      }
      return todo;
    } catch (err) {
      throw new Error("Failed to delete todo");
    }
  },
};

module.exports = resolvers;
