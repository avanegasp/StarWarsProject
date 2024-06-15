import React, { useContext } from "react";
import Card from "./Card.jsx";

const MapGeneralVehicles = ({ elements }) => {
  return (
    <>
      {elements.map((element, index) => (
        <div className="d-inline-flex col-2 mt-5" key={index}>
          <div className="card text-center" style={{ width: "18rem" }}>
            <Card
              name={element.name}
              id={element.url.split("/")[5]}
              urlName="vehicles"
              altName="Vehicles"
              model={element.model}
              manufacturer={element.manufacturer}
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default MapGeneralVehicles;
