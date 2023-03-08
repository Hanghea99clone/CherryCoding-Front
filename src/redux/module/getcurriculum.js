import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getCurriculumList = createAsyncThunk(
  "getCurriculmList",
  async (arg, thunkAPI) => {
    try {
      const response = await axios.get("http://3.37.146.173:8080/api/lecture");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getCurriculmList = createSlice({
  name: "getCurriculmList",
  initialState,
  reducers: {},
  // 미들웨어
  extraReducers: (builder) => {
    builder.addCase(__getCurriculumList.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__getCurriculumList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(__getCurriculumList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getCurriculmList;
