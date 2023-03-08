import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { acuxios } from "../../util/axiosbase";

const token = Cookies.get("access_token");

export const __editReview = createAsyncThunk(
  "editReview",
  async (editNewreview, thunkAPI) => {
    try {
      const response = await acuxios.put(
        `api/review/${editNewreview.id}`,
        editNewreview,
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

const editReview = createSlice({
  name: "Review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__editReview.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__editReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review = action.payload;
      state.error = null;
    });
    builder.addCase(__editReview.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default editReview;
