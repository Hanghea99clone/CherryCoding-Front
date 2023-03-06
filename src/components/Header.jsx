import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import codingcherrylogo from "../asset/codingcherrylogo.png";
import { toggle } from "../redux/module/login";
import { myModal } from "../redux/module/mymodal";
import isLogin from "../util/token";

function Header() {
  const [login, setLogin] = useState(true);
  const [mymodal, setMymodal] = useState(false);
  const dispatch = useDispatch();
  const logininfo = useSelector((state) => state);
  const userName = JSON.parse(localStorage.getItem("userInfo"));

  const modalOpenOpen = () => {
    dispatch(toggle(login));
  };

  const mymodalOpen = () => {
    const newMymodal = !mymodal;
    setMymodal(newMymodal);
    dispatch(myModal(newMymodal));
  };

  useEffect(() => {
    if (logininfo.login) {
      dispatch(toggle(false));
    }
  }, [logininfo.login]);

  return (
    <HeaderContainer>
      <HeaderBox>
        <div>
          <Link to={"/"}>
            <HeaderImg src={codingcherrylogo} alt="배경로고" />
          </Link>
        </div>
        <HeaderAreaSpan>
          <span>HOME</span>
          <Link to={"/curriculum"}>
            <span>CURRICULUM</span>
          </Link>
        </HeaderAreaSpan>
        <HeaderBoxDiv>
          {isLogin() ? (
            <HeaderDiv>
              <HeaderMymodal onClick={() => mymodalOpen()} />
              <span>{userName.userName}</span>
            </HeaderDiv>
          ) : (
            <div>
              <HeaderLoginBtn onClick={modalOpenOpen}>로그인</HeaderLoginBtn>
            </div>
          )}
        </HeaderBoxDiv>
      </HeaderBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  //border: 1px solid red;
  height: 100px;
  width: 100%;
  background-color: white;
  position: relative;
`;

const HeaderBox = styled.div`
  //border: 1px solid black;
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

const HeaderDiv = styled.div`
  //border: 1px solid black;
  display: flex;
`;

const HeaderFaUserAlt = styled(FaUserAlt)`
  margin-right: 10px;
`;

const HeaderLoginBtn = styled.span`
  cursor: pointer;
`;

const HeaderMymodal = styled(HeaderFaUserAlt)`
  cursor: pointer;
`;

export default Header;
