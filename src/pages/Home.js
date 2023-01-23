import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import Form from "../components/Form";
import FormFilm from "../components/FormFilm";
import { saveUser } from "../store/auth-slice";

const user1 = {
  name: "osman",
  password: "12345",
  email: "osman@gmail.com",
  password: "12345",
};

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const getMovie = async () => {
    try {
      const resp = await fetch(
        "http://www.omdbapi.com/?t=cehennem&apikey=ce62ee3b"
      )
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    } catch (error) {}
  };

  /*  useEffect(() => {
    getMovie();
  }, []); */

  return (
    <div>
      <Cards />
      <FormFilm />
      <button onClick={() => dispatch(saveUser(user1))}>Veri Gönder</button>
      <button onClick={() => getMovie()}>Filmi Getir</button>
    </div>
  );
};

export default Home;
