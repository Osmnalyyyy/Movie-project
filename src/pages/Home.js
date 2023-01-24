import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import Form from "../components/Form";
import FormFilm from "../components/FormFilm";
import { saveUser } from "../store/auth-slice";
import { addMovie } from "../store/movie-data-slice";

const user1 = {
  name: "osman",
  password: "12345",
  email: "osman@gmail.com",
  password: "12345",
};

const Home = () => {
  const dispatch = useDispatch();
  const { auth, movie, data } = useSelector((state) => state);

  console.log(data);
  return (
    <div>
      <Cards />
      <FormFilm />
      <button onClick={() => dispatch(addMovie(movie.movie))}>Add Movie</button>
      <button onClick={() => dispatch(saveUser(user1))}>Veri Gönder</button>
    </div>
  );
};

export default Home;
