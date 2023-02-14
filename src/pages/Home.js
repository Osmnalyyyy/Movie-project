import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { filterMovie, UniqArr, UniqYear } from "../helper/functions";
import FormFilm from "../components/FormFilm";
import InputSearch from "../components/InputSearch";
import SelectSearch from "../components/SelectSearch";
import { Button } from "react-bootstrap";

const Home = () => {
  const [fToggle, setFToggle] = useState(true);

  const initialValues = {
    imdbRating: "",
    Title: "",
    Year: "",
    Genre: "",
  };
  const dispatch = useDispatch();
  const { auth, movie, data } = useSelector((state) => state);
  const [filterData, setFilterData] = useState(initialValues);
  const UniqGenre = UniqArr(data);
  const UniqYears = UniqYear(data);

  const filteredData = filterMovie(filterData, data);

  return (
    <div>
      <FormFilm />
      <Button onClick={() => setFToggle(!fToggle)}>Filter {fToggle}</Button>

      {fToggle === false ? (
        ""
      ) : (
        <div>
          <InputSearch filterData={filterData} setFilterData={setFilterData} />
          <SelectSearch
            filterData={filterData}
            setFilterData={setFilterData}
            UniqGenre={UniqGenre}
            UniqYears={UniqYears}
          />
        </div>
      )}

      <div>
        <Button
          variant="info"
          type="button"
          onClick={() => setFilterData(initialValues)}
        >
          Clear Filter
        </Button>
      </div>

      <Cards filteredData={filteredData} />
    </div>
  );
};

export default Home;
