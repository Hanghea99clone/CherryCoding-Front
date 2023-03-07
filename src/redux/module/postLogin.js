import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import HandleToken from "../../util/HandleToken";

export const __postLogin = createAsyncThunk(
  "postLogin",
  async (datas, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://3.37.146.173:8080/api/user/login",
        datas
      );
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          userName: `${response.data.data.username}`,
          isAdmin: `${response.data.data.isAdmin}`,
        })
      );
      HandleToken(response.headers.authorization);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      alert(
        e.response.status === 400
          ? "로그인에 실패하였습니다"
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

const postLogin = createSlice({
  name: "postLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__postLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(__postLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default postLogin;
