import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerdata: [],
  imageUrl: "",
};

export const movieHubSlice = createSlice({
  name: "MovieHub",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerdata = action.payload;
    },
    setImgaeUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setBannerData, setImgaeUrl } = movieHubSlice.actions;

export default movieHubSlice.reducer;
