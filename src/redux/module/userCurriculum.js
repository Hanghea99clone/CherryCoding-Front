import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { acuxios } from "../../util/axiosbase";

const GetToken = Cookies.get("access_token");

export const __usercurriculum = createAsyncThunk(
  "usercurriculum",
  async (arg, thunkAPI) => {
    try {
      const response = await acuxios.get(`api/user-curriculum`, {
        headers: { Authorization: GetToken },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  usercurriculum: null,
  isLoading: false,
  error: null,
};

const usercurriculum = createSlice({
  name: "usercurriculum",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__usercurriculum.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__usercurriculum.fulfilled, (state, action) => {
      state.isLoading = false;
      state.usercurriculum = action.payload;
      state.error = null;
    });
    builder.addCase(__usercurriculum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default usercurriculum;
