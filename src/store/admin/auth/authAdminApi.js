import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@services/api.js";

const adminLogin = createAsyncThunk(
  "QuanLyNguoiDung/DangNhap",
  async (adminData, { rejectWithValue }) => {
    try {
      const response = await api.post("QuanLyNguoiDung/DangNhap", adminData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { adminLogin };
