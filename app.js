const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const graphQlResolvers = require("./resolvers/todoResolvers");
const graphQlSchema = require("./schema/typeDefs");

const app = express(); // Create an Express.js application

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to mongoDB");
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  } catch (error) {
    throw error;
  }
};

// Middleware
app.use(cors());

// GraphQL endpoint
app.use(
  "/",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
