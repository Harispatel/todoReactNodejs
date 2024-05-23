const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    created_on: {
        type: Date,
        default: new Date(),
    },
  });

var tododata = mongoose.model('tododata', todoSchema);
module.exports = tododata;