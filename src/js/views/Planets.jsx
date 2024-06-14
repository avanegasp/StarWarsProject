import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Title from "../component/Title.jsx";
import ImgAndNameCard from "../component/Card.jsx";
import MapGeneralPlanets from "../component/PlanetsMap.jsx";

const Planets = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <Title title="Planets" nameBtn="Home" />
      <MapGeneralPlanets elements={store.planets} />
      <ImgAndNameCard />
    </div>
  );
};

export default Planets;
