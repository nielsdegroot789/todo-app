import { addSomedayItem } from '../controllers/somedayItemController.js'
import express from 'express'
const router = express.Router()

router.route('/add').post(addSomedayItem)

export default router
