import { configureStore } from "@reduxjs/toolkit";
import modallogin from "../module/login";

const store = configureStore({
  reducer: {
    modal: modallogin.reducer,
  },
});

export default store;
