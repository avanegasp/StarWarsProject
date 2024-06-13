import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import StarWars from "../component/StarWars.jsx";

const CharactersInfo = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <div className="d-flex justify-content-end mt-3">
        <Link to="/" className="btn btn-dark">
          Home
        </Link>
      </div>
      <div className="text-center">
        <h1>Personajes</h1>
      </div>
      <StarWars elements={store.characters} />
      <br />
    </div>
  );
};

export default CharactersInfo;
