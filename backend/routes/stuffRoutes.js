import {
  addStuff,
  getStuffs,
  deleteStuff,
  updateStuff,
  fetchStuff,
} from '../controllers/stuffController.js'
import express from 'express'
const router = express.Router()

router.route('/list').get(getStuffs)
router.route('/fetch').get(fetchStuff)
router.route('/add').post(addStuff)
router.route('/delete').delete(deleteStuff)
router.route('/update').put(updateStuff)

export default router
