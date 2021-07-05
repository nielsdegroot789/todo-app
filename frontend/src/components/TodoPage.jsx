import React, { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const TodoPage = () => {
  const [todo, setTodo] = useState();
  const [filterText, setFilterText] = useState();
  // make object

  console.log(todo);
  const submitTodo = () => {
    console.log(todo);
    axios.post("http://localhost:5000/todos/add", todo);
  };

  console.log(todo);
  const onChange = (todo) => {
    console.log(todo);
    setTodo(todo);
  };

  return (
    <div id="todoPage">
      <h1>Todos</h1>
      <SearchBar setFilterText={(e) => setFilterText(e)} />
      <AddTodoForm value={todo} onSubmit={submitTodo} onChange={onChange} />
      {/* {todos.map((todo) => (
        <h2>{todo}</h2>
      ))} */}
    </div>
  );
};

export default TodoPage;
