const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
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
        required: true,
    },
    created_on: {
        type: Date,
        default: new Date(),
    },
});

var tododata = mongoose.model('tododata', todoSchema);
module.exports = tododata;