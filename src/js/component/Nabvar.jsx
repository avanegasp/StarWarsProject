import React, { useContext } from "react";
import "../../styles/navbar.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRadiation } from "@fortawesome/free-solid-svg-icons";

const favsNames = {
  fontFamily: '"Sahara", sans-serif',
  color: "white",
  fontSize: "15px",
};

const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary m-0">
      <div className="container-fluid bg-dark">
        <Link
          to="/"
          className="wordNavbar nav-link active text-white"
          aria-current="page"
        >
          StarWars
        </Link>
        <div className="collapse navbar-collapse mt-3">
          <Search />
        </div>
        <div
          className="collapse navbar-collapse justify-content-end fs-5 "
          id="navbarNavAltMarkup"
        >
          <div className="btn-group dropstart">
            <button
              className="favNavbar btn btn-ligth rounded-pill"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favs{" "}
              <span className="favNumNavbar">{store.favorites.length}</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <div className="bg-white">
                  {store.favorites.map((favorite, index) => (
                    <div className="d-flex" key={index}>
                      <p className="dropdown-item text-black" style={favsNames}>
                        {favorite.name}
                      </p>
                      <span
                        className="me-3 mb-3 fs-3"
                        onClick={() => {
                          actions.removeToFavorite(favorite.name);
                        }}
                      >
                        <FontAwesomeIcon icon={faCircleRadiation} />
                      </span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
