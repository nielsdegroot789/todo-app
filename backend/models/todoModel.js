import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  descsription: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
