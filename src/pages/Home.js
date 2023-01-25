import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import Form from "../components/Form";
import FormFilm from "../components/FormFilm";
import { saveUser } from "../store/auth-slice";
import { addMovie } from "../store/movie-data-slice";

const Home = () => {
  return (
    <div>
      <Cards />
      <FormFilm />
    </div>
  );
};

export default Home;
