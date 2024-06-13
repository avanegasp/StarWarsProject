import React from "react";
import CharactersInfoCard from "../component/CharactersInfoCard.jsx";

const StarWars = ({ elements }) => {
  return (
    <>
      {elements.map((element) => (
        <div className="d-inline-flex col-2 mt-5" key={element.id}>
          <div className="card text-center" style={{ width: "18rem" }}>
            <CharactersInfoCard name={element.name} id={element.uid} />
          </div>
        </div>
      ))}
    </>
  );
};

export default StarWars;
