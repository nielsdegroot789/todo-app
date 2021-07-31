import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
