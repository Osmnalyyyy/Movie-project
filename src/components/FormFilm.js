import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../store/get-movie";
import { addMovie } from "../store/movie-data-slice";

const FormFilm = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const handleFilm = async (e) => {
    e.preventDefault();
    dispatch(getMovie(searchMovie));
  };

  const { auth, movie, data } = useSelector((state) => state);
  return (
    <Container>
      <Form noValidate onSubmit={handleFilm}>
        <Form.Group className="mb-3 mr-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="input your movie..."
            style={{ width: "25%" }}
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
          />
          <Button className="btn btn-warning me-3" type="submit">
            Search Movie
          </Button>
          <Button
            className="btn btn-info"
            type="button"
            onClick={() => dispatch(addMovie(movie.movie))}
          >
            Add Movie
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default FormFilm;
