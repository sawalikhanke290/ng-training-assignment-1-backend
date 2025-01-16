const mongoose = require('mongoose');

// MongoDB connection URI (Ensure it's correct)
const dbURI = 'mongodb://localhost:27017/TaskDB';  // Replace with your actual connection string

const connectDB = async () => {
  try {
    // Connecting to MongoDB without deprecated options
    await mongoose.connect(dbURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);  // Exit the process if MongoDB connection fails
  }
};

module.exports = connectDB;
