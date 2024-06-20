import React, { useState, useEffect, useContext } from "react";
import CardExternInfo from "./CardExternInfo.jsx";
import { Context } from "../store/appContext.js";

const MapGeneralStarships = () => {
  const { store } = useContext(Context);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === store.starships.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? store.starships.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [store.starships.length]);

  const handleSlideTo = (index) => {
    setActiveIndex(index);
  };

  if (!store.starships || store.starships.length === 0) {
    return <p>No hay starships disponibles.</p>;
  }

  const activeStarship = store.starships[activeIndex] || {};

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
              {store.starships.map((starship, index) => (
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
                        id={starship.url.split("/")[5]}
                        urlName="starships"
                        altName="Starships"
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
              <h5>{activeStarship.name}</h5>
              {activeStarship.model && (
                <p>
                  <strong>Model:</strong> {activeStarship.model}
                </p>
              )}
              {activeStarship.manufacturer && (
                <p>
                  <strong>Manufacturer:</strong> {activeStarship.manufacturer}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapGeneralStarships;
