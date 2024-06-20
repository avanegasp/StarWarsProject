import React, { useContext } from "react";
import MapGeneralStarships from "../component/StarshipsMap.jsx";
import "../../styles/starships.css";
import { Context } from "../store/appContext.js";
import starshipsBackground from "../../img/s.jpg";

const Starships = () => {
  const { store } = useContext(Context);

  return (
    <div
      className="starshipsBackground"
      style={{ backgroundImage: `url(${starshipsBackground})` }}
    >
      <div className="d-flex flex-wrap container-fluid">
        <MapGeneralStarships elements={store.starships} />
      </div>
    </div>
  );
};

export default Starships;
