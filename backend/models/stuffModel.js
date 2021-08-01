import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
})

const Stuff = mongoose.model('Stuff', todoSchema)

export default Stuff
