import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "@services/adminApi.js";

const adminLogin = createAsyncThunk(
  "fetchLoginAdmin",
  async (adminData, { rejectWithValue }) => {
    try {
      const response = await adminApi.post(
        "QuanLyNguoiDung/DangNhap",
        adminData
      );
      const data = response.data.content;
      if (data?.maLoaiNguoiDung !== "QuanTri")
        return rejectWithValue({
          response: {
            data: {
              content: "Bạn không có quyền truy cập vào trang này",
            },
          },
        });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { adminLogin };
