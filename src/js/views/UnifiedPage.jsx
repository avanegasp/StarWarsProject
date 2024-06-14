import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import MapGeneral from "../component/MapGeneralCaracters.jsx";
import Title from "../component/Title.jsx";

const UnifiedPage = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <Title title={"Personajes"} nameBtn={"Home"} />
      <MapGeneral elements={store.characters} />
      <br />
    </div>
  );
};

export default UnifiedPage;
