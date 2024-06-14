import React from "react";
import Card from "./Card.jsx";

const MapGeneralCharacters = ({ elements }) => {
  return (
    <>
      {elements.map((element, index) => (
        <div className="d-inline-flex col-2 mt-5" key={index}>
          <div className="card text-center" style={{ width: "18rem" }}>
            <Card
              name={element.name}
              id={element.uid}
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
