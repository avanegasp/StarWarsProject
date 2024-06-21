import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import InfoDetailStarship from "../views/InfoDetailStarship.jsx";

const CardDetailStarship = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getStarship(id);
  }, [id]);

  return (
    <div className="container-fluid">
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
          model={store.starship.model}
          costInCredits={store.starship.cost_in_credits}
          length={store.starship.length}
          cargoCapacity={store.starship.cargo_capacity}
          hyperdriveRating={store.starship.hyperdrive_rating}
          mglt={store.starship.MGLT}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardDetailStarship;
