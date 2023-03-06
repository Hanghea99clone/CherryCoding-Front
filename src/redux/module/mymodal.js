import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const mymodaltoggle = createSlice({
  name: "myMoalReducer",
  initialState,
  reducers: {
    myModal: (_, action) => action.payload,
  },
});

export const { myModal } = mymodaltoggle.actions;

export default mymodaltoggle;
