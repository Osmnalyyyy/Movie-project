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
    <div className="d-flex w-100 justify-content-evenly align-items-center">
      <div className="w-25">
        <Form
          noValidate
          onSubmit={handleFilm}
          className="mb-3 mr-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="input your movie..."
            style={{ width: "100%" }}
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            className="mb-2 w-100"
          />
          <Button className="btn btn-warning  lg-w-50 md-w-25" type="submit">
            Search Movie
          </Button>
          <Button
            className="btn btn-info lg-w-50 md-w-25"
            type="button"
            onClick={() => dispatch(addMovie(movie.movie))}
          >
            Add Movie
          </Button>
        </Form>
      </div>

      <div className="w-25">
        {Object.keys(movie.movie).length ? (
          <SCard item={movie.movie} />
        ) : (
          " Movie Not Found"
        )}
      </div>
    </div>
  );
};

export default FormFilm;
