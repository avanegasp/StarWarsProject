import React from "react";
import { Link } from "react-router-dom";

const Title = ({ title, nameBtn }) => {
  return (
    <>
      <div className="d-flex justify-content-end mt-3">
        <Link to="/" className="btn btn-dark">
          {nameBtn}
        </Link>
      </div>
      <div className="text-center">
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Title;
