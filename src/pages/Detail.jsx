import React, { useState } from "react";
import styled from "styled-components";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useForm } from "react-hook-form";

function Detail() {
  const { register, handleSubmit } = useForm();

  const [textValue, setTextValue] = useState('')
  return <div>
    <Header />

    <DetailContainer>


      {/* 상세페이지 설명글  */}
      <DetailNavListBox>
        <h6> 홈 / 강좌 / WEB / (무료) 매우쉽게 알려주는 GIT & GITHUB</h6>
        <h2>(무료) 매우쉽게 알려주는 git & github</h2>
        <h6> ( 29 리뷰 )  13323 수강생</h6>
      </DetailNavListBox>


      <DetailImgTextBox>

        <DetailImgArea>
          <img src="https://codingapple.com/wp-content/uploads/2022/06/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84%EC%98%A8%EB%9D%BC%EC%9D%B8.png" />
        </DetailImgArea>

        <DetailTextArea>

          <DetailTextArea2>
            <Button style={{ width: '220px', height: '80px', backgroundColor: "#ff5554", color: "#fff" }}>수강 계속하기</Button>
            <ul>
              <li>수강중</li>
              <li>강의 남은기간</li>
            </ul>
          </DetailTextArea2>

          <h5>13351명의 수강생</h5>

          <Button sm
            style={{ marginTop: "20px" }}>영상 버퍼링이슈가 있다면 ▶</Button>

        </DetailTextArea>

      </DetailImgTextBox>


      <DetailMainTextBox>
        <p>홈</p>
      </DetailMainTextBox>

      <DetailMainTextArea>
        <p>&nbsp;</p>
        <p>코드짜다가 갑자기 2일 전으로 시간을 돌리고 싶으면?

          팀원과 코드 충돌없이 협업하고 싶으면?

          버전 컨트롤을 도와주는 소프트웨어인 git 쓰면 가능합니다.

          그리고 git 모르면 취업 못함



          git checkout으로 뻘짓하던 예전보다 더 쉬워진 git restore, switch 신문법을 이용하고

          구닥다리 Vim과 터미널 말고 VSCode 에디터를 사용해서 git을 배워봅시다.



          평생 코딩노예만 할 것이면 git add, git commit, git push, git pull 만 알아도 되긴 합니다만

          나중에 코딩노예 팀을 지휘하고 싶은 분들을 위한 branch, merge 전략까지 다루고 있습니다.



          (현재 수강료 0원 이벤트중, 수강기간 6개월)

        </p>


      </DetailMainTextArea>

      {/* 강좌에대한 리뷰가 들어가는 곳입니다!  */}
      <DetailReviewBox>

        <h2>깃허브 강좌 Review</h2>
        <DetailReviewArea>
          <h3>양방향통신</h3>
          <p>ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅋㅌㅊㄴㅋㅁㅇㅁㄴㅇㅁㄴ
            ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ
            ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
            ㅁㄴㅇㅁㄴㅇㅁㄴ
          </p>
        </DetailReviewArea>

        <DetailReviewArea>
          <h3>통신</h3>
          <p>ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅋㅌㅊㄴㅋㅁㅇㅁㄴㅇㅁㄴ
            ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ
            ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
            ㅁㄴㅇㅁㄴㅇㅁㄴ
          </p>
        </DetailReviewArea>



      </DetailReviewBox>






      <DetailRevieMake onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>


        <label htmlFor="text">리뷰</label>
        <textarea
          id="text"
          type="text"
          value={textValue}
          placeholder="리뷰작성"
          {...register("text")}
        />
        <button type="submit">리뷰 등록</button>

      </DetailRevieMake>




    </DetailContainer>
    <Footer />
  </div >;
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
  };
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
  width: 75%;
  height: 100%;
  > img {
    width: 95%;
    height: 100%;  
    border-radius: .625rem;
  }
`;

const DetailTextArea = styled.div`
  width: 30%;
  height: 100%;
  /* border: 1px solid red; */
  ${(props) => props.theme.FelexCenter}
  flex-direction: column;
  gap: 50px 0 ;
  > h5 {
    border-bottom: 1px solid gray;
  }
`


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
  };
  > li {
    padding: 10px 0;
  }
`;

const DetailMainTextBox = styled.div`
  width: 62%;
  height: 3.125rem;
  padding: .625rem;
  margin-top: 1.25rem;
  background: #fafafa;

  
  display: flex;
  align-items: center;
  margin-left: 70px; 
`;

const DetailMainTextArea = styled.div`
  width: 62%;
  padding: .625rem;
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
  padding: 1.25rem;
`;

const DetailReviewArea = styled.div`
  width: 60%;
  height: 10rem;
  margin-left: 1.25rem;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border:1px solid #eee;
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
`

