import React, { useContext } from "react";
import Card from "./CardExternInfo.jsx";

const MapGeneralStarships = ({ elements }) => {
  return (
    <>
      {elements.map((element, index) => (
        <div
          className="d-inline-flex col-3 mt-5 justify-content-center"
          key={index}
        >
          <div className="card text-center" style={{ width: "15rem" }}>
            <Card
              name={element.name}
              id={element.url.split("/")[5]}
              urlName="starships"
              altName="Starships"
              model={element.model}
              manufacturer={element.manufacturer}
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default MapGeneralStarships;
