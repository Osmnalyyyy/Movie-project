import React from "react";

const FormFilm = () => {
  const [searchMovie, setSearchMovie] = useState("");

  const handleFilm = () => {};

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
