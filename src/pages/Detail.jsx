import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getDetailCurriculumList } from "../redux/module/getdetailcurriculum";
import { __postReview } from "../redux/module/addreview";
import { __deleteReview } from "../redux/module/deletereview";
import { myModal } from "../redux/module/mymodal";
import Aboutmymodal from "../components/Aboutmymodal";
import { __editReview } from "../redux/module/editreview";
import { __postregistercourse } from "../redux/module/postregistercourse";
import { __deleteCurriculum } from "../redux/module/deleteCurriculum";
import { __getCurriculumList } from "../redux/module/getcurriculum";
import { MdRateReview } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function Detail() {
  const params = useParams();
  const mymodal = useSelector((state) => state.mymodal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getDetailCurriculumList(params));
  }, [dispatch]);

  useEffect(() => {
    dispatch(myModal(false));
  }, [dispatch]);

  const { isLoading, error, getDetailCurriculumList } = useSelector((state) => {
    return state;
  });

  const List = getDetailCurriculumList?.data?.data;

  const data = {
    id: params.id,
  };

  const registercourse = () => {
    navigate("/checkout");
    dispatch(__postregistercourse(data));
  };

  const ListReview = List?.reviewList;

  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const newReview = {
    reviewTitle: titleValue,
    reviewContent: contentValue,
    id: params.id,
  };

  const onCreate = (e) => {
    e.preventDefault();
    dispatch(__postReview(newReview)).then(() => {
      dispatch(__getDetailCurriculumList(params));
      setTitleValue("");
      setContentValue("");
    });
  };

  const onDeleteBtnHandler = async (id) => {
    const confirmText = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmText) {
      await dispatch(__deleteReview(id));
      await dispatch(__getDetailCurriculumList(params));
    } else {
      return;
    }
  };

  const [showInput, setShowInput] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [reviewId, setReviewId] = useState(null);

  const onUpdateBtnHandler = async () => {
    const editNewreview = {
      id: reviewId,
      reviewTitle: editTitle,
      reviewContent: editContent,
    };

    dispatch(__editReview(editNewreview));
    alert("수정완료");
    dispatch(__getDetailCurriculumList(params));
    setShowInput(false);
  };

  function deleteCurriculum() {
    dispatch(__deleteCurriculum(params.id));
    dispatch(__getCurriculumList());
    navigate("/");
  }
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = userInfo.isAdmin;

  return (
    <div>
      <Header />
      {mymodal ? <Aboutmymodal /> : null}

      <DetailContainer>
        {isAdmin === "true" ? (
          <DetailUnpateBox>
            <button
              style={{ background: "#748ffc" }}
              onClick={() => navigate(`/fixcurriculum/${data.id}`)}
            >
              수정하기
            </button>
            <button
              style={{ background: "#ff5554" }}
              onClick={deleteCurriculum}
            >
              강좌 삭제하기
            </button>
          </DetailUnpateBox>
        ) : null}
        <DetailNavListBox>
          <h6>
            홈 / 강좌 / WEB / ({List?.price}원) {List?.title}
          </h6>
          <h2>
            ({List?.price}원) {List?.title}
          </h2>
          <h6> ( {List?.reviewCnt} 리뷰 ) 수강생</h6>
        </DetailNavListBox>

        <DetailImgTextBox>
          <DetailImgArea>
            <img src={List?.imageUrl} />
          </DetailImgArea>

          <DetailTextArea>
            <DetailTextArea2>
              {List?.isEnrolled == false ? (
                <Button
                  onClick={registercourse}
                  style={{
                    width: "220px",
                    height: "80px",
                    backgroundColor: "#ff5554",
                    color: "#fff",
                    borderRadius: "0.625rem",
                  }}
                >
                  수강 신청하기🔥
                </Button>
              ) : (
                <Button
                  onClick={registercourse}
                  style={{
                    width: "220px",
                    height: "80px",
                    backgroundColor: "#ff5554",
                    color: "#fff",
                    borderRadius: "0.625rem",
                  }}
                >
                  수강 계속하기🧑🏻‍💻
                </Button>
              )}

              <ul>
                {List?.isEnrolled == false ? (
                  <li>수강신청해보세요! </li>
                ) : (
                  <li>수강중! </li>
                )}

                <li style={{ marginTop: "1rem" }}>{List?.price}원</li>
              </ul>
            </DetailTextArea2>

            <h5>{List?.studentCnt}명 수강생</h5>

            <Button sm style={{ marginTop: "20px" }}>
              영상 버퍼링이슈가 있다면 ▶
            </Button>
          </DetailTextArea>
        </DetailImgTextBox>

        <DetailMainTextBox>
          <p>홈</p>
        </DetailMainTextBox>
        <DetailMainTextArea>
          <p>&nbsp;</p>
          <p>{List?.content}</p>
        </DetailMainTextArea>

        <DetailReviewBox>
          <h2>{List?.title} 강좌 리뷰</h2>

          {ListReview?.map((item) => {
            return (
              <DetailReviewArea key={item.id}>
                <DetailRevieImageArea>
                  <div>
                    <FaUserCircle />
                  </div>
                  <h4>닉네임:{item.nickname}</h4>
                </DetailRevieImageArea>

                <DetailRevieTextArea>
                  <DetailRevieTextTitleArea>
                    <h3>{item.reviewTitle}</h3>
                  </DetailRevieTextTitleArea>

                  <DetailRevieTextContenteArea>
                    <p>{item.reviewContent}</p>
                  </DetailRevieTextContenteArea>

                  <DetailRevieTextButtonArea>
                    <p>{item.modifiedAt.slice(0, 10)}</p>
                    <button onClick={() => onDeleteBtnHandler(item.id)}>
                      <AiFillDelete />
                    </button>
                  </DetailRevieTextButtonArea>
                </DetailRevieTextArea>
              </DetailReviewArea>
            );
          })}
        </DetailReviewBox>

        <DetailRevieMake onSubmit={onCreate}>
          <label htmlFor="text">
            {" "}
            리뷰 작성 <MdRateReview />{" "}
          </label>

          <input
            id="text"
            type="text"
            value={titleValue}
            placeholder="리뷰 제목을 작성해주세요"
            onChange={(event) => setTitleValue(event.target.value)}
            required
          />

          <textarea
            id="text"
            type="text"
            value={contentValue}
            placeholder="리뷰를 작성해주세요"
            onChange={(event) => setContentValue(event.target.value)}
            required
          />

          <button type="submit">리뷰 등록</button>
        </DetailRevieMake>
      </DetailContainer>
      <Footer />
    </div>
  );
}

