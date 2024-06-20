import React, { useState, useEffect } from "react";
import CardExternInfo from "./CardExternInfo.jsx";

const MapGeneralCharacters = ({ elements }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === elements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? elements.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [elements.length]);

  const handleSlideTo = (index) => {
    setActiveIndex(index);
  };

  if (!elements || elements.length === 0) {
    return <p>No hay elementos disponibles.</p>;
  }

  const activeElement = elements[activeIndex] || {};

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
              {elements.map((element, index) => (
                <div
                  className={`carousel-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="d-flex justify-content-center">
                    <div
                      className="card text-center"
                      style={{ width: "18rem" }}
                    >
                      <CardExternInfo
                        id={element.url.split("/")[5]}
                        urlName="characters"
                        altName="Characters"
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
              <h5>{activeElement.name}</h5>
              {activeElement.gender && (
                <p>
                  <strong>Género:</strong> {activeElement.gender}
                </p>
              )}
              {activeElement.hair_color && (
                <p>
                  <strong>Color de cabello:</strong> {activeElement.hair_color}
                </p>
              )}
              {activeElement.eye_color && (
                <p>
                  <strong>Color de ojos:</strong> {activeElement.eye_color}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapGeneralCharacters;
