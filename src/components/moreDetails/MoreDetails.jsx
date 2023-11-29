import React from "react";

const MoreDetails = ({ Data }) => {
  return (
    <div>
      <img src={Data.cover} alt="taswira" />
      <h5>{Data.description}</h5>
    </div>
  );
};

export default MoreDetails;
