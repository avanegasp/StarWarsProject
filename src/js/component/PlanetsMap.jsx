import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import CardExternInfo from "./CardExternInfo.jsx";

const MapGeneralPlanets = () => {
  const { store } = useContext(Context);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === store.planets.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? store.planets.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [store.planets.length]);

  const handleSlideTo = (index) => {
    setActiveIndex(index);
  };

  if (!store.planets || store.planets.length === 0) {
    return <p>No hay planetas disponibles.</p>;
  }

  const activePlanet = store.planets[activeIndex] || {};

  return (
    <div className="container-fluid">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-6">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="false"
          >
            <div className="carousel-inner">
              {store.planets.map((planet, index) => (
                <div
                  className={`carousel-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="d-flex justify-content-center">
                    <div
                      className="card text-center"
                      style={{ width: "20rem" }}
                    >
                      <CardExternInfo
                        name={planet.name}
                        id={planet.url.split("/")[5]}
                        urlName="planets"
                        altName="Planets"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
              onClick={prevSlide}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
              onClick={nextSlide}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>

        <div className="col-6">
          <div
            className="card text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
          >
            <div className="card-body">
              {/* <h5>{activePlanet.name}</h5> */}
              {activePlanet.population && (
                <p>
                  <strong>Population:</strong> {activePlanet.population}
                </p>
              )}
              {activePlanet.terrain && (
                <p>
                  <strong>Terrain:</strong> {activePlanet.terrain}
                </p>
              )}
              {activePlanet.surface_water && (
                <p>
                  <strong>Surface water:</strong> {activePlanet.surface_water}
                </p>
              )}
              {activePlanet.gravity && (
                <p>
                  <strong>Gravity:</strong> {activePlanet.gravity}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapGeneralPlanets;
