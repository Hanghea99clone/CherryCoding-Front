import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { acuxios } from "../../util/axiosbase";

const token = Cookies.get("access_token");

export const __deleteCurriculum = createAsyncThunk(
  "deleteCurriculum",
  async (id, thunkAPI) => {
    try {
      const response = await acuxios.delete(`api/curriculum/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      alert(
        response?.data.statusCode === 200
          ? "삭제 성공"
          : "삭제에 문제가 생겼습니다."
      );
    } catch (e) {
      alert(
        e.response.status === 400
          ? "삭제 실패했습니다."
          : "삭제에 문제가 생겼습니다."
      );
    }
  }
);

const initialState = {
  review: null,
  isLoading: false,
  error: null,
};

const deleteCurriculum = createSlice({
  name: "deleteCurriculum",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__deleteCurriculum.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__deleteCurriculum.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review = action.payload;
      state.error = null;
    });
    builder.addCase(__deleteCurriculum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default deleteCurriculum;
