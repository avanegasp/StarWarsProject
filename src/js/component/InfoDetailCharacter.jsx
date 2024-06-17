import React from "react";
import UrlImage from "../component/Url_Image.jsx";

const InfoDetailCharacter = ({
  id,
  name,
  lastName,
  mass,
  birthYear,
  height,
  skinColor,
  hairColor,
  eyeColor,
}) => {
  return (
    <>
      <div className="row mt-5 mb-5">
        <div className="card col-12">
          <div className="row">
            <div className="col-5">
              <UrlImage id={id} urlName="characters" altName="CHARACTER" />
            </div>
            <div className="col-7 mt-5">
              <h3 className="text-center">
                {name} {lastName}
              </h3>
              <p className="mt-4">
                Was a legendary Jedi Master who fought in the Galactic Civil War
                during the reign of the Galactic Empire. Along with his
                companions, Princess Leia Organa and General Han Solo, Skywalker
                served as a revolutionary on the side of the Alliance to Restore
                the Republic—an organization committed to the downfall of the
                Galactic Empire and the restoration of democracy. Following the
                war, Skywalker became a living legend, and was remembered as one
                of the greatest Jedi in galactic history.
              </p>
            </div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-2">
              <p> Height: {height}</p>
            </div>
            <div className="col-2">
              <p> Skin color: {skinColor}</p>
            </div>
            <div className="col-2">
              <p> Birth year: {birthYear}</p>
            </div>
            <div className="col-2">
              <p> Mass : {mass}</p>
            </div>
            <div className="col-2">
              <p> Hair color: {hairColor}</p>
            </div>
            <div className="col-2">
              <p> Eye color: {eyeColor}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDetailCharacter;
