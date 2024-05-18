const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        required: true,
        unique: true,
    },
    registration: {
        type: String,
        required: true,
        unique: true,
    },
    subjects: {
        type: [String],
        required: true,
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },
});

var tododata = mongoose.model('tododata', todoSchema);
module.exports = tododata;