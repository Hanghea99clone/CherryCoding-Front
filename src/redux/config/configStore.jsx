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
import editReview from "../module/editreview";

const store = configureStore({
  reducer: {
    modal: modallogin.reducer,
    register: register.reducer,
    login: postLogin.reducer,
    lecture: postLecture.reducer,
    getCurriculmList: getCurriculmList.reducer,
    getDetailCurriculumList: getDetailCurriculumList.reducer,
    addreview: postReview.reducer,
    mymodal: myModal.reducer,
    deletereview: deleteReview.reducer,
    putreview: editReview,
  },
});

export default store;
