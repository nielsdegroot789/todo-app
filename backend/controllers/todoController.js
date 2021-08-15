import Todo from '../models/todoModel.js'
import asyncHandler from 'express-async-handler'

const addTodo = asyncHandler(async (req, res) => {
  const todo = req.body

  const newTodo = new Todo(todo)
  await newTodo.save()
  res.end()
})

const getTodos = asyncHandler(async (req, res) => {
  const filter = {}
  const query = req.query

  if (query?.search) {
    filter.name = new RegExp(`^${query.search}`, 'i')
  }

  const todos = await Todo.find(filter)
  if (!todos) {
    res.status(404).json({ message: 'Todos not found' })
    throw new Error('Todos not found')
  }

  res.send(todos)
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