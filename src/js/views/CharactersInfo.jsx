import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharactersInfo = () => {
  const { store } = useContext(Context);
  console.log(store);

  return (
    <div>
      <h1>Estos son los personajes</h1>
      {store.characters.map((character) => {
        return (
          <div
            className="card col-3"
            style={{ width: "18rem" }}
            key={character.uid}
          >
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
              <Link to="/" className="card-link">
                Card link
              </Link>
              <Link to="/" className="card-link">
                Another link
              </Link>
            </div>
          </div>
        );
      })}

      <br />
      <div>
        <Link to="/" className="btn btn-success">
          Home
        </Link>
      </div>
    </div>
  );
};

export default CharactersInfo;
