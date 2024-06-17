import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Characters from "./views/Characters.jsx";
import Planets from "./views/Planets.jsx";
import Vehicles from "./views/Vehicles.jsx";
import CardDetailCharacter from "./views/CardDetailCharacter.jsx";
import CardDetailPlanet from "./views/CardDetailPlanet.jsx";
import { Home } from "./views/home";

import Navbar from "./component/Nabvar.jsx";

import injectContext from "./store/appContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route
            path="/cardDetailCharacters/:id"
            element={<CardDetailCharacter />}
          />
          <Route path="/cardDetailPlanets/:id" element={<CardDetailPlanet />} />
          {/* Ruta dinámica con :id */}
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
