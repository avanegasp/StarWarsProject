import React from "react";

const ImgAndNameCard = ({ name, id, urlName, altName }) => {
  return (
    <>
      <img
        src={
          `https://starwars-visualguide.com/assets/img/${urlName}/${id}.jpg` ||
          "https://picsum.photos/id/237/200/300"
        }
        className="card-img-top"
        alt={altName}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </>
  );
};

export default ImgAndNameCard;
