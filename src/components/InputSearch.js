import React from "react";
import { Form } from "react-bootstrap";

const InputSearch = ({ filterData, setFilterData }) => {
  const handleNumber = (e) => {
    if (e.target.value > 10) {
      setFilterData({ ...filterData, imdbRating: "10" });
    } else if (e.target.value < 0) {
      setFilterData({ ...filterData, imdbRating: "0" });
    } else {
      setFilterData({ ...filterData, imdbRating: e.target.value });
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Search Movie DB</Form.Label>
        <Form.Control
          value={filterData.Title}
          onChange={(e) =>
            setFilterData({ ...filterData, Title: e.target.value })
          }
          type="text"
          placeholder="input movie"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Search IMDB Rating</Form.Label>
        <Form.Control
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
          value={filterData.imdbRating}
          onChange={(e) => handleNumber(e)}
          type="number"
          min={0}
          max={10}
          placeholder="input imdb rating"
        />
      </Form.Group>
    </Form>
  );
};

export default InputSearch;
