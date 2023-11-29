import React from "react";
import CardItem from "../cardItem/CardItem";

const MovieCard = ({ Data, del, search, starrate }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        margin: 20,
      }}
    >
      {Data.filter(
        (el) =>
          el.title.toUpperCase().trim().includes(search.toUpperCase().trim()) &&
          el.rating >= starrate
      ).map((el) => (
        <CardItem el={el} key={el.id} del={del} />
      ))}
    </div>
  );
};

export default MovieCard;
