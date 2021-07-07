import Todo from '../models/todoModel.js'
import asyncHandler from 'express-async-handler'

const addTodo = asyncHandler(async (req, res) => {
  const todo = req.body
  Todo.insertMany(todo)
  res.end()
})

export { addTodo }
