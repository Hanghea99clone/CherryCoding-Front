import { configureStore } from "@reduxjs/toolkit";
import modallogin from "../module/login";
import register from "../module/signup";
import postLogin from "../module/postLogin";
import postLecture from "../module/registration";
import getCurriculmList from "../module/getcurriculum";
import getDetailCurriculumList from "../module/getdetailcurriculum";
<<<<<<< HEAD
import postReview from "../module/addreview";
=======
import myModal from "../module/mymodal";
>>>>>>> origin/develop

const store = configureStore({
  reducer: {
    modal: modallogin.reducer,
    register: register.reducer,
    login: postLogin.reducer,
    lecture: postLecture.reducer,
    getCurriculmList: getCurriculmList.reducer,
    getDetailCurriculumList: getDetailCurriculumList.reducer,
<<<<<<< HEAD
    addreview: postReview.reducer,
=======
    mymodal: myModal.reducer,
>>>>>>> origin/develop
  },
});

export default store;
