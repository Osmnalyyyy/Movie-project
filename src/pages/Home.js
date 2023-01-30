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
  const [filterData, setFilterData] = useState({
    imdbRating: "",
    Title: "",
    Year: "",
    Genre: "",
  });
  const UniqGenre = UniqArr(data);
  const UniqYears = UniqYear(data);

  console.log(filterData);

  const filteredData = filterMovie(filterData, data);

  return (
    <div>
      <FormFilm />
      <div>
        <InputSearch filterData={filterData} setFilterData={setFilterData} />
        <SelectSearch
          filterData={filterData}
          setFilterData={setFilterData}
          UniqGenre={UniqGenre}
          UniqYears={UniqYears}
        />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
