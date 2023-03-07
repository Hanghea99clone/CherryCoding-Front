import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getCurriculumList = createAsyncThunk(
  "getCurriculmList",
  async (arg, thunkAPI) => {
    try {
      const response = await axios.get("http://3.37.146.173:8080/api/lecture");
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

export const getCurriculmList = createSlice({
  name: "getCurriculmList",
  initialState,
  reducers: {},
  // 미들웨어
  extraReducers: (builder) => {
    builder.addCase(__getCurriculumList.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__getCurriculumList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(__getCurriculumList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getCurriculmList;

// // 안에 세가지가 들어간 1.이름 2. 함수 3.액스트라리두서
// export const __getTodos = createAsyncThunk(
//     "getTodos",
//     async (payload, thunkAPI) => {
//         try {
//             const response = await axios.get('http://localhost:4001/todos');
//             console.log('response', response.data)

//             // thunkAPI.~~ 두개다 toolkit에서 제공하는 API 이다
//             // promise -> resolve (= 네크워크 요청이 성공한 경우) => Dispatcth 헤주는 기능 가진 기능
//             // Dispatct == 이기능이 끝나고 리듀서로 보내주는 기능
//             return thunkAPI.fulfillWithValue(response.data);
//         } catch (error) {
//             console.log("erroe", error)
//             // 오류시 사용하는 API
//             // 네크워크에 요청에 실패한 경우 dispatch 해주는 기능이다
//             return thunkAPI.rejectWithValue(error)
//         }

//     }
// )
