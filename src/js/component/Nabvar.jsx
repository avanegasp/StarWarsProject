import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary m-0">
      <div className="container-fluid bg-dark">
        <Link
          to="/"
          className="nav-link active fs-1 text-white"
          aria-current="page"
        >
          StarWars
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end fs-5 "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <button type="button" className="btn btn-light me-5">
              Favorites
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
