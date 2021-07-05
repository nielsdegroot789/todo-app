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
          const obj = { name: event.target.value };
          console.log(obj);
          return obj;
        }}
        type="text"
        class=" input inputText"
      />
    </>
  );
};

export default PctInput;
