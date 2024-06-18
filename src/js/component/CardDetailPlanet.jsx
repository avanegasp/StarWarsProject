import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import InfoDetailPlanet from "../views/InfoDetailPlanet.jsx";

const CardDetailPlanet = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getPlanet(id);
  }, []);

  return (
    <div className="container">
      {store.planet ? (
        <InfoDetailPlanet
          id={id}
          name={store.planet.name}
          rotationPeriod={store.planet.rotation_period}
          orbitalPeriod={store.planet.orbital_period}
          diameter={store.planet.diameter}
          climate={store.planet.climate}
          gravity={store.planet.gravity}
          terrain={store.planet.terrain}
          surfaceWater={store.planet.surface_water}
          population={store.planet.population}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardDetailPlanet;
