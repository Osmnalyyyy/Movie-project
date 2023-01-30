import React from "react";
import { Form } from "react-bootstrap";

const SelectSearch = ({ UniqGenre, UniqYears, setFilterData, filterData }) => {
  return (
    <>
      <Form.Select
        onChange={(e) =>
          setFilterData({ ...filterData, Genre: e.target.value })
        }
      >
        <option>Select Movie Genre</option>
        {UniqGenre?.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </Form.Select>
      <Form.Select
        onChange={(e) => setFilterData({ ...filterData, Year: e.target.value })}
      >
        <option>Select Movie Year</option>
        {UniqYears?.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default SelectSearch;
