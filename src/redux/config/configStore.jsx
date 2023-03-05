import { configureStore } from "@reduxjs/toolkit";
import modallogin from "../module/login";
import register from "../module/signup";
import postLogin from "../module/postLogin";

const store = configureStore({
  reducer: {
    modal: modallogin.reducer,
    register: register.reducer,
    login: postLogin.reducer,
  },
});

export default store;
