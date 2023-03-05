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
      console.log(response);
    } catch (e) {
      console.log(e);
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
