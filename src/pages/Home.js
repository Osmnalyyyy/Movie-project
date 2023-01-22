import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { saveUser } from "../store/auth-slice";

const user1 = {
  name: "osman",
  password: "12345",
  email: "osman@gmail.com",
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
      <button onClick={() => dispatch(saveUser(user1))}>Veri Gönder</button>
      <button onClick={() => getMovie()}>Filmi Getir</button>
      <Cards />
    </div>
  );
};

export default Home;
