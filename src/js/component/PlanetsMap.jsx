import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Card from "./CardExternInfo.jsx";

const MapGeneralPlanets = () => {
  const { store } = useContext(Context);

  return (
    <>
      {store.planets.map((element, index) => (
        <div className="d-inline-flex col-2 mt-5" key={index}>
          <div className="card text-center" style={{ width: "18rem" }}>
            {element.uid === 1 ? (
              <img
                src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937"
                alt="Tatooine"
              />
            ) : (
              <Card
                name={element.name}
                id={element.url.split("/")[5]}
                population={element.population}
                terrain={element.terrain}
                surface={element.surface_water}
                gravity={element.gravity}
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
