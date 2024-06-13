import React from "react";
import { Link } from "react-router-dom";

const Planets = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-end mt-3">
        <Link to="/" className="btn btn-dark">
          Home
        </Link>
      </div>
      <div className="text-center">
        <h1>Planets</h1>
      </div>
    </div>
  );
};

export default Planets;
