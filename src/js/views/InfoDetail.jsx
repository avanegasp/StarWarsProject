import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import UrlImage from "../component/Url_Image.jsx";

const InfoDetailCharacter = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    console.log("HEREEE", id);
    //   if (actions && actions.getCharacter) {
    actions.getCharacter(id);
    //   }
  }, []);

  console.log("after", id);

  console.log("paramas id", store.character.id);
  return (
    <div className="container">
      {store.character ? (
        <>
          {console.log("ACAAA")}
          <div className="row mt-5 mb-5">
            <div className="card col-5">
              <UrlImage id={id} urlName="characters" altName="CHARACTER" />
              <div className="col-7">
                <h3 className="text-center">
                  {store.character.name} {store.character.lastname}
                </h3>
                <p>
                  Was a legendary Jedi Master who fought in the Galactic Civil
                  War during the reign of the Galactic Empire. Along with his
                  companions, Princess Leia Organa and General Han Solo,
                  Skywalker served as a revolutionary on the side of the
                  Alliance to Restore the Republic—an organization committed to
                  the downfall of the Galactic Empire and the restoration of
                  democracy. Following the war, Skywalker became a living
                  legend, and was remembered as one of the greatest Jedi in
                  galactic history.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {/* <div className="row">
        <div className="col-2">
          <p> Height: {mockData.height}</p>
        </div>
        <div className="col-2">
          <p> Skin color: {mockData.skin_color}</p>
        </div>
        <div className="col-2">
          <p> Birth year: {mockData.birth_year}</p>
        </div>
        <div className="col-2">
          <p> Mass : {mockData.mass}</p>
        </div>
        <div className="col-2">
          <p> Hair color: {mockData.hair_color}</p>
        </div>
        <div className="col-2">
          <p> Eye color: {mockData.eye_color}</p>
        </div>
      </div> */}
    </div>
  );
};

export default InfoDetailCharacter;
