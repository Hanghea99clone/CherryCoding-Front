import React, { useState } from "react";
import styled from "styled-components";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'


// 리스트를 보여줄 컴포넌트
const MypageListContainer = () => {
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
            <p>&nbsp; &nbsp; 실제 웹 UI를 여러개 만들어보며 배워보는 JavaScript 기초 수업입니다. 문법만 쭉 나열하면서 가르치면 재미없어서 강의 끄고 유튜브 보러갈 것이 뻔하니 실무 예제 중심의…</p>
          </MypageListTextBody>


          <MypageListTextBtn>
            <Button smBtn>수강 계속하기</Button>
          </MypageListTextBtn>

        </MypageListDivText>

      </MypageListArea>
    </MypageListBox>
  )
}

// 내정보 수정을 보여줄 컴포넌트
const MypageMyinfoEdit = () => {
  return (
    <MypageMyinfoEditContainer>
      <MypageMyinfoEditBox>
        <h2>내 정보 수정</h2>
        <MypageMyinfoEditArea>

          <MypageMyinfoEditInputArea>
            <input type="password" />
            <label>현재패스워드 입력</label>
            <div><FaLock /></div>
          </MypageMyinfoEditInputArea>

          <MypageMyinfoEditInputArea>
            <input type="text" />
            <label>현재패스워드 입력</label>
            <div><FaLock /></div>
          </MypageMyinfoEditInputArea>

          <MypageMyinfoEditInputArea>
            <input type="password" />
            <label>새 비밀번호</label>
            <div><FaLock /></div>
          </MypageMyinfoEditInputArea>

          <MypageMyinfoEditInputArea>
            <input type="password" />
            <label>새 비밀번호 재입력</label>
            <div><FaLock /></div>
          </MypageMyinfoEditInputArea>

          <MypageMyinfoEditButtonArea>

            <Button smBtn>수정하기</Button>

          </MypageMyinfoEditButtonArea>

        </MypageMyinfoEditArea>
      </MypageMyinfoEditBox>
    </MypageMyinfoEditContainer>
  )
}

const MypageMyinfoEditContainer = styled.div`
  width: 100%;
  height: 45rem;
  border-top: 1px solid gray;
  margin: 6.25rem 1.25rem;
`;

const MypageMyinfoEditBox = styled.div`
  width: 50%;
  height: 80%;

  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 1.875rem 0;

  > h2 {
    padding: 10px;
    font-size: 25px;
    text-align: center;
  }
`;

const MypageMyinfoEditArea = styled.div`
  width: 85%;
  height: 80%;
  margin-left: 1.875rem;
  ${(props) => props.theme.FelexCenter};
  flex-direction: column;
`;

const MypageMyinfoEditInputArea = styled.div`
  position: relative;
  margin: 20px 0;
  width: 19.375rem;
  height: 12.5rem;
  ${(props) => props.theme.FelexCenter};
  > label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  pointer-events: none;
  font-weight: 700;

  transition: all 0.25s ease-in-out;
  }
  > input {
    width: 100%;
    height: 50px; 
    font-size: 1em;
    padding:0 35px 0 5px;
    color: #000;
    padding-left: 1.25rem;
    border-radius: .625rem;
    font-weight: 500;
    outline: none;
    border: 1px solid gray;
  };
  > input:focus ~ label{
    top: -5px;
  };
  > input:valid ~ label {
    top: -5px;
  }
  > div {
    position: absolute;
    right: 10px;
    font-size: 1.2em;
    top: 20px;
  }
`;



const MypageMyinfoEditButtonArea = styled.div`
    ${(props) => props.theme.FelexCenter};
`;



function Mypage() {
  const [currentTab, clickTab] = useState(0);
  const mydata = 10

  const menuArr = [
    { name: `강좌 ${mydata}`, content: <MypageListContainer /> },
    { name: '설정', content: <MypageMyinfoEdit /> },
  ];






  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

  return (
    <MypageContainer>
      <Header />
      <MypageArea>

        <h4> <FaUserAlt /> <p>유저이름들어갈 자리</p></h4>
      </MypageArea>



      <TabMenu>
        {/* // 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정
        // li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused', 나머지 2개의 tab은 'submenu'  */}
        {/* <li className="submenu">{menuArr[0].name}</li>
          <li className="submenu">{menuArr[1].name}</li>
          <li className="submenu">{menuArr[2].name}</li> */}
        {menuArr.map((el, index) => (
          <li key={index}
            className={index === currentTab ? "submenu focused" : "submenu"}
            onClick={() => selectMenuHandler(index)}>{el.name}</li>
        ))}
      </TabMenu>

      <Desc>
        <div>{menuArr[currentTab].content}</div>
      </Desc>





      {/* 
      <MypageTadBox>
        <ul>





          {/* <li>내 강좌 <MypageTabSpan>10</MypageTabSpan> </li>
          <li>프로필</li> 
        </ul>
      </MypageTadBox> */}















      <Footer />
    </MypageContainer>
  )

};

export default Mypage;

const MypageContainer = styled.div`
  width: 100%;
  height: 100%;
`

const MypageArea = styled.div`
  width: 100%;
  height: 3.125rem;
  padding: 30px 100px;
  display: flex;
  align-items: center;
  color: #666;
  border-radius: .5rem;
  > h4{
    display: flex;
    font-size: 1.5rem;
    gap: 0 20px;
  };
  > p {
    margin-left: 1.25rem;
    font-weight: 600;
  };
`;

const MypageTadBox = styled.div`
  width: 90%;
  height: 3.125rem;
  background: #f7f7f7;
  margin: 0 auto;
  border-radius: .5rem;
  padding-left: 5rem;
  border: none;
  display: flex;
  align-items: center;
  > ul {
    display: flex;
    gap: 0 1.25rem;
  };
  > li {
    position: relative;
    padding: .9375rem;
    font-weight: 200;
  }
`;

const MypageTabSpan = styled.span`
    padding: 2px 5px;
    background: #ff4949;
    color: #fff;
    font-size: .9375rem;
`;


const MypageListBox = styled.div`
  padding: 10px;
  width: 90%;
  margin: 0 auto;
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
`;

const MypageListDivText = styled.div`
  width: 65%;
  height: 85%;
  /* border: 1px solid red; */
  `;

const MypageListTextTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
    > a {
    color: #105796;
    padding-left: 1.25rem;
    font-size: 16px;
  }
`;

const MypageListTextStar = styled.div`
  width: 100%;
  height: 10%;
  padding: 10px;
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
  /* border: 1px solid red; */
  > p {
    padding: 10px;
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
`


const TabMenu = styled.ul`
  width: 90%;
  background:#f7f7f7;
  color: #999;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px auto;

  .submenu {
  // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    /* justify-content: space-between;
    width: 380px;
    heigth: 30px; */
    width: calc(100% /4);
    padding: 10px;
    font-size: 15px;
    transition: all 0.5s ;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;