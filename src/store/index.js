import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice.js";
import movieSlice from "./movie/movieSlice.js";
import cinemaSlice from "./cinema/cinemaSlice.js";
import movieBookingSlice from "./booking/movieBookingSlice.js";

const store = configureStore({
  reducer: {
    auth: userSlice,
    movie: movieSlice,
    cinema: cinemaSlice,
    booking: movieBookingSlice,
  },
});
export default store;
