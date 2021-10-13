import asyncHandler from 'express-async-handler'
import SomedayCategory from '../models/somedayCategorieModel'

const addSomedayCategory = asyncHandler(async (res, req) => {
  const data = req.body()

  const somedayItem = new SomedayCategory(data)
  await somedayItem.save()
  res.end()
})

export default { addSomedayCategory }
