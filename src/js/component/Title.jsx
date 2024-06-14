import React from "react";
import { Link } from "react-router-dom";

const Title = ({ title, nameBtn }) => {
  return (
    <>
      <div className="text-center">
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Title;
