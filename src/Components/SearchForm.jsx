import React from "react";
import "./SearchForm.css";

const SearchForm = ({ name, handleSearch, setName }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        id="hero-search"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button id="hero-search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
