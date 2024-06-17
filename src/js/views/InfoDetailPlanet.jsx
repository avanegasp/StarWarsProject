import React from "react";
import UrlImage from "../component/Url_Image.jsx";

const InfoDetailPlanet = ({
  id,
  name,
  rotationPeriod,
  orbitalPeriod,
  diameter,
  climate,
}) => {
  return (
    <>
      <div className="row mt-5 mb-5">
        <div className="card col-12">
          <div className="row">
            <div className="col-5">
              <UrlImage id={id} urlName="planets" altName="Planet" />
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
    </>
  );
};

export default InfoDetailPlanet;
