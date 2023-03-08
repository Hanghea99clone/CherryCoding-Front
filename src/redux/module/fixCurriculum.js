import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { acuxios } from "../../util/axiosbase";

const token = Cookies.get("access_token");

export const __fixCurriculum = createAsyncThunk(
  "postLecture",
  async ({ id, datas }, thunkAPI) => {
    try {
      const response = await acuxios.put(`api/curriculum/${id}`, datas, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });
      alert(
        response?.data.statusCode === 200
          ? "수정 성공했습니다."
          : "회원가입에 문제가 생겼습니다."
      );
    } catch (e) {
      alert(
        e.response.status === 400
          ? "수정 실패했습니다."
          : "수정에 문제가 생겼습니다."
      );
    }
  }
);

const initialState = {
  lecture: null,
  isLoading: false,
  error: null,
};

const fixCurriculum = createSlice({
  name: "Lecture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__fixCurriculum.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__fixCurriculum.fulfilled, (state, action) => {
      state.isLoading = false;
      state.lecture = action.payload;
      state.error = null;
    });
    builder.addCase(__fixCurriculum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default fixCurriculum;
