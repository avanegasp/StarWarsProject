import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import MapGeneralCharacters from "../component/CharactersMap.jsx";
import Title from "../component/Title.jsx";

const Characters = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <Title title={"Personajes"} />
      <MapGeneralCharacters elements={store.characters} />
    </div>
  );
};

export default Characters;
