import mongoose from 'mongoose'

const stuffSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
})

const Stuff = mongoose.model('Stuff', stuffSchema)

export default Stuff
