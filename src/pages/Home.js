import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { UniqArr, UniqYear } from "../helper/functions";
import FormFilm from "../components/FormFilm";
import InputSearch from "../components/InputSearch";
import SelectSearch from "../components/SelectSearch";

const Home = () => {
  const dispatch = useDispatch();
  const { auth, movie, data } = useSelector((state) => state);
  const [filteredData, setFilteredData] = useState({
    imdbRating: "",
    Title: "",
    Year: "",
    Genre: "",
  });
  const UniqGenre = UniqArr(data);
  const UniqYears = UniqYear(data);

  return (
    <div>
      <FormFilm />
      <div>
        <InputSearch
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
        <SelectSearch
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          UniqGenre={UniqGenre}
          UniqYears={UniqYears}
        />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
