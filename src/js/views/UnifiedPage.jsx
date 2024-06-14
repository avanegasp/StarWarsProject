import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import MapGeneralCharacters from "../component/MapGeneralCharacters.jsx";
import Title from "../component/Title.jsx";

const UnifiedPage = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <Title title={"Personajes"} nameBtn={"Home"} />
      <MapGeneralCharacters elements={store.characters} />
      <br />
    </div>
  );
};

export default UnifiedPage;
