import React from "react";

const UrlImage = ({ id, urlName, altName }) => {
  const handleError = (e) => {
    if (urlName == "planets" && id == 1) {
      e.target.src =
        "https://starwars-visualguide.com/assets/img/planets/12.jpg";
    } else if (urlName == "starships" && id == 2) {
      e.target.src =
        "https://starwars-visualguide.com/assets/img/starships/12.jpg";
    } else if (urlName == "starships" && id == 3) {
      e.target.src =
        "https://starwars-visualguide.com/assets/img/starships/15.jpg";
    } else if (urlName == "starships" && id == 17) {
      e.target.src =
        "https://starwars-visualguide.com/assets/img/starships/9.jpg";
    } else {
      e.target.src = "https://via.placeholder.com/150";
    }
  };
  console.log("ESTO ES ID IMAGE", id);
  return (
    <>
      <img
        src={`https://starwars-visualguide.com/assets/img/${urlName}/${id}.jpg`}
        className="card-img-top"
        alt={altName}
        onError={handleError}
      />
    </>
  );
};

export default UrlImage;
