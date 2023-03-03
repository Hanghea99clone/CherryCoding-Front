import React from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import styled from "styled-components";
import codingcherrylogo from "../asset/codingcherrylogo.png";

function Header() {
  return (
    <HeaderContainer>
      <HeaderBox>
        <div>
          <HeaderImg src={codingcherrylogo} alt="배경로고" />
        </div>
        <HeaderAreaSpan>
          <span>HOME</span>
          <span>CURRICULUM</span>
        </HeaderAreaSpan>
        <HeaderBoxDiv>
          <div>
            <HeaderFaUserAlt />
            <span>이름</span>
          </div>
          <BsFillBasket3Fill />
        </HeaderBoxDiv>
      </HeaderBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  border: 1px solid red;
  height: 100px;
`;

const HeaderBox = styled.div`
  border: 1px solid black;
  height: 100%;
  ${(props) => props.theme.FlexSpace};
`;

const HeaderAreaSpan = styled.div`
  //border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 180px;
`;

const HeaderImg = styled.img`
  width: 200px;
`;

const HeaderBoxDiv = styled.div`
  //border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 115px;
`;

const HeaderFaUserAlt = styled(FaUserAlt)`
  margin-right: 10px;
`;

export default Header;
