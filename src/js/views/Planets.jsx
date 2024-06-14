import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Title from "../component/Title.jsx";
import ImageAndNameCard from "../component/ImgAndNameCard.jsx";
import MapGeneralCharacters from "../component/MapGeneralCaracters.jsx";

const Planets = () => {
  const { store } = useContext(Context);

  const startCountingId = (id) => {
    return id > 1;
  };

  return (
    <div className="container">
      <Title title="Planets" nameBtn="Home" />
      <MapGeneralCharacters elements={store.planets} />
      {store.planets.map((element) => {
        if (startCountingId(element.uid)) {
          return (
            <ImageAndNameCard
              key={element.uid}
              name={element.name}
              id={element.uid}
              urlName="planets"
              altName="Planets"
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Planets;
