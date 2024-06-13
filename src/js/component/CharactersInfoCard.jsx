import React from "react";

const CharacterInfoCard = ({ name, id }) => {
  return (
    <>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </>
  );
};

export default CharacterInfoCard;
