import React from "react";
import "./HomePage.css";

import { Link } from "react-router-dom";
import {AiFillAppstore}  from 'react-icons/ai'
import {SiGravatar} from 'react-icons/si'

import { Search } from "../../components/Search";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1> Buscando pokemons </h1>
      </div>
      <div className="home__body">
        <img
          className="home__bodyImg"
          src="https://media.vandal.net/i/1200x630/10-2021/2021105724573_1.jpg"
          alt="Brand Pokemon"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
      <div className="home__footer">
        <Footer />
      </div>
    </div>
  );
};
