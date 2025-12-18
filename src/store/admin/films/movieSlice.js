import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "@store/movie/movieApi.js";

const filmsAdminSlice = createSlice({
  name: "filmsAdmin",
  initialState: {
    movieData: [], //Danh sách phim
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movieData = action.payload.content;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMovies.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default filmsAdminSlice.reducer;
