import React from "react";

const UrlImage = ({ id, urlName, altName }) => {
  return (
    <>
      <img
        src={`https://starwars-visualguide.com/assets/img/${urlName}/${id}.jpg`}
        className="card-img-top"
        alt={altName}
      />
    </>
  );
};

export default UrlImage;
