import { addTodo, getTodos, deleteTodo, updateTodo } from '../controllers/todoController.js'
import express from 'express'
const router = express.Router()

router.route('/getTodos').get(getTodos)
router.route('/add').post(addTodo)
router.route('/delete').post(deleteTodo)
router.route('/update').post(updateTodo)

export default router
