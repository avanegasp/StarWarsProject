import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import StarWars from "../component/StarWars.jsx";
import Title from "../component/Title.jsx";

const CharactersInfo = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <Title title={"Personajes"} nameBtn={"Home"} />
      <StarWars elements={store.characters} />
      <br />
    </div>
  );
};

export default CharactersInfo;
