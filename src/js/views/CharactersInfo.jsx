import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import CharacterInfoCard from "../component/CharactersInfoCard.jsx";

const CharactersInfo = () => {
  const { store } = useContext(Context);
  console.log(store);

  return (
    <div className="container">
      <div className="d-flex justify-content-end mt-3">
        <Link to="/" className="btn btn-success">
          Home
        </Link>
      </div>
      <div className="text-center">
        <h1>Personajes</h1>
      </div>
      {store.characters.map((character) => {
        return (
          <div className="d-inline-flex col-2 mt-5">
            <div
              className="card  text-center"
              style={{ width: "18rem" }}
              key={character.uid}
            >
              <CharacterInfoCard name={character.name} id={character.uid} />
            </div>
          </div>
        );
      })}

      <br />
    </div>
  );
};

export default CharactersInfo;
