import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __postRegister = createAsyncThunk(
  "register",
  async (datas, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://3.37.146.173:8080/api/user/signup",
        datas
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      console.log(e);
    }
  }
);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const register = createSlice({
  name: "loginDiary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postRegister.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__postRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(__postRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default register;
