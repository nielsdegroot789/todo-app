import Todo from '../models/todoModel.js'
import asyncHandler from 'express-async-handler'
// TODO: security checks
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

const deleteTodo = asyncHandler(async (req, res) => {
  const todoId = req.body
  Todo.deleteOne(todoId)
  res.end()
})

const updateTodo = asyncHandler(async (req, res) => {
  const { id, ...params } = req.body
  Todo.updateOne(id, { $set: { ...params } })
  res.end()
})
export { addTodo, getTodos, deleteTodo, updateTodo }
