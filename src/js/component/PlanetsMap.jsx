import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Card from "./Card.jsx";

const MapGeneralPlanets = () => {
  const { store } = useContext(Context);

  return (
    <>
      {store.planets.map((element) => (
        <div className="d-inline-flex col-2 mt-5" key={element.uid}>
          <div className="card text-center" style={{ width: "18rem" }}>
            {element.uid === 1 ? (
              <img
                src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
                alt="Tatooine"
              />
            ) : (
              <Card
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
