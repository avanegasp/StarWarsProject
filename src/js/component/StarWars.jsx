import React from "react";
import CharacterInfoCard from "../component/CharactersInfoCard.jsx";

const StarWars = ({ elements }) => {
  return (
    <div className="container">
      {elements.map((element) => {
        return (
          <div className="d-inline-flex col-2 mt-5">
            <CharacterInfoCard name={element.name} id={element.uid} />
          </div>
        );
      })}
    </div>
  );
};

export default StarWars;
