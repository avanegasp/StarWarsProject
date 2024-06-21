import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const { store } = useContext(Context);
  const [elements, setElements] = useState([]);
  const navigate = useNavigate();
  let id = "";

  const calculateElements = () => {
    const totalElements = [
      ...store.planets.map((planet) => ({ ...planet, urlName: "Planets" })),
      ...store.starships.map((starship) => ({
        ...starship,
        urlName: "Starships",
      })),
      ...store.characters.map((character) => ({
        ...character,
        urlName: "Characters",
      })),
    ];
    setElements(totalElements);
    console.log("TOTAL ELEMENTS", totalElements);
  };

  useEffect(() => {
    calculateElements();
  }, [store.planets, store.starships, store.characters]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const foundElement = elements.find(
      (element) => element.name.toLowerCase() === search.toLocaleLowerCase()
    );
    if (foundElement) {
      id = foundElement.url.split("/")[5];
      navigate(`/cardDetail${foundElement.urlName}/${id}`);
    } else {
      console.log("No se encontró ningún elemento con ese nombre.");
    }
  };

  return (
    <div className="mx-auto">
      <div className="input-group mb-3 inputSearch">
        <span className="input-group-text" id="basic-addon1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="form-control"
          placeholder="I dare you..."
          aria-label="search"
          aria-describedby="basic-addon1"
        />
        <button
          className="ms-1 btn btn-light buttonSearch"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
