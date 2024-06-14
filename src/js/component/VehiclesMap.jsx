import React, { useContext } from "react";
import ImgAndNameCard from "./Card.jsx";

const MapGeneralVehicles = ({ elements }) => {
  return (
    <>
      {elements.map((element) => (
        <div className="d-inline-flex col-2 mt-5" key={element.uid}>
          <div className="card text-center" style={{ width: "18rem" }}>
            <ImgAndNameCard
              name={element.name}
              id={element.uid}
              urlName="vehicles"
              altName="Vehicles"
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default MapGeneralVehicles;