import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

const GetToken = Cookies.get('access_token')

export const __undateMyinfo = createAsyncThunk(
    "undateMyinfo",
    async (editmyinfo, thunkAPI) => {
        console.log(editmyinfo)
        console.log(GetToken)
        try {      
            const response = await axios.put(`http://3.37.146.173:8080/api/user/update`, editmyinfo, {
                headers: {
                    Authorization: GetToken,
                }
            }
            );
            console.log(response);
        } catch (e) {
            console.log(e);
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
