import React from "react";

const StarR = ({ reat, hR }) => {
  function stars(rating) {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(
          <span
            onClick={() => hR(i)}
            style={{ fontSize: 20, color: "gold", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else
        star.push(
          <span
            onClick={() => hR(i)}
            style={{ fontSize: 20, color: "black", cursor: "pointer" }}
          >
            ★
          </span>
        );
    }
    return star;
  }
  return <div>{stars(reat)}</div>;
};

export default StarR;
