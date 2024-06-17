import React from "react";
import Card from "./CardExternInfo.jsx";

const MapGeneralCharacters = ({ elements }) => {
  return (
    <>
      {elements.map((element, index) => (
        <div className="d-inline-flex col-2 mt-5" key={index}>
          <div className="card text-center" style={{ width: "18rem" }}>
            <Card
              name={element.name}
              gender={element.gender}
              hair_color={element.hair_color}
              eye_color={element.eye_color}
              id={element.url.split("/")[5]}
              urlName="characters"
              altName="Characters"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default MapGeneralCharacters;
