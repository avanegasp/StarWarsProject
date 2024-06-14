import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import ImgAndNameCard from "./Card.jsx";

const MapGeneralPlanets = () => {
  const { store } = useContext(Context);

  const startCountingIdPlanets = (id) => {
    if (id >= 1) {
      console.log("El ID es mayor a 2 en planets");
      for (let i = 2; i <= 11; i++) {
        console.log(i);
      }
      return id >= 1 && id <= 11;
    } else {
      console.log("El ID es 2 desde planets");
      return false;
    }
  };

  return (
    <>
      {store.planets.map((element, index) => (
        <div className="d-inline-flex col-2 mt-5" key={index}>
          <div className="card text-center" style={{ width: "18rem" }}>
            {startCountingIdPlanets(element.uid) && (
              <ImgAndNameCard
                key={element.uid}
                name={element.name}
                id={element.uid}
                urlName="planets"
                altName="planets"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default MapGeneralPlanets;
