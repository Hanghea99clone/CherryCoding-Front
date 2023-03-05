import React, { useState } from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyinfoEdit from "../components/Mypage/MyinfoEdit";
import ListContainer from "../components/Mypage/ListContainer";



function Mypage() {
  const [currentTab, clickTab] = useState(0);
  const mydata = 10

  const menuArr = [
    { name: `강좌 ${mydata}`, content: <ListContainer /> },
    { name: '설정', content: <MyinfoEdit /> },
  ];


  const selectMenuHandler = (index) => {
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