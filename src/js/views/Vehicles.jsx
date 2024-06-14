import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Title from "../component/Title.jsx";
import MapGeneralVehicles from "../component/VehiclesMap.jsx";

const Vehicles = () => {
  const { store } = useContext(Context);
  return (
    <div className="container">
      <Title title="Vehicles" />
      <MapGeneralVehicles elements={store.vehicles} />
    </div>
  );
};

export default Vehicles;
