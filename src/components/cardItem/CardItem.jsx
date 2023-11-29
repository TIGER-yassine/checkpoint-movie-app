import React from "react";
import { Button, Card } from "react-bootstrap";
import { MdDeleteForever, MdDescription } from "react-icons/md";
import StarR from "../StarR";

const CardItem = ({ el, del }) => {
  return (
    <div style={{ marginTop: 30, margin: 20 }}>
      <Card style={{ width: "18rem", height: "40rem" }}>
        <Card.Img variant="top" src={el.cover} style={{ height: "28rem" }} />
        <Card.Body className="cardDetil">
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            date:{el.date}
            <br />
            <StarR reat={el.rating} />
            <br />
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <Button variant="primary">
              <MdDescription />
            </Button>
            <button
              onClick={() => del(el.id)}
              style={{
                borderColor: "red",
                backgroundColor: "red",
                color: "white",
                borderRadius: 6,
                height: 38,
                width: 38,
              }}
            >
              <MdDeleteForever />
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
