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
    <Container>
      <Form inline onSubmit={handleFilm}>
        <FormGroup className="mr-2">
          <Label htmlFor="example-film-input-hidden" hidden>
            Input movie
          </Label>
          <Input
            type="text"
            name="film"
            id="example-film-input-hidden"
            placeholder=" input movie name"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
          />
        </FormGroup>

        <Button color="warning">Search Movie</Button>
      </Form>
    </Container>
  );
};

export default FormFilm;
