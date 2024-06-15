import React from "react";

const Card = ({
  name,
  id,
  urlName,
  altName,
  gender,
  hair_color,
  eye_color,
  population,
  terrain,
  model,
  manufacturer,
}) => {
  return (
    <>
      <img
        src={`https://starwars-visualguide.com/assets/img/${urlName}/${id}.jpg`}
        className="card-img-top"
        alt={altName}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {/* <h6 className="card-subtitle mb-2 text-body-secondary">
          Card subtitle
        </h6> */}
        {gender ? <p className="card-text">Gender: {gender}</p> : null}
        {hair_color ? (
          <p className="card-text">Hair color: {hair_color}</p>
        ) : null}
        {eye_color ? <p className="card-text">Eye color: {eye_color}</p> : null}
        {population ? (
          <p className="card-text">Population: {population}</p>
        ) : null}
        {terrain ? <p className="card-text"> Terrain:{terrain}</p> : null}
        {model ? <p className="card-text">Model: {model}</p> : null}
        {manufacturer ? (
          <p className="card-text">Manufacturer: {manufacturer}</p>
        ) : null}
        <div>
          <a href="#" className="btn btn-dark me-1">
            Learn More
          </a>

          <a href="#" className="btn btn-dark">
            Fav
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
