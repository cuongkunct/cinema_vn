import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice.js";
import adminSlice from "./admin/auth/authAdminSlice.js";
import movieSlice from "./movie/movieSlice.js";
import cinemaSlice from "./cinema/cinemaSlice.js";
import movieBookingSlice from "./booking/movieBookingSlice.js";
import filmsAdminSlice from "./admin/films/movieSlice.js";

const store = configureStore({
  reducer: {
    auth: userSlice,
    movie: movieSlice,
    cinema: cinemaSlice,
    booking: movieBookingSlice,
    // admin: adminSlice
    authAdmin: adminSlice,
    filmsAdmin: filmsAdminSlice,
  },
});
export default store;
