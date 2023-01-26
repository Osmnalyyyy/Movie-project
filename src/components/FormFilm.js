import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../store/get-movie";
import { addMovie } from "../store/movie-data-slice";
import SCard from "./SCard";

const FormFilm = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const handleFilm = async (e) => {
    e.preventDefault();
    dispatch(getMovie(searchMovie));
  };

  const { auth, movie, data } = useSelector((state) => state);
  return (
    <div className="d-flex w-100 justift-content-evenly align-items-center">
      <div>
        <Form noValidate onSubmit={handleFilm}>
          <Form.Group
            className="mb-3 mr-3"
            controlId="exampleForm.ControlInput1"
          >
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
      </div>

      <div className="w-70">
        {Object.keys(movie.movie).length ? <SCard item={movie.movie} /> : ""}
      </div>
    </div>
  );
};

export default FormFilm;
