import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("access_token");

export const __getInfinitiScroll = createAsyncThunk(
  "getInfinitiScroll",
  async (arg, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://3.37.146.173:8080/api/curriculum?page=${arg.page}&size=3&sortBy=createdAt`,
        {
          headers: {
            Authorization: token,
            "cache-control": "no-cache",
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getInfinitiScroll = createSlice({
  name: "getInfinitiScroll",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getInfinitiScroll.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__getInfinitiScroll.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = [...state.data].concat(action.payload);
    });
    builder.addCase(__getInfinitiScroll.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getInfinitiScroll;
