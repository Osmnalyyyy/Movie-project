import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import movieReducer from "./get-movie";
import dataReducer from "./movie-data-slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
    data: dataReducer,
  },
});

export default store;
