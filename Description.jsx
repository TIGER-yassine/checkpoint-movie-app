import React from "react";
import { useParams } from "react-router-dom";

const Description = ({ Data }) => {
  const params = useParams();
  const prod = Data.find((el) => el.id === Number(params.id));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 30,
        }}
      >
        <img
          src={prod.cover}
          alt="taswira "
          style={{
            height: "400px",
            border: " 3px inset #8a2be2",
            borderRadius: 10,
          }}
        />
        {prod.vid}
      </div>
      <div
        style={{
          border: " 2px solid #8a2be2",
          backgroundColor: "green",
          margin: 30,
        }}
      >
        <h1>{prod.title}</h1>
        <p>{prod.date}</p>
        <p>{prod.description}</p>
      </div>
    </div>
  );
};

export default Description;
