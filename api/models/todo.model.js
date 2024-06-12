const { Schema, model, Types } = require('mongoose');

const Todo = new Schema({
    title: {
        type: 'String',
        required: true,
        trim: true,
    },
    description: {
        type: 'String',
        required: false,
        trim: true,
    },
    completed: {
        type: 'Boolean',
        default: false,
    },
    dueDate: {
        type: 'Date',
        required: false,
        default: null,
    },
    priority: {
        type: 'String',
        required: true,
        enum: ['low', 'medium', 'high'],
        default: 'low',
    },

}, { timestamps: true },
);

module.exports = model('Todos', Todo);
