import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import InfoDetailCharacter from "../component/InfoDetailCharacter.jsx";

const CardDetailCharacter = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    console.log("HEREEE", id);
    //   if (actions && actions.getCharacter) {
    actions.getCharacter(id);
    //   }
  }, []);

  console.log("after", store.character);

  console.log("paramas id", store.character.id);
  return (
    <div className="container">
      {store.character ? (
        <InfoDetailCharacter
          id={id}
          name={store.character.name}
          lastName={store.character.lastname}
          height={store.character.height}
          skinColor={store.character.skin_color}
          birthYear={store.character.birth_year}
          mass={store.character.mass}
          hairColor={store.character.hair_color}
          eyeColor={store.character.eye_color}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardDetailCharacter;
