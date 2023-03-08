import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

const GetToken = Cookies.get("access_token");

export const __postregistercourse = createAsyncThunk(
  "postregistercourse",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://3.37.146.173:8080/api/curriculum/${data.id}`,
        {},
        {
          headers: { Authorization: GetToken },
        }
      );
    } catch (e) {
      alert(
        e.response.status === 400
          ? "수강신청에 실패했습니다."
          : "수강신청에 문제가 생겼습니다."
      );
    }
  }
);

const initialState = {
  mycourse: null,
  isLoading: false,
  error: null,
};

const postregistercourse = createSlice({
  name: "postregistercourse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postregistercourse.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__postregistercourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mycourse = action.payload;
      state.error = null;
    });
    builder.addCase(__postregistercourse.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default postregistercourse;
