import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { acuxios } from "../../util/axiosbase";

const token = Cookies.get("access_token");

export const __getInfinitiScroll = createAsyncThunk(
  "getInfinitiScroll",
  async (arg, thunkAPI) => {
    try {
      const response = await acuxios.get(
        `api/curriculum?page=${arg.page}&size=3&sortBy=createdAt`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
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
