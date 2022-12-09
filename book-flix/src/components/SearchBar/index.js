import React from "react";

const SearchBar = () => {
  return (
    <form id="search-bar">
      <input
        id="search-input"
        type="text"
        placeholder="Enter by Name, Author or Date"
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );
};

export default SearchBar;
