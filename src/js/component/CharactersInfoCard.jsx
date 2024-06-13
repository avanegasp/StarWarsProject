import React from "react";

const CharacterInfoCard = ({ name, id }) => {
  return (
    <>
      <div className="card  text-center" style={{ width: "18rem" }} key={id}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          className="card-img-top"
          alt="characters"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </>
  );
};

export default CharacterInfoCard;
