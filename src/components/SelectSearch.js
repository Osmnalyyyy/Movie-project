import React from "react";
import { Form } from "react-bootstrap";

const SelectSearch = ({
  UniqGenre,
  UniqYears,
  setFilteredData,
  filteredData,
}) => {
  return (
    <>
      <Form.Select aria-label="Default select example">
        <option>Select Movie Genre</option>
        {UniqGenre?.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </Form.Select>
      <Form.Select>
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
