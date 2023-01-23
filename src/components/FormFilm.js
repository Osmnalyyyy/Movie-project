import React, { useState } from "react";
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
    <div>
      <form action="" onSubmit={handleFilm}>
        <label htmlFor="film">Input movie</label>
        <input
          type="text"
          name="film"
          id="film"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button type="submit">Search movie</button>
      </form>
    </div>
  );
};

export default FormFilm;
