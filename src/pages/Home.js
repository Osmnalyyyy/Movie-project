import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import Form from "../components/Form";
import FormFilm from "../components/FormFilm";
import InputSearch from "../components/InputSearch";
import SelectSearch from "../components/SelectSearch";
import { saveUser } from "../store/auth-slice";
import { addMovie } from "../store/movie-data-slice";

const Home = () => {
  return (
    <div>
      <FormFilm />
      <div>
        <InputSearch />
        <SelectSearch />
        <SelectSearch />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
