import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovie = createAsyncThunk("movie/getmovie", async (search) => {
  const response = await fetch(
    `http://www.omdbapi.com/?t=${search}&apikey=ce62ee3b`
  ).then((resp) => resp.json());
  return response;
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    error: "",
    movie: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovie.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movie = action.payload;
      console.log(action);
    });
    builder.addCase(getMovie.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action);

      /*  if (action.payload) {
            state.error=action.payload;
        }else{
            state.error=action.error.message
        } */
    });
  },
});

export default movieSlice.reducer;
