import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

const token = Cookies.get("access_token");

export const __postLecture = createAsyncThunk(
  "postLecture",
  async (datas, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://3.37.146.173:8080/api/lecture",
        datas,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(
        response?.data.statusCode === 200
          ? "등록 성공하였습니다."
          : "등록에 문제가 생겼습니다."
      );
    } catch (e) {
      alert(
        e.response.status === 400
          ? "등록 할 수가 없습니다"
          : "문제가 생겼습니다."
      );
    }
  }
);

const initialState = {
  lecture: null,
  isLoading: false,
  error: null,
};

const postLecture = createSlice({
  name: "Lecture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postLecture.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__postLecture.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(__postLecture.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default postLecture;
