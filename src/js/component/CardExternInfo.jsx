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

  const handleLearnMoreClick = () => {
    navigate(`/cardDetail${urlName}/${id}`);
  };

  const h5Style = {
    fontFamily: '"Sahara", sans-serif',
    color: "red",
    fontSize: "25px",
  };

  const h5Styles = {
    fontFamily: '"Star Wars", sans-serif',
    color: "white",
    fontSize: "15px",
  };

  return (
    <>
      <div>
        <div className="carousel-item active">
          <UrlVisualGuide id={id} urlName={urlName} altName={altName} />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-danger" style={h5Style}>
              {name}{" "}
            </h5>
            <div className="card-body">
              {gender && (
                <p className="card-text">
                  <strong>Gender:</strong> {gender}
                </p>
              )}
              {hair_color && (
                <p className="card-text">
                  <strong>Hair Color:</strong> {hair_color}
                </p>
              )}
              {eye_color && (
                <p className="card-text">
                  <strong>Eyes color:</strong> {eye_color}
                </p>
              )}
              {population && (
                <p className="card-text">
                  <strong>Population:</strong> {population}
                </p>
              )}
              {terrain && (
                <p className="card-text">
                  <strong>Terrain:</strong> {terrain}
                </p>
              )}
              {model && (
                <p className="card-text">
                  <strong>Model:</strong> {model}
                </p>
              )}
              {manufacturer && (
                <p className="card-text">
                  <strong>Manufacturer:</strong> {manufacturer}
                </p>
              )}
            </div>
          </div>
          <div className="mt-1 mb-1">
            <button
              onClick={handleLearnMoreClick}
              className="btn btn-secondary me-1 cardExterInFoDetail"
              style={h5Styles}
            >
              Details
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => actions.addToFavorite(id, name)}
            >
              <FontAwesomeIcon icon={faRocket} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExternInfo;
