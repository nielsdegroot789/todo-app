import Todo from '../models/todoModel.js'
import asyncHandler from 'express-async-handler'
// TODO: security checks
const addTodo = asyncHandler(async (req, res) => {
  const todo = req.body
  await Todo.insertMany(todo)
  res.end()
})

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({})
  if (!todos) {
    res.status(404).json({ message: 'Todos not found' })
    throw new Error('Todos not found')
  }
  res.json(todos)
  res.end()
})

const deleteTodo = asyncHandler(async (req, res) => {
  const todoId = req.body
  if (!todoId) {
    res.status(404)
    throw new Error('id not found')
  }
  await Todo.deleteOne(todoId)
  res.end()
})

const updateTodo = asyncHandler(async (req, res) => {
  const data = req.body

  if (!data?._id) {
    res.status(404)
    throw new Error('id not found')
  }

  const todo = await Todo.findOne({ _id: data._id }).exec()

  todo.name = data?.name
  todo.description = data?.description
  todo.dueDate = data?.dueDate

  await todo.save()
  res.end()
})

const fetchTodo = asyncHandler(async (req, res) => {
  const data = req.body

  if (!data?._id) {
    res.status(404)
    throw new Error('id not found')
  }

  const todo = await Todo.findOne(data._id)

  res.end()
  return todo
})
export { addTodo, getTodos, deleteTodo, updateTodo, fetchTodo }
