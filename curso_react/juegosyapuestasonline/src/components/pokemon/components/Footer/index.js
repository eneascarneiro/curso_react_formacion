import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__countryInfo">
        <p>Calderon  <a className="black_text" href="https://www.pokemon.com/es/">Te invito a conocer pokemons</a> </p>
      </div>
    </div>
  );
};
