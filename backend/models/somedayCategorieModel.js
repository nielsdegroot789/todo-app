import mongoose from 'mongoose'

const somedayCategoryModel = mongoose.Schema({
  name: String,
  description: { type: String, optional: true },
})

const SomedayCategory = mongoose.model('someday-categories', somedayCategoryModel)

export default SomedayCategory
