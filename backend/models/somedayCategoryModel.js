import mongoose from 'mongoose'

const somedayCategoryModel = mongoose.Schema({
  somedayCategoryId: String,
  name: String,
})

const SomedayCategory = mongoose.model('somedayCategoryModel', somedayCategoryModel)

export default SomedayCategory
