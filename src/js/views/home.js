import React from "react";
import rigoImage from "../../img/inicioStarwars.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="text-center mt-5">
    <h1 className="text-center mb-5 ">May the Force be with you</h1>
    <p>
      <img className="mb-5 " src={rigoImage} />
    </p>
    <Link to="/characters" className="btn btn-dark me-5">
      Characters
    </Link>
    <Link to="/planets" className="btn btn-dark me-5">
      Planets
    </Link>
    <Link to="/vehicles" className="btn btn-dark">
      Vehicles
    </Link>
  </div>
);
