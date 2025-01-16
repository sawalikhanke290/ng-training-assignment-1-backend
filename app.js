import mongoose from 'mongoose';
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

import express from 'express';
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

//// Root route ("/")
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
        }
        .welcome-text {
          font-size: 36px;
          font-weight: bold;
          font-style: italic;
          color: #333;
        }
        .image-container {
          margin-top: 30px;
        }
        .image-container img {
        image-container img {
          width: 250px;  /* Set image width */
          height: 300px; /* Set image height */
          object-fit: cover; /* Ensure the image doesn't stretch */
          border: 3px solid #333;
        }
      </style>
    </head>
    <body>
      <div class="welcome-text">
        Welcome to the <span style="color: #007bff;">To-Do List API</span>
      </div>

      <div class="image-container">
        <img src="https://i.pinimg.com/736x/51/81/9c/51819c0566eb155d5f90f9d4967da4ee.jpg" alt="To-Do List Image">
      </div>

    </body>
    </html>
  `);
});

// Routes
app.use('/api', taskRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
