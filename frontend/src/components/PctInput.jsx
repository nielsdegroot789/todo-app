import React from "react";

const PctInput = ({ name, value, onChange, label }) => {
  return (
    <>
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
        type="text"
        class=" input inputText"
      />
    </>
  );
};

export default PctInput;
