import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Title from "../component/Title.jsx";
import ImgAndNameCard from "../component/Card.jsx";
import MapGeneralVehicles from "../component/VehiclesMap.jsx";

const Vehicles = () => {
  const { store } = useContext(Context);
  return (
    <div>
      <Title title="Vehicles" nameBtn="Home" />
      <MapGeneralVehicles elements={store.vehicles} />
      <ImgAndNameCard />
    </div>
  );
};

export default Vehicles;
