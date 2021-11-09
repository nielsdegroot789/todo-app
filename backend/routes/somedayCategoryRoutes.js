import {
  addSomedayCategory,
  getSomedayCategories,
} from '../controllers/somedayCategoryController.js'
import express from 'express'
const router = express.Router()

router.route('/add').post(addSomedayCategory)
router.route('/list').get(getSomedayCategories)

export default router
