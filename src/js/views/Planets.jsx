import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Title from "../component/Title.jsx";
import MapGeneralPlanets from "../component/PlanetsMap.jsx";

const Planets = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <Title title="Planets" />
      <MapGeneralPlanets elements={store.planets} />
    </div>
  );
};

export default Planets;
