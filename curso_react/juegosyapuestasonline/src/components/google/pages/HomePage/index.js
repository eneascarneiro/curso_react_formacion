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
        <div className="home__headerLeft">
          <Link to="/about">Sobre Google</Link>
          <Link to="/store">Tienda</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Imágenes</Link>
          <AiFillAppstore />
          <SiGravatar />
        </div>
      </div>
      <div className="home__body">
        <img
          className="home__bodyImg"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Brand Google"
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
