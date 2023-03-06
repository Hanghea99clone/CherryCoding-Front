import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modaltoggle = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    toggle: (_, action) => action.payload,
  },
});

export const { toggle } = modaltoggle.actions;

export default modaltoggle;
