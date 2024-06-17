import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import InfoDetailStarship from "../views/InfoDetailStarship.jsx";

const CardDetailStarship = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    console.log("Starship ID", id);
    actions.getStarship(id);
  }, []);

  console.log(
    "Esto es store.starship desde carddetailstarship",
    store.starship
  );
  console.log("params id desde starship", store.starship.id);
  return (
    <div className="container">
      {store.starship ? (
        <InfoDetailStarship
          id={id}
          name={store.starship.name}
          starshipClass={store.starship.starship_class}
          passengers={store.starship.passengers}
          consumables={store.starship.consumables}
          crew={store.starship.crew}
          manufacturer={store.starship.manufacturer}
          max_atmosphering_speed={store.starship.max_atmosphering_speed}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardDetailStarship;
