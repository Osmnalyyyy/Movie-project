import React from "react";
import { Form } from "react-bootstrap";

const InputSearch = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.Controlinput1">
        <Form.Label>Search Movie DB</Form.Label>
        <Form.Control type="text" placeholder="input movie" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search IMDB Rating</Form.Label>
        <Form.Control type="text" placeholder="imdb rating" />
      </Form.Group>
    </Form>
  );
};

export default InputSearch;
