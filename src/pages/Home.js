import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { UniqArr } from "../helper/functions";
import FormFilm from "../components/FormFilm";
import InputSearch from "../components/InputSearch";
import SelectSearch from "../components/SelectSearch";

const Home = () => {
  const dispatch = useDispatch();
  const { auth, movie, data } = useSelector((state) => state);

  const UniqGenre = UniqArr(data);

  return (
    <div>
      <FormFilm />
      <div>
        <InputSearch />
        <SelectSearch UniqGenre={UniqGenre} />
        <SelectSearch />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
