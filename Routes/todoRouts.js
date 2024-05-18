const express = require("express");
const todo_Act = require("../Controller/todosController.js");
const router = express.Router();

router.get('/', todo_Act.getTodos);
router.get('/todoId', todo_Act.getSpecTodo);
router.post('/', todo_Act.createTodo);
router.patch('/todoId', todo_Act.updateTodo);
router.delete('/', todo_Act.deleteTodo);

module.exports = router;