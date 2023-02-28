import React from "react";
import "./SearchForm.css";

const SearchForm = ({ name, handleSearch, setName, handleRandom }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        className="hero-search"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="btns">
        <button className="hero-search-btn" type="submit">
          Search
        </button>
        <button className="hero-search-btn" onClick={handleRandom}>
          Random Hero
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
