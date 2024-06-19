import React, { useContext } from "react";
import "../../styles/planets.css";
import planetBackground from "../../img/starwarsDraw.jpg";
import { Context } from "../store/appContext.js";
import Title from "../component/Title.jsx";
import MapGeneralPlanets from "../component/PlanetsMap.jsx";

const Planets = () => {
  const { store } = useContext(Context);

  return (
    <div
      className="planetsBackground"
      style={{ backgroundImage: `url(${planetBackground})` }}
    >
      {/* <Title title="Planets" /> */}
      <div className="d-flex flex-wrap container-fluid">
        <MapGeneralPlanets elements={store.planets} />
      </div>
    </div>
  );
};

export default Planets;