export default Detail;

const DetailContainer = styled.div`
  width: 100%;
  border: 1px solid gray;
`;

const DetailUnpateBox = styled.div`
  width: 50%;
  height: 3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 20px;
  > button {
    width: 7.5rem;
    height: 1.875rem;
    border-radius: 0.4375rem;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
  }
`;

const DetailNavListBox = styled.div`
  width: 90%;
  height: 9.375rem;
  margin: 1.25rem auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 30px 0;
  > h1 {
    font-size: 27px;
    font-weight: 700;
  }
  > h4 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const DetailImgTextBox = styled.div`
  width: 90%;
  height: 60%;
  margin-left: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
`;

const DetailImgArea = styled.div`
  width: 65%;
  height: 100%;
  > img {
    width: 95%;
    height: 90%;
    border-radius: 0.625rem;
    object-fit: cover;
  }
`;

const DetailTextArea = styled.div`
  width: 30%;
  height: 100%;
  ${(props) => props.theme.FelexCenter}
  flex-direction: column;
  gap: 50px 0;
  > h5 {
    border-bottom: 1px solid gray;
  }
`;

const DetailTextArea2 = styled.div`
  width: 100%;
  height: 70%;
  padding-top: 1.25rem;
  ${(props) => props.theme.FelexCenter};
  flex-direction: column;
  background: #fafafa;
  gap: 3.75rem 0;
  > ul {
    padding: 1.25rem;
    text-align: center;
  }
`;

const DetailMainTextBox = styled.div`
  width: 62%;
  height: 3.125rem;
  padding: 0.625rem;
  margin-top: 1.25rem;
  background: #fafafa;
  display: flex;
  align-items: center;
  margin-left: 70px;
  > p {
    color: #ff4949;
    padding: 0.75rem 0.625rem;
  }
`;

const DetailMainTextArea = styled.div`
  width: 62%;
  padding: 1.875rem;
  height: 12.5rem;
  margin-top: 20px;
  margin-left: 70px;
`;

const DetailReviewBox = styled.div`
  width: 80%;
  margin-top: 20px;
  margin-left: 70px;
  flex-direction: column;
  gap: 20px 0;
  padding: 20px;
`;

const DetailReviewArea = styled.div`
  width: 70%;
  height: 12.5rem;
  margin-left: 1.25rem;
  display: flex;
  padding: 0.625rem;
  border-top: 1px solid #000;
  margin-top: 1.25rem;
`;

const DetailRevieImageArea = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  > div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 20%;
    margin-top: 1.25rem;
  }
  h4 {
    width: 100%;
    margin-top: 1.25rem;
    text-align: center;
    font-size: 0.9375rem;
  }
`;

const DetailRevieTextArea = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #000;
`;
const DetailRevieTextTitleArea = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-bottom: 1px solid #000;
`;

const DetailRevieTextContenteArea = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  padding-top: 0.625rem;
  padding-left: 1rem;
`;

const DetailRevieTextButtonArea = styled.div`
  width: 100%;
  height: 20%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 1rem;
  > button {
    width: 20%;
  }
`;

const DetailRevieMake = styled.form`
  width: 60%;
  height: 12.5rem;
  margin-top: 3.125rem;
  margin-left: 4.375rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 20px 0;
  > input {
    width: 20rem;
    height: 2.5rem;
  }
  > textarea {
    width: 25rem;
    height: 3.75rem;
    padding: 1.25rem;
    resize: none;
  }
  > button {
    width: 10rem;
  }
`;
