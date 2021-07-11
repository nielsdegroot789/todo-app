import { addTodo, getTodos, deleteTodo, updateTodo } from '../controllers/todoController.js'
import express from 'express'
const router = express.Router()

router.route('/getTodos').get(getTodos)
router.route('/add').post(addTodo)
router.route('/delete').delete(deleteTodo)
router.route('/update').put(updateTodo)

export default router
