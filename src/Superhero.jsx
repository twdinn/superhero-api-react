// SuperHero Generator
// By: Tyler Dinn

// List of Heros at "https://superheroapi.com/ids.html"
// You may have to install "Moesif Origin & CORS Changer"
// google chrome extension if you get a cors blocked error.

import React, { useState } from "react";
import axios from "axios";
import "./Superhero.css";
import Header from "./Components/Header";
import SearchForm from "./Components/SearchForm";
import RandomHero from "./Components/RandomHero";
import SuperPowers from "./Components/SuperPowers";

// API Token and URL
const SUPERHERO_TOKEN = "10166257269910585";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const Superhero = () => {
  const [name, setName] = useState("");
  const [superHero, setSuperHero] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`${BASE_URL}/search/${name}`)
      .then((response) => response.data)
      .then((data) => {
        setSuperHero(data.results[0]);
      });
  };

  const handleRandom = () => {
    const numbeOfHeros = 731;
    const id = Math.floor(Math.random() * numbeOfHeros + 1);
    axios
      .get(`${BASE_URL}/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setSuperHero(data);
      });
  };

  return (
    <div className="container">
      <h2>Superhero App</h2>
      <Header />
      <div className="heroBtns">
        <SearchForm setName={setName} name={name} handleSearch={handleSearch} />
        <RandomHero handleRandom={handleRandom} />
      </div>

      <SuperPowers superHero={superHero} />
    </div>
  );
};

export default Superhero;
