import React, { useState } from "react";
import PctInput from "./PctInput";
import PctTextBox from "./PctTextBox";
import PctDate from "./PctDate";

const AddTodoForm = ({ name, value, state, addTodo, onChange, onSubmit }) => {
  return (
    <div className="addForm">
      <label for="name">Name:</label>
      <PctInput
        name="name"
        label="Todo name"
        value={state?.name}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <PctTextBox
        name="description"
        label="Description"
        value={state?.description}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <PctDate
        name="Date"
        label="Date"
        value={state?.date}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <button onClick={onSubmit}>Add todo</button>
    </div>
  );
};

export default AddTodoForm;
