import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Characters from "./views/Characters.jsx";
import Planets from "./views/Planets.jsx";
import Vehicles from "./views/Vehicles.jsx";
import { Home } from "./views/home";

import Navbar from "./component/Nabvar.jsx";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
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
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
