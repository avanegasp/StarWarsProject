import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

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
                {store.favorites.map((favorite) => (
                  <p key={favorite.id} className="dropdown-item">
                    {favorite.name}
                  </p>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
