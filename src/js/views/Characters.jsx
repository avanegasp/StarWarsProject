import React, { useContext } from "react";
import "../../styles/characters.css";
import characterBackground from "../../img/rogueone.jpg";
import { Context } from "../store/appContext.js";
import MapGeneralCharacters from "../component/CharactersMap.jsx";
import Title from "../component/Title.jsx";

const Characters = () => {
  const { store } = useContext(Context);

  return (
    <div
      className="d-flex flex-wrap container-fluid charactersBackground"
      style={{ backgroundImage: `url(${characterBackground})` }}
    >
      {/* <Title title={"Characters"} /> */}
      <MapGeneralCharacters elements={store.characters} />
    </div>
  );
};

export default Characters;
