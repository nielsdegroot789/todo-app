import mongoose from 'mongoose'

const somedayCategorySchema = mongoose.Schema({
  name: String,
  somedayId: { type: String, optional: true },
})

const SomedayCategory = mongoose.model('somedayCategory', somedayCategorySchema)

export default SomedayCategory
