import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { acuxios } from "../../util/axiosbase";

const token = Cookies.get("access_token");

export const __postReview = createAsyncThunk(
  "postReview",
  async (newReview, thunkAPI) => {
    try {
      const response = await acuxios.post(
        `api/review/${newReview.id}`,
        newReview,
        {
          headers: {
            Authorization: token,
          },
        }
      );
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

const postReview = createSlice({
  name: "Review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postReview.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__postReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review = action.payload;
      state.error = null;
    });
    builder.addCase(__postReview.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default postReview;
