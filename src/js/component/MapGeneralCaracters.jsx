import React from "react";
import ImgAndNameCard from "./ImgAndNameCard.jsx";

const MapGeneralCharacters = ({ elements }) => {
  return (
    <>
      {elements.map((element, index) => (
        <div className="d-inline-flex col-2 mt-5" key={index}>
          <div className="card text-center" style={{ width: "18rem" }}>
            <ImgAndNameCard
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
