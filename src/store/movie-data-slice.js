import { createSlice } from "@reduxjs/toolkit";

const movieDataSlice = createSlice({
  name: "data",
  initialState: JSON.parse(window.localStorage.getItem("data")) || [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    deleteMovie: (state, action) => {
      return state.filter((item) => item.imdbID !== action.payload.imdbID);
    },
    updateMovie: (state, action) => {
      state.map((item) => {
        if (item.imdbID === action.payload.imdbID) {
          return {
            ...item,
            Title: action.payload.Title,
            imdbRating: action.payload.imdbRating,
          };
        }
      });
    },
  },
});

export const { addMovie, deleteMovie, updateMovie } = movieDataSlice.actions;
export default movieDataSlice.reducer;
