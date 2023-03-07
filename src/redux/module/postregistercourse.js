import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

const GetToken = Cookies.get('access_token')

export const __postregistercourse = createAsyncThunk(
    "postregistercourse",
    async (data, thunkAPI) => {
        console.log(GetToken)
        console.log(data.id)
        try {
            await axios.post(`http://3.37.146.173:8080/api/curriculum/${data.id}`, {}, {
                headers: { Authorization: GetToken, }
            });
        } catch (e) {
            console.log(e);
        }
    }
);

const initialState = {
    mycourse: null,
    isLoading: false,
    error: null,
};

const postregistercourse = createSlice({
    name: "postregistercourse",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(__postregistercourse.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(__postregistercourse.fulfilled, (state, action) => {
            state.isLoading = false;
            state.mycourse = action.payload;
            state.error = null;
        });
        builder.addCase(__postregistercourse.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export default postregistercourse;
