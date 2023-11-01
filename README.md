# Project Name: MongoDBApiRest

## Description
This repository contains the source code for a RESTful API built with Node.js, Express.js, and Mongoose. The API allows you to manage products with basic CRUD operations (Create, Read, Update, Delete).

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed
- MongoDB installed and running
- Knowledge of RESTful API concepts

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd learning-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root and add the following environment variables:
   ```
   PORT=3000
   MONGO_URL=<your-mongodb-connection-string>
   ```
   Replace `<your-mongodb-connection-string>` with your actual MongoDB connection string.

## Usage
To run the API, use the following command:
```bash
npm start
```

The API will be accessible at `http://localhost:3000/api/products`.

## API Endpoints
- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a product by ID
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product by ID
- `DELETE /api/products/:id`: Delete a product by ID

## Project Structure
- `server.js`: Main entry point, connects to MongoDB and starts the Express server.
- `routes/productRoute.js`: Defines API endpoints and their corresponding controller methods.
- `controllers/productController.js`: Contains methods for handling product-related logic.
- `models/productModel.js`: Mongoose schema for the `Product` model.
- `middleware/errorMiddleware.js`: Error handling middleware.

## Dependencies
- `dotenv`: For loading environment variables from a `.env` file.
- `express`: Web framework for Node.js.
- `express-async-handler`: Utility to handle asynchronous route handlers.
- `mongoose`: MongoDB object modeling tool.
- `nodemon`: Development utility that automatically restarts the server when changes are detected.

