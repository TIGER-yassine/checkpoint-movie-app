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
            border: " 2px solid green",
            borderRadius: 10,
          }}
        />
        {prod.vid}
      </div>
      <div
        style={{
          margin: 30,
          border: "4px solid green",
          background: " blueviolet",
        }}
      >
        <h1>{prod.title}</h1>
        <p style={{ fontSize: 20 }}>{prod.date}</p>
        <p style={{ fontSize: 20 }}>{prod.description}</p>
      </div>
    </div>
  );
};

export default Description;
