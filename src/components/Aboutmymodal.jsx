import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toggle } from "../redux/module/login";
import { myModal } from "../redux/module/mymodal";

function Aboutmymodal() {
  const userName = JSON.parse(localStorage.getItem("userInfo"));
  const [, , removeCookie] = useCookies(["access_token"]);
  const [loginmypage, setLoginmypage] = useState(true);
  const dispatch = useDispatch();

  function logoutpage() {
    removeCookie("access_token");
    localStorage.removeItem("userInfo");
    dispatch(toggle(false));
    dispatch(myModal(false));
  }

  return (
    <AboutmymodalDivBox>
      <AboutmymodalDivArea>
        <AboutmymodalSpanArea>
          <span>{userName?.userName}</span>
        </AboutmymodalSpanArea>
        <AboutmymodalSpanArea>
          <AboutmymodalLogout onClick={logoutpage}>로그아웃</AboutmymodalLogout>
        </AboutmymodalSpanArea>
        <AboutmymodalSpanArea>
          <Link to={`/mypage`}>
            <span>마이페이지</span>
          </Link>
        </AboutmymodalSpanArea>
      </AboutmymodalDivArea>
    </AboutmymodalDivBox>
  );
}

const AboutmymodalDivBox = styled.div`
  border: 1px solid black;
  width: 250px;
  height: 100px;
  background-color: rgb(49, 59, 61);
  color: white;
  position: fixed;
  top: 20;
  right: 12.5rem;
  z-index: 11;
`;

const AboutmymodalDivArea = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 100%;
  width: 100%;
`;

const AboutmymodalSpanArea = styled.div`
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
`;

const AboutmymodalLogout = styled.span`
  cursor: pointer;
`;

export default Aboutmymodal;
