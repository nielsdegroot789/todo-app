import SomedayCategory from '../models/somedayCategoryModel'

const addSomedayCategory = asyncHandler(async (res, req) => {
  const data = req.body()

  const somedayCategory = new SomedayCategory()
  await somedayCategory.save()
  res.end()
})

export default { addSomedayCategory }
