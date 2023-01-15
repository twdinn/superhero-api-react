import React from "react";
import "./SuperPowers.css";

const SuperPowers = ({ superHero }) => {
  const statToEmoji = {
    intelligence: "🧠",
    strength: "💪",
    speed: "⚡️",
    durability: "🏋️",
    power: "🔋",
    combat: "🤺",
  };

  return (
    <div>
      {superHero && (
        <div className="hero-info">
          <div className="hero-info-img">
            <h2>{superHero.name}</h2>
            <img
              className="spin-in"
              src={superHero.image.url}
              alt={superHero.name}
            />
          </div>

          <div className="super-powers">
            {Object.keys(superHero.powerstats).map((stat) => (
              <p className="stats" key={stat}>
                {statToEmoji[stat]} {stat.toUpperCase()}:{" "}
                {superHero.powerstats[stat]}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperPowers;
