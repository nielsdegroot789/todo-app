import mongoose from 'mongoose'

const somedayItemModel = mongoose.Schema({
  somedayCategoryId: String,
  name: String,
  description: { type: String, optional: true },
})

const SomedayItem = mongoose.model('someday-items', somedayItemModel)

export default SomedayItem
