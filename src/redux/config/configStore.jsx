import { configureStore } from "@reduxjs/toolkit";
import modallogin from "../module/login";
import register from "../module/signup";
import postLogin from "../module/postLogin";
import postLecture from "../module/registration";
import getCurriculmList from "../module/getCurriculum";
import getDetailCurriculumList from "../module/getDetailCurriculum";
import postReview from "../module/addReview";
import myModal from "../module/mymodal";
import deleteReview from "../module/deleteReview";
import getInfinitiScroll from "../module/infinitiScroll";
import editReview from "../module/editReview";
import undateMyinfo from "../module/updateUserInfo";
import postregistercourse from "../module/postRegisterCourse";
import usercurriculum from "../module/userCurriculum";
import fixCurriculum from "../module/fixCurriculum";
import deleteCurriculum from "../module/deleteCurriculum";

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
    infinite: getInfinitiScroll.reducer,
    putreview: editReview,
    undateMyinfo: undateMyinfo.reducer,
    postregistercourse: postregistercourse.reducer,
    usercurriculum: usercurriculum.reducer,
    fixCurriculum: fixCurriculum.reducer,
    fixCurriculum: fixCurriculum.reducer,
    deleteCurrculum: deleteCurriculum.reducer,
  },
});

export default store;
