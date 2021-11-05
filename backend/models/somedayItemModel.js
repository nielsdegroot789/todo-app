import mongoose from 'mongoose'

const somedayItemModel = mongoose.Schema({
  somedayId: String,
  name: String,
  category : { type: String, optional: true },
  description: { type: String, optional: true },
})

const SomedayItem = mongoose.model('somedays', somedayItemModel)

export default SomedayItem
