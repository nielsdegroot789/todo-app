import {
  addStuff,
  getStuffs,
  deleteStuff,
  updateStuff,
  fetchStuff,
} from '../controllers/stuffController.js'

import express from 'express'
const router = express.Router()

router.route('/list').get(getSomedayItems)
router.route('/add').post(addSomedayItem)

export default router
