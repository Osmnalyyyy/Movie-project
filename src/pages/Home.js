import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import Form from "../components/Form";
import FormFilm from "../components/FormFilm";
import { saveUser } from "../store/auth-slice";
import { addMovie } from "../store/movie-data-slice";
import { Button } from "@bootstrap-styled/v4";

const Home = () => {
  const dispatch = useDispatch();
  const { auth, movie, data } = useSelector((state) => state);

  console.log(data);
  return (
    <div>
      <Cards />
      <FormFilm />

      <Button color="primary" onClick={() => dispatch(addMovie(movie.movie))}>
        Add Movie
      </Button>
    </div>
  );
};

export default Home;
