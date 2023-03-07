import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

const token = Cookies.get("access_token");

export const __editReview = createAsyncThunk(
  "editReview",
  async (editNewreview, thunkAPI) => {
    try {
      const response = await axios.put(
        `http://3.37.146.173:8080/api/review/${editNewreview.id}`,
        editNewreview,
        {
          headers: {
            Authorization: token,
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
