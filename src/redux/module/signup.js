import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { acuxios } from "../../util/axiosbase";

export const __postRegister = createAsyncThunk(
  "register",
  async (datas, thunkAPI) => {
    try {
      const response = await acuxios.post("api/user/signup", datas);
      alert(
        response?.data.statusCode === 200
          ? "회원가입 성공"
          : "회원가입에 문제가 생겼습니다."
      );
    } catch (e) {
      alert(
        e.response.status === 400
          ? "이미 존재하는 회원이거나 잘못된 회원입니다."
          : "문제가 생겼습니다."
      );
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
