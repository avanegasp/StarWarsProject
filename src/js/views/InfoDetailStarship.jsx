import React from "react";
import UrlImage from "../component/Url_Image.jsx";
import infoDetailStarshipImage from "../../img/tunel.jpg";
import "../../styles/infoDetailStarship.css";

const InfoDetailPlanet = ({
  id,
  name,
  starshipClass,
  passengers,
  consumables,
  crew,
  manufacturer,
  max_atmosphering_speed,
  model,
  costInCredits,
  length,
  cargoCapacity,
  hyperdriveRating,
  mglt,
}) => {
  const descriptionFirstParagraph = `Introducing one of the most formidable starships 
  in the galaxy, known for its immense size and devastating power. 
  With a model designation of "${model}" this vessel, 
  produced by the ${manufacturer}, 
  comes with an astronomical cost of ${costInCredits} credits. 
  Measuring a staggering ${length} meters in length, 
  it is a colossal mobile battlestation designed for deep space.`;

  const descriptionSecondParagraph = `Capable of housing a crew of ${crew} and 
  accommodating ${passengers} passengers, it is equipped with a cargo capacity 
  of ${cargoCapacity} kilograms and provisions to last for three years. 
  Despite its massive size, it lacks atmospheric speed but compensates 
  with a hyperdrive rating of ${hyperdriveRating} and an MGLT (Megalight per hour) of ${mglt}, 
  enabling it to traverse vast interstellar distances swiftly.`;

  return (
    <>
      <div
        className="backgroundInfoDetailStarship"
        style={{
          backgroundImage: `url(${infoDetailStarshipImage})`,
        }}
      >
        <div className="row align-items-center min-vh-100">
          <div className="card col-12 backgroundInfoDetailStarship">
            <div className="row d-flex justify-content-center">
              <div className="picture col-5 mt-2">
                <UrlImage id={id} urlName="starships" altName="Starship" />
              </div>
              <div className="col-7 mt-3">
                <h3 className="infoDetailStarshipName text-center">{name}</h3>
                <p className="descriptionFirstStarship mt-4">
                  {descriptionFirstParagraph}
                </p>
                <p className="descriptionSecondStarship mt-4">
                  {descriptionSecondParagraph}
                </p>
              </div>
            </div>
            <div className="row mt-3 mb-3 ms-2">
              <div className="col-2">
                <p>
                  {" "}
                  <strong>Starship Class:</strong>
                  {starshipClass}
                </p>
              </div>
              <div className="col-2">
                <p>
                  {" "}
                  <strong>Passengers:</strong> {passengers}
                </p>
              </div>
              <div className="col-2">
                <p>
                  <strong>Max Atmosphering Speed:</strong>{" "}
                  {max_atmosphering_speed}
                </p>
              </div>
              <div className="col-2">
                <p>
                  {" "}
                  <strong>Consumables:</strong> {consumables}
                </p>
              </div>
              <div className="col-2">
                <p>
                  <strong>Manufacturer:</strong> {manufacturer}
                </p>
              </div>
              <div className="col-2">
                <p>
                  <strong>Crew:</strong>
                  {crew}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDetailPlanet;
