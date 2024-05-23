const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Todo = require('../Model/tododata');

// Get all todos for authenticated user
router.get('/', auth, async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add a new todo
router.post('/', auth, async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
      user: req.user.id,
    });

    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update a todo
router.put('/:id', auth, async (req, res) => {
    const { title, description, completed } = req.body;
    const todoId = req.query.id;
  
    // Validate the ObjectId
    if (!mongoose.Types.ObjectId.isValid(todoId)) {
      return res.status(400).json({ msg: 'Invalid todo ID' });
    }
  
    const todoFields = {};
    if (title) todoFields.title = title;
    if (description) todoFields.description = description;
    if (completed !== undefined) todoFields.completed = completed;
  
    try {
      let todo = await Todo.findById(todoId);
  
      if (!todo) return res.status(404).json({ msg: 'Todo not found' });
  
      // Ensure user owns the todo
      if (todo.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
      
      todo = await Todo.findByIdAndUpdate(
        todoId,
        { $set: todoFields },
        { new: true }
      );
  
      res.json(todo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

// Delete a todo
router.delete('/:id', auth, async (req, res) => {
  try {
    const todoId = req.query.id;

    // Check if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(todoId)) {
      return res.status(400).json({ msg: 'Invalid ID format' });
    }

    let todo = await Todo.findById(todoId);

    if (!todo) return res.status(404).json({ msg: 'Todo not found' });

    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Todo.findOneAndDelete(todoId);

    res.json({ msg: 'Todo removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;