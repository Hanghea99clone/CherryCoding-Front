import { configureStore } from "@reduxjs/toolkit";
import modallogin from "../module/login";
import register from "../module/signup";
import postLogin from "../module/postLogin";
import postLecture from "../module/registration";
import getCurriculmList from "../module/getcurriculum";
import getDetailCurriculumList from "../module/getdetailcurriculum";
import postReview from "../module/addreview";
import myModal from "../module/mymodal";
import deleteReview from "../module/deletereview";

const store = configureStore({
  reducer: {
    modal: modallogin.reducer,
    signup: register.reducer,
    login: postLogin.reducer,
    lecture: postLecture.reducer,
    getCurriculmList: getCurriculmList.reducer,
    getDetailCurriculumList: getDetailCurriculumList.reducer,
    addreview: postReview.reducer,
    mymodal: myModal.reducer,
    deletereview: deleteReview.reducer,
  },
});

export default store;
