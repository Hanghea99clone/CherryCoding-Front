import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { acuxios } from "../../util/axiosbase";

const token = Cookies.get("access_token");

export const __deleteReview = createAsyncThunk(
  "deleteReview",
  async (id, thunkAPI) => {
    try {
      const response = await acuxios.delete(`api/review/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  review: null,
  isLoading: false,
  error: null,
};

const deleteReview = createSlice({
  name: "Review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__deleteReview.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__deleteReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review = action.payload;
      state.error = null;
    });
    builder.addCase(__deleteReview.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default deleteReview;
