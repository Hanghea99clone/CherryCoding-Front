import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
// import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getDetailCurriculumList } from "../redux/module/getdetailcurriculum";
import { __postReview } from "../redux/module/addreview";
import { __deleteReview } from "../redux/module/deletereview";
import { myModal } from "../redux/module/mymodal";
import Aboutmymodal from "../components/Aboutmymodal";

function Detail() {
  const params = useParams();
  const mymodal = useSelector((state) => state.mymodal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getDetailCurriculumList(params));
  }, [dispatch]);

  useEffect(() => {
    dispatch(myModal(false));
  }, [dispatch]);

  const { isLoading, error, getDetailCurriculumList } = useSelector((state) => {
    return state;
  });

  const List = getDetailCurriculumList.data.data;

  const ListReview = List?.reviewList;
  // reviewContent

  //리뷰 작성하는 곳
  const [titleValue, setTitleValue] = useState("");

  const [contentValue, setContentValue] = useState("");

  const newReview = {
    reviewTitle: titleValue,
    reviewContent: contentValue,
    id: params.id,
  };

  const onCreate = (e) => {
    e.preventDefault();
    console.log(newReview);
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

  return (
    <div>
      <Header />
      {mymodal ? <Aboutmymodal /> : null}
      <DetailContainer>
        {/* 상세페이지 설명글  */}
        <DetailNavListBox>
          <h6>
            {" "}
            홈 / 강좌 / WEB / ({List?.price}원) {List?.title}
          </h6>
          <h2>
            ({List?.price}원,) {List?.title}
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
                  style={{
                    width: "220px",
                    height: "80px",
                    backgroundColor: "#ff5554",
                    color: "#fff",
                  }}
                >
                  수강 계속하기
                </Button>
              ) : (
                <Button
                  style={{
                    width: "220px",
                    height: "80px",
                    backgroundColor: "#ff5554",
                    color: "#fff",
                  }}
                >
                  수강 신청하기
                </Button>
              )}

              <ul>
                <li>수강중</li>
                <li>강의 남은기간</li>
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
          <p>
            코드짜다가 갑자기 2일 전으로 시간을 돌리고 싶으면? 팀원과 코드
            충돌없이 협업하고 싶으면? 버전 컨트롤을 도와주는 소프트웨어인 git
            쓰면 가능합니다. 그리고 git 모르면 취업 못함 git checkout으로
            뻘짓하던 예전보다 더 쉬워진 git restore, switch 신문법을 이용하고
            구닥다리 Vim과 터미널 말고 VSCode 에디터를 사용해서 git을
            배워봅시다. 평생 코딩노예만 할 것이면 git add, git commit, git push,
            git pull 만 알아도 되긴 합니다만 나중에 코딩노예 팀을 지휘하고 싶은
            분들을 위한 branch, merge 전략까지 다루고 있습니다. (현재 수강료 0원
            이벤트중, 수강기간 6개월)
          </p>
        </DetailMainTextArea>

        {/* 강좌에대한 리뷰가 들어가는 곳입니다!  */}
        <DetailReviewBox>
          <h2>{List?.title}의 강좌 리뷰</h2>

          {ListReview?.map((item) => {
            {
              /* console.log(item); */
            }
            return (
              <DetailReviewArea key={item.id}>
                <h3>{item.reviewTitle}</h3>
                <p>{item.reviewContent}</p>
                <span>{item.nickname}</span>
                <Button>수정</Button>
                <Button onClick={() => onDeleteBtnHandler(item.id)}>
                  삭제
                </Button>
              </DetailReviewArea>
            );
          })}
        </DetailReviewBox>

        <DetailRevieMake onSubmit={onCreate}>
          <label htmlFor="text">리뷰</label>

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

const DetailNavListBox = styled.div`
  width: 90%;
  height: 9.375rem;
  /* border: 1px solid gray; */
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
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
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
  border: 3px solid red;
  gap: 60px 0;
  > ul {
    padding: 20px;
  }
  > li {
    padding: 10px 0;
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
`;

const DetailMainTextArea = styled.div`
  width: 62%;
  padding: 0.625rem;
  height: 31.25rem;
  border: 1px solid red;
  margin-top: 20px;
  margin-left: 70px;
`;

const DetailReviewBox = styled.div`
  width: 80%;
  border: 1px solid red;
  margin-top: 20px;
  margin-left: 70px;
  flex-direction: column;
  gap: 20px 0;
  padding: 20px;
`;

const DetailReviewArea = styled.div`
  width: 60%;
  height: 10rem;
  margin-left: 1.25rem;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 1.5rem;
`;

const DetailRevieMake = styled.form`
  width: 60%;
  height: 12.5rem;
  border: 1px solid red;
  margin-top: 3.125rem;
  margin-left: 4.375rem;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;

  > textarea {
    width: 25rem;
    height: 3.75rem;
    padding: 20px;
  }
`;
