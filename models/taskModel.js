//const mongoose = require('mongoose');
import mongoose from 'mongoose';

// Task schema
const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;
