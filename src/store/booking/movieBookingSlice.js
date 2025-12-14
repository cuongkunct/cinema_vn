import { createSlice } from "@reduxjs/toolkit";
import { getListCinemaTicket } from "@store/booking/movieBookingApi.js";

const movieBookingSlice = createSlice({
  name: "movieBooking",
  initialState: {
    moviesInfor: {},
    listSeats: [],
    selectedSeats: [],
  },

  reducers: {
    // function dispath lấy thông tin danh sách ghế đã chọn
    toggleSeat: (state, action) => {
      const seat = action.payload;
      const isExist = state.selectedSeats.find(
        (item) => item.maGhe === seat.maGhe
      );
      if (isExist) {
        state.selectedSeats = state.selectedSeats.filter(
          (item) => item.maGhe !== seat.maGhe
        );
      } else {
        state.selectedSeats.push(seat);
      }
    },
    // Function clear danh sách ghế da chon
    clearSeat: (state) => {
      state.selectedSeats = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListCinemaTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesInfor = action.payload.content.thongTinPhim;
        state.listSeats = action.payload.content.danhSachGhe;
      })
      .addCase(getListCinemaTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getListCinemaTicket.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});
export const { setMovieDetail, toggleSeat, clearSeat } =
  movieBookingSlice.actions;
export default movieBookingSlice.reducer;
