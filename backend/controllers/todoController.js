import Todo from '../models/todoModel.js'
import asyncHandler from 'express-async-handler'

const addTodo = asyncHandler(async (req, res) => {
  const todo = req.body
  Todo.insertMany(todo)
  res.end()
})

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({})
  if (!todos) {
    res.status(404).json({ message: 'Todos not found' })
    throw new Error('Todos not found')
  }
  console.log(todos)
  res.json(todos)
})
export { addTodo, getTodos }
