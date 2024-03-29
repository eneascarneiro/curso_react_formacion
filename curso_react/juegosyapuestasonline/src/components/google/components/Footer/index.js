import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__countryInfo">
        <p>España</p>
      </div>
      <div className="footer__links">
          <Link to="https://www.pokemon.com/es/">Pokemon</Link>
      </div>
    </div>
  );
};
