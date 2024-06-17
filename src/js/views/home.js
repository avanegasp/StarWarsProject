import React from "react";
import starWarsImage from "../../img/inicioStarwars.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="text-center mt-2">
    <h1 className="text-center mt-2 ">May the Force be with you</h1>
    <div className="mt-3">
      <Link to="/characters" className="btn btn-dark me-5">
        Characters
      </Link>
      <Link to="/planets" className="btn btn-dark me-5">
        Planets
      </Link>
      <Link to="/starships" className="btn btn-dark">
        Starships
      </Link>
    </div>
    <p>
      <img className="mt-3 " src={starWarsImage} />
    </p>
  </div>
);
