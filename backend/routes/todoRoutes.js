import { addTodo, getTodos } from '../controllers/todoController.js'
import express from 'express'
const router = express.Router()

router.route('/getTodos').get(getTodos)
router.route('/add').post(addTodo)

export default router
