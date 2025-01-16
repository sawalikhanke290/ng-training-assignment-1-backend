//const mongoose = require('mongoose');
import mongoose from 'mongoose';

// Task schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

//module.exports = Task;
export default Task;