import React from "react";
import UrlImage from "../component/Url_Image.jsx";

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
      <div className="row mt-5 mb-5">
        <div className="card col-12">
          <div className="row">
            <div className="col-5 mt-5">
              <UrlImage id={id} urlName="starships" altName="Starship" />
            </div>
            <div className="col-7 mt-3">
              <h3 className="text-center">{name}</h3>
              <p className="mt-4">{descriptionFirstParagraph}</p>
              <p className="mt-4">{descriptionSecondParagraph}</p>
            </div>
          </div>
          <div className="row mt-3 mb-3 ms-2">
            <div className="col-2">
              <p> Starship Class:{starshipClass}</p>
            </div>
            <div className="col-2">
              <p> Passengers: {passengers}</p>
            </div>
            <div className="col-2">
              <p>Max Atmosphering Speed: {max_atmosphering_speed}</p>
            </div>
            <div className="col-2">
              <p> Consumables: {consumables}</p>
            </div>
            <div className="col-2">
              <p>Manufacturer: {manufacturer}</p>
            </div>
            <div className="col-2">
              <p>Crew: {crew}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDetailPlanet;
