import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Hello Rigo!</h1>
    <p>
      <img src={rigoImage} />
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
