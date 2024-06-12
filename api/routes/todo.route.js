const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo.controller');

router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.patch('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;