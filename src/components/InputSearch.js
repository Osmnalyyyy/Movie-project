import React from "react";
import { Form } from "react-bootstrap";

const InputSearch = ({ filteredData, setFilteredData }) => {
  console.log(filteredData);
  const handleNumber = (e) => {
    if (e.target.value > 10) {
      setFilteredData({ ...filteredData, imdbRating: "10" });
    } else if (e.target.value < 0) {
      setFilteredData({ ...filteredData, imdbRating: "0" });
    } else {
      setFilteredData({ ...filteredData, imdbRating: e.target.value });
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Search Movie DB</Form.Label>
        <Form.Control
          value={filteredData.Title}
          onChange={(e) =>
            setFilteredData({ ...filteredData, Title: e.target.value })
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
          value={filteredData.imdbRating}
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
