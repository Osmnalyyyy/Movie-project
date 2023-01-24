import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getMovie } from "../store/get-movie";

const FormFilm = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const handleFilm = async (e) => {
    e.preventDefault();
    dispatch(getMovie(searchMovie));
  };

  return (
    <Container>
      <Form inline onSubmit={handleFilm}>
        <Form.Group className="mb-3 mr-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="input your movie..." />
          <Button color="warning">Search Movie</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default FormFilm;
