import asyncHandler from 'express-async-handler'
import SomedayItem from '../models/somedayItemsModel'

const addSomedayItem = asyncHandler(async (res, req) => {
  const data = req.body()

  const somedayItem = new SomedayItem(data)
  await somedayItem.save()
  res.end()
})

export default { addSomedayItem }
