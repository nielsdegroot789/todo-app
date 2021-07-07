import { addTodo } from '../controllers/todoController.js'
import express from 'express'
const router = express.Router()

router.route('/add').post(addTodo)

export default router
