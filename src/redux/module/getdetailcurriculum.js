import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const GetToken = Cookies.get('access_token')

export const __getDetailCurriculumList = createAsyncThunk(
    "getDetailCurriculumList",
    async (id, thunkAPI) => {
        console.log(id.id)
        try {
            const response = await axios.get(`http://3.37.146.173:8080/api/curriculum/${id.id}`, {
                headers: {
                    Authorization: GetToken,
                }
            })
            console.log('response', response.data.data)
            return thunkAPI.fulfillWithValue(response.data);
        }
        catch (error) {
            console.log("erroe", error)
            // 오류시 사용하는 API 
            // 네크워크에 요청에 실패한 경우 dispatch 해주는 기능이다 
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const getDetailCurriculumList = createSlice({
    name: "getDetailCurriculumList",
    initialState,
    reducers: {},
    // 미들웨어
    extraReducers: (builder) => {
        builder.addCase(__getDetailCurriculumList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(__getDetailCurriculumList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.data = action.payload;
        });
        builder.addCase(__getDetailCurriculumList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});



export default getDetailCurriculumList

