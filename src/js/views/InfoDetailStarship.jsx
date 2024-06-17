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
}) => {
  return (
    <>
      <div className="row mt-5 mb-5">
        <div className="card col-12">
          <div className="row">
            <div className="col-5 mt-2">
              <UrlImage id={id} urlName="starships" altName="Starship" />
            </div>
            <div className="col-7 mt-5">
              <h3 className="text-center">{name}</h3>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, voluptatem vitae esse dolorum nemo perspiciatis
                repellat assumenda voluptas nobis illum nam doloremque
                voluptatibus aut, expedita veniam accusamus! Autem, facere ut.
              </p>
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
