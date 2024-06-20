import React from "react";
import UrlImage from "../component/Url_Image.jsx";
import infoDetailCharacterImage from "../../img/tunel.jpg";
import "../../styles/infoDetailCharacter.css";

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
  const descriptionFirstParagraph = `
  Standing at ${height} centimeters tall and weighing ${mass} kilograms, 
  this legendary figure is known for their ${hairColor} hair, ${skinColor} skin, and piercing ${eyeColor} eyes.
  `;

  const descriptionSecondParagraph = `  Born in ${birthYear}, their journey began on the desert planet of Tatooine, 
  where he/she grew up unaware of their destiny. Starting as a humble farm child, 
  he/she eventually became a central figure in the fight against the Galactic Empire.`;

  return (
    <>
      <div
        className="backgroundInfoDetailCharacter"
        style={{
          backgroundImage: `url(${infoDetailCharacterImage})`,
        }}
      >
        <div className="row row align-items-center min-vh-100">
          <div className="card col-12">
            <div className="row d-flex justify-content-center">
              <div className="picture col-5 mt-2">
                <UrlImage id={id} urlName="characters" altName="Character" />
              </div>
              <div className="col-7 mt-5">
                <h3 className="text-center">
                  {name} {lastName}
                </h3>
                <p className="mt-4">{descriptionFirstParagraph}</p>
                <p className="mt-4">{descriptionSecondParagraph}</p>
              </div>
            </div>
            <div className="row mt-3 mb-3 ms-5">
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
      </div>
    </>
  );
};

export default InfoDetailCharacter;
