import React from "react";
import ImgAndNameCard from "./ImgAndNameCard.jsx";

const MapGeneral = ({ elements }) => {
  return (
    <>
      {elements.map((element) => (
        <div className="d-inline-flex col-2 mt-5" key={element.id}>
          <div className="card text-center" style={{ width: "18rem" }}>
            <ImgAndNameCard name={element.name} id={element.uid} />
          </div>
        </div>
      ))}
    </>
  );
};

export default MapGeneral;
