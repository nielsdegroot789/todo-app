import React from "react";

const PctTextBox = ({ name, value, onChange, label }) => {
  return (
    <div>
      {label && (
        <label for={name} className="input">
          {label}
        </label>
      )}
      <input
        name={name}
        value={value}
        onChange={(event) => {
          onChange(name, event.target.value);
        }}
        type="textbox"
        class="input inputText"
      />
    </div>
  );
};

export default PctTextBox;
