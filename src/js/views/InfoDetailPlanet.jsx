import React from "react";
import UrlImage from "../component/Url_Image.jsx";
import infoDetailPlanetImage from "../../img/tunel.jpg";
import "../../styles/infoDetailPlanet.css";

const InfoDetailPlanet = ({
  id,
  name,
  rotationPeriod,
  orbitalPeriod,
  diameter,
  climate,
  gravity,
  terrain,
  surfaceWater,
  population,
}) => {
  const descriptionFirstParagraph = `${name}, a moon in the Star Wars universe, 
  boasts a rotation period of ${rotationPeriod} hours and an extensive orbital period of ${orbitalPeriod} days. 
  With a diameter of ${diameter} kilometers, this celestial body features a temperate and ${climate} climate, 
  offering a diverse range of environments. The gravity on ${name} is a comfortable ${gravity}, 
  making it easy for its inhabitants to adapt.
`;

  const descriptionSecondParagraph = `
  The terrain is dominated by dense ${terrain} and lush rainforests, 
  with surface water covering ${surfaceWater} of the moon. Despite its vast wilderness, 
  ${name} supports a small population of approximately ${population} habitants. `;

  return (
    <>
      <div
        className="backgroundInfoDetailPlanet"
        style={{
          backgroundImage: `url(${infoDetailPlanetImage})`,
        }}
      >
        <div className="row align-items-center min-vh-100">
          <div className="card col-12">
            <div className="row d-flex justify-content-center">
              <div className="picture col-5 mt-2">
                <UrlImage id={id} urlName="planets" altName="Planet" />
              </div>
              <div className="col-7 mt-5">
                <h3 className="text-center">{name}</h3>
                <p className="mt-4">{descriptionFirstParagraph}</p>
                <p className="">{descriptionSecondParagraph}</p>
              </div>
            </div>
            <div className="row mt-3 mb-3 ms-5">
              <div className="col-3">
                <p>Rotation Period:{rotationPeriod}</p>
              </div>
              <div className="col-3">
                <p> Orbital Period: {orbitalPeriod}</p>
              </div>
              <div className="col-3">
                <p> Diameter: {diameter}</p>
              </div>
              <div className="col-3">
                <p>Climate: {climate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDetailPlanet;
