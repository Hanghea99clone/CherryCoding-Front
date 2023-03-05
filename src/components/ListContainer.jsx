import React from "react";
import styled from "styled-components";


// 리스트를 보여줄 컴포넌트
const ListContainer = () => {
  return (
    <MypageListBox>
      <MypageListArea>
        <MypageListDivImg>
          <img src="https://codingapple.com/wp-content/uploads/2020/02/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84%EC%98%A8%EB%9D%BC%EC%9D%B8_1.png" />
        </MypageListDivImg>

        <MypageListDivText>

          <MypageListTextTitle>
            <a>쉽게 이해하는 JavaScript 객체지향 & ES6 신문법</a>
          </MypageListTextTitle>

          <MypageListTextStar>
            <a>리뷰<MypageListTextReview>(33 리뷰)</MypageListTextReview></a>
          </MypageListTextStar>

          <MypageListTextBody>
            <p> 실제 웹 UI를 여러개 만들어보며 배워보는 JavaScript 기초 수업입니다. 문법만 쭉 나열하면서 가르치면 재미없어서 강의 끄고 유튜브 보러갈 것이 뻔하니 실무 예제 중심의…</p>
          </MypageListTextBody>


          <MypageListTextBtn>
            <p>100원</p>
          </MypageListTextBtn>

        </MypageListDivText>

      </MypageListArea>
    </MypageListBox>
  )
}

export default ListContainer;

const MypageListBox = styled.div`
  padding: 10px;
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid gray;
`

const MypageListArea = styled.div`
  width: 100%;
  height: 315px;
  border-top: 1px solid rgba(0,0,0,.08);
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 20px;
`;

const MypageListDivImg = styled.div`
  width: 30%;
  height: 85%;
  margin: 0 auto;
  ${(props) => props.theme.FelexCenter};
  > img { 
    width: 100%;
    height: 100%;
    border-radius: .625rem;
  }
  :hover {
    transform: scale(0.97);
    transition: 0.5s;
  }
  transform: scale(1);
  transition: 0.5s;
`;

const MypageListDivText = styled.div`
  width: 65%;
  height: 85%;
  /* border: 1px solid red; */
  `;

const MypageListTextTitle = styled.div`
  width: 100%;
  text-align: left;
    > a {
    color: #105796;
    padding-left: 1.25rem;
    font-size: 16px;
    cursor: pointer;
  }
  > a:hover {
    color: tomato;
    transition: 0.4s;
  }
`;

const MypageListTextStar = styled.div`
  width: 100%;
  height: 10%;
  padding: 5px;
  > a {
    padding: .9375rem;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
`;
const MypageListTextReview = styled.span`
  padding-left: .3125rem;
  font-size: 12px;
  color: #888;
  `;

const MypageListTextBody = styled.div`
  widows: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  text-align: left;
  > p {
    padding: .9375rem;
    font-size: 14px;
    color: rgb(68,68,68);
  }
`;

const MypageListTextBtn = styled.div`
    width: 100%;
    height: 40%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: right;
    > p{ 
    display: flex;
    font-size: 20px;
    color: #ec625b;
 
    margin-top: 5rem;
    cursor: pointer;
    }
    > p:hover {  
    transform: scale(1.1);
    transition: 0.4s;
    text-shadow: 
    0px 0px 4px #ccc, 
    0px -5px 4px #ff3, 
    2px -10px 6px #fd3, 
    -2px -15px 11px #680, 
    2px -19px 18px #f20;
  }
`
