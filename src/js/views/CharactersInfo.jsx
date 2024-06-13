import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import CharacterInfoCard from "../component/CharactersInfoCard.jsx";

const CharactersInfo = () => {
  const { store } = useContext(Context);
  console.log(store);

  return (
    <div className="container-fluid">
      <h1>Estos son los personajes</h1>
      {store.characters.map((character) => {
        return (
          <div
            className="card col-3 d-inline-flex"
            style={{ width: "18rem" }}
            key={character.uid}
          >
            <CharacterInfoCard name={character.name} uid={character.uid} />
          </div>
        );
      })}

      <br />
      <div>
        <Link to="/" className="btn btn-success">
          Home
        </Link>
      </div>
    </div>
  );
};

export default CharactersInfo;
