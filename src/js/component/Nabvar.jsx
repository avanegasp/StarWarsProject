import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRadiation } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { store } = useContext(Context);
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
          <div className="btn-group dropstart">
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favs
            </button>
            <ul className="dropdown-menu">
              <li>
                <div className="">
                  {store.favorites.map((favorite, index) => (
                    <div className="d-flex" key={favorite.id}>
                      <p className="dropdown-item">{favorite.name}</p>
                      <span className="me-3">
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
