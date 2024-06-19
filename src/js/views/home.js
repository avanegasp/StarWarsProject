import React from "react";
import { Link } from "react-router-dom";
import starWarsImage from "../../img/the-rise.jpg";
import "../../styles/home.css";

export const Home = () => (
  <div className="home text-center">
    <div
      className="backgroundHome"
      style={{
        backgroundImage: `url(${starWarsImage})`,
      }}
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="wordsHome">
          <Link to="/characters" className="linkHome btn btn-ligth">
            Characters
          </Link>
          <Link to="/planets" className="linkHome btn btn-ligth">
            Planets
          </Link>
          <Link to="/starships" className="linkHome btn btn-ligth">
            Starships
          </Link>
        </div>
      </div>
    </div>
  </div>
);
