import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Title from "../component/Title.jsx";
import MapGeneralStarships from "../component/StarshipsMap.jsx";

const Starships = () => {
  const { store } = useContext(Context);
  return (
    <div className="d-flex flex-wrap container-fluid">
      <Title title="Starships" />
      <MapGeneralStarships elements={store.starships} />
    </div>
  );
};

export default Starships;
