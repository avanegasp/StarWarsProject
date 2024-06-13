import React from "react";

const CharactersInfoCard = ({ name, id }) => {
  return (
    <>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        className="card-img-top"
        alt="characters"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </>
  );
};

export default CharactersInfoCard;
