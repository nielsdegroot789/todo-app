import mongoose from 'mongoose'

const somedayModel = mongoose.Schema({
  name: String,
  categoryId: { type: String, optional: true },
})

const Someday = mongoose.model('somedays', somedayModel)

export default Someday
