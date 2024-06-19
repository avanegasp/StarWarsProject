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
      //   backgroundSize: `cover`,
      //   backgroundPosition: `center`,
      //   height: `100%`,
      //   width: `100%`,
    >
      {/* <h1 className="text-center">May the Force be with you</h1> */}
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="wordsHome">
          <Link to="/characters" className="linkHome btn btn-ligth me-5">
            Characters
          </Link>
          <Link to="/planets" className="linkHome btn btn-ligth me-5">
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
