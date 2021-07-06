import React from "react";

const PctDate = ({ name, value, onChange, label }) => {
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
        type="date"
        class=" input inputDate"
      />
    </>
  );
};

export default PctDate;
