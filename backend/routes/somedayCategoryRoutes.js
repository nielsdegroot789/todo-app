import { addSomedayCategory } from '../controllers/somedayCategoryController.js'
import express from 'express'
const router = express.Router()

router.route('/add').post(addSomedayCategory)

export default router
