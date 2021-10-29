import Stuff from '../models/stuffModel.js'
import asyncHandler from 'express-async-handler'

const addStuff = asyncHandler(async (req, res) => {
  const stuff = req.body

  const newStuff = new Stuff(stuff)
  await newStuff.save()
  res.end()
})

const getStuffs = asyncHandler(async (req, res) => {
  const filter = {}
  const query = req.query

  if (query?.search) {
    const searchRegEx = new RegExp(`^${query.search}`, 'i')
    filter.$or = [{ name: searchRegEx }, { description: searchRegEx }]
  }
  console.log(filter)
  const todos = await Stuff.find(filter)
  if (!todos) {
    res.status(404).json({ message: 'Stuffs not found' })
    throw new Error('Stuffs not found')
  }

  res.send(todos)
  res.end()
})

const deleteStuff = asyncHandler(async (req, res) => {
  const todoId = req.body
  if (!todoId) {
    res.status(404)
    throw new Error('id not found')
  }

  await Stuff.deleteOne(todoId)
  res.end()
})

const updateStuff = asyncHandler(async (req, res) => {
  const data = req.body

  if (!data?._id) {
    res.status(404)
    throw new Error('id not found')
  }

  const stuff = await Stuff.findOne({ _id: data._id }).exec()

  stuff.name = data?.name
  stuff.description = data?.description
  stuff.dueDate = data?.dueDate

  await stuff.save()
  res.end()
})

const fetchStuff = asyncHandler(async (req, res) => {
  const data = req.body

  if (!data?._id) {
    res.status(404)
    throw new Error('id not found')
  }

  const stuff = await Stuff.findOne(data._id)

  res.end()
  return stuff
})
export { addStuff, getStuffs, deleteStuff, updateStuff, fetchStuff }
