import asyncHandler from 'express-async-handler'
import Someday from '../models/somedayModel.js'
import Stuff from '../models/stuffModel.js'
import { deleteStuff } from './stuffController.js'

/* TODO: put rule in eslint that imports in backend should have the file extension */
const addSomeday = asyncHandler(async (res, req) => {
  /* not so readable, would like to know what is in data */
  const data = res.body
  console.log(data)
  const somedayItem = new Someday(data)
  await somedayItem.save()
  await Stuff.deleteOne(data)
  req.end()
})

export { addSomeday }
