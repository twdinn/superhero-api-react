import React from "react";
import "./RandomHero.css";

const RandomHero = ({ handleRandom }) => {
  return (
    <button className="random-btn" onClick={handleRandom}>
      Random Hero
    </button>
  );
};

export default RandomHero;
