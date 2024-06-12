const Todo = require('../models/todo.model');

// Get all todos
exports.getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find();
        if (!todos) {
            return res.status(404).json({ message: 'No todos found' });
        } else if (todos.length === 0) {
            return res.status(404).json({ message: 'No todos found' });
        }
        return res.status(200).json({
            message: 'Todos retrieved successfully',
            todos: todos,
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// Get a single todo
exports.getTodoById = async (req, res, next) => {
    const todoId = req.params.id;

    // regex to validate MongoDB ObjectId
    const isValidObjectId = new RegExp(/^[0-9a-fA-F]{24}$/);

    if (!todoId) {
        return res.status(400).json({ message: 'Todo ID is required' });
    }

    if (!isValidObjectId.test(todoId)) {
        return res.status(400).json({ message: 'Invalid todo ID' });
    }

    try {
        const todo = await Todo.findById(todoId);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        return res.status(200).json({
            message: 'Todo retrieved successfully',
            todo: todo,
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// Create a new todo
exports.createTodo = async (req, res, next) => {
    const { title, description, completed, dueDate, priority } = req.body;

    if (!title || !description || !priority) {
        return res.status(400).json({ message: 'Title, description, and priority are required' });
    }

    try {
        const todo = new Todo({
            title: title,
            description: description,
            completed: completed || false,
            dueDate: dueDate || null,
            priority: priority
        });

        await todo.save();

        return res.status(201).json({
            message: 'Todo created successfully',
            todo: todo
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// Update a todo
exports.updateTodo = async (req, res, next) => {
    const { title, description, completed, dueDate, priority } = req.body;
    const todoId = req.params.id;

    const isValidObjectId = new RegExp(/^[0-9a-fA-F]{24}$/);

    if (!todoId) {
        return res.status(400).json({ message: 'Todo ID is required' });
    }

    if (!isValidObjectId.test(todoId)) {
        return res.status(400).json({ message: 'Invalid todo ID' });
    }


    try {
        const todo = await Todo.findById(todoId);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        if (title) {
            todo.title = title;
        }

        if (description) {
            todo.description = description;
        }

        if (completed) {
            todo.completed = completed;
        }

        if (dueDate) {
            todo.dueDate = dueDate;
        }

        if (priority) {
            todo.priority = priority;
        }

        await todo.save();

        return res.status(200).json({
            message: 'Todo updated successfully',
            todo: todo
        });

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// Delete a todo
exports.deleteTodo = async (req, res, next) => {
    const todoId = req.params.id;

    const isValidObjectId = new RegExp(/^[0-9a-fA-F]{24}$/);

    if (!todoId) {
        return res.status(400).json({ message: 'Todo ID is required' });
    }

    if (!isValidObjectId.test(todoId)) {
        return res.status(400).json({ message: 'Invalid todo ID' });
    }

    try {
        const todo = await Todo.findByIdAndDelete(todoId);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        return res.status(200).json({
            message: 'Todo deleted successfully',
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}