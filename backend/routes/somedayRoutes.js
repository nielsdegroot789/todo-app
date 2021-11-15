import { addSomeday } from '../controllers/somedayController.js'
import express from 'express'
const router = express.Router()

router.route('/add').post(addSomeday)

export default router
