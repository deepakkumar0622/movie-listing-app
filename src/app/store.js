import { configureStore } from "@reduxjs/toolkit";
import moviehubreducers from "../slices/movieHubSlice";

export const store = configureStore({
  reducer: {
    movieslice: moviehubreducers,
  },
});
