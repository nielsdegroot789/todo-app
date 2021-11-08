import asyncHandler from 'express-async-handler'
import SomedayCategory from '../models/somedayCategoryModel.js'

const addSomedayCategory = asyncHandler(async (req, res) => {
  const data = req.body

  const somedayCategory = new SomedayCategory(data)
  await somedayCategory.save()
  res.end
})

export { addSomedayCategory }
