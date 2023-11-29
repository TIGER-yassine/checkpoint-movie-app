import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //-----------------stateinpute------------------
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [date, setDate] = useState("");
  const [rate, setRate] = useState(0);
  const [desc, setDesc] = useState("");
  //-----------------fnc-------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      name: name,
      cover: imgURL,
      date: date,
      rating: rate,
      description: desc,
    };
    if (name && imgURL && date && rate && desc) {
      add(newMovie);
      handleClose();
    } else {
      alert("pls 3abi lblayes lkol 😐");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FaCloudUploadAlt />
        <br />
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <label htmlFor="">name movie :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor=""> add link URL :</label>
            <input
              type="text"
              value={imgURL}
              onChange={(e) => setImgURL(e.target.value)}
            />
            <label htmlFor="">date movie :</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="">rateing movie :</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <label htmlFor="">add description movie :</label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <Button variant="primary">ADD</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
