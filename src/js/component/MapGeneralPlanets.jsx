import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import ImgAndNameCard from "./Card.jsx";

const MapGeneralPlanets = () => {
  const { store } = useContext(Context);

  const startCountingId = (id) => {
    return id >= 1;
  };

  return (
    <>
      {store.planets.map((element, index) => (
        <div className="d-inline-flex col-2 mt-5" key={index}>
          <div className="card text-center" style={{ width: "18rem" }}>
            {startCountingId(element.uid) ? (
              <ImgAndNameCard
                // key={element.uid}
                name={element.name}
                id={index + 1}
                urlName="planets"
                altName="Planets"
              />
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default MapGeneralPlanets;
