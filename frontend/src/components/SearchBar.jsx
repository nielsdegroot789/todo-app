import React from "react";

const SearchBar = ({ setFilterText }) => {
  return (
    <div>
      <input
        name="searchString"
        for="searchString"
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
