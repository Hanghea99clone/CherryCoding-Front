import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { acuxios } from "../../util/axiosbase";

const GetToken = Cookies.get("access_token");

export const __undateMyinfo = createAsyncThunk(
  "undateMyinfo",
  async (editmyinfo, thunkAPI) => {
    try {
      const response = await acuxios.put(`api/user/update`, editmyinfo, {
        headers: {
          Authorization: GetToken,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  info: null,
  isLoading: false,
  error: null,
};

const undateMyinfo = createSlice({
  name: "undateMyinfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__undateMyinfo.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__undateMyinfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.info = action.payload;
      state.error = null;
    });
    builder.addCase(__undateMyinfo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default undateMyinfo;
