import api from "@services/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getMovies = createAsyncThunk(
  "QuanLyPhim/LayDanhSachPhim",
  async (__, { rejectWithValue }) => {
    try {
      const response = await api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export { getMovies };
