import React, { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { updateMovie } from "../store/movie-data-slice";

const ModalFilm = (props) => {
  const [upData, setUpData] = useState({
    Title: props.modalData.Title,
    imdbRating: props.modalData.imdbRating,
    imdbID: props.modalData.imdbID,
  });
  const handleUpdate = () => {};
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Film Title-Imdb Rating
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Film Title
          </InputGroup.Text>
          <Form.Control
            onChange={(e) => setUpData(e.target.value)}
            value={upData.Title}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>{" "}
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Rating</InputGroup.Text>
          <Form.Control
            onChange={(e) => setUpData(e.target.value)}
            value={upData.Title}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            handleUpdate();
          }}
        >
          save
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFilm;
