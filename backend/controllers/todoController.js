import Todo from "../models/todoModel.js";
import asyncHandler from "express-async-handler";

const addTodo = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.end();
});

export { addTodo };
