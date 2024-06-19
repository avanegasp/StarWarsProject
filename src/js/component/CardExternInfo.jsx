import React, { useContext } from "react";
import "../../styles/CardExternInfo.css";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import UrlVisualGuide from "./Url_Image.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const CardExternInfo = ({
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
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function handleLearnMoreClick() {
    await actions.getCharacter(id);
    navigate(`/cardDetail${urlName}/${id}`);
  }

  return (
    <>
      <UrlVisualGuide id={id} urlName={urlName} altName={altName} />
      <div className="card-body">
        <p className="characterName card-title">{name}</p>
        {gender ? <p className="card-text">Gender: {gender}</p> : null}
        {hair_color ? (
          <p className="card-text">Hair color: {hair_color}</p>
        ) : null}
        {eye_color ? <p className="card-text">Eye color: {eye_color}</p> : null}
        {population ? (
          <p className="card-text">Population: {population}</p>
        ) : null}
        {terrain ? <p className="card-text"> Terrain: {terrain}</p> : null}
        {model ? <p className="card-text">Model: {model}</p> : null}
        {manufacturer ? (
          <p className="card-text">Manufacturer: {manufacturer}</p>
        ) : null}
        <div>
          <button onClick={handleLearnMoreClick} className="btn btn-dark me-1">
            Learn More
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => actions.addToFavorite(id, name)}
          >
            <FontAwesomeIcon icon={faRocket} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardExternInfo;
