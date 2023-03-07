import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toggle } from "../redux/module/login";
import { myModal } from "../redux/module/mymodal";
import { FaUserAlt } from "react-icons/fa";

function Aboutmymodal() {
  const userName = JSON.parse(localStorage.getItem("userInfo"));
  const [, , removeCookie] = useCookies(["access_token"]);
  const [loginmypage, setLoginmypage] = useState(true);
  const dispatch = useDispatch();
  const isAdmin = JSON.parse(localStorage.getItem("userInfo"));

  function logoutpage() {
    removeCookie("access_token");
    localStorage.removeItem("userInfo");
    dispatch(toggle(false));
    dispatch(myModal(false));
  }

  return (
    <AboutmymodalDivBox>
      <AboutmymodalDivArea>
        <AboutmymodalFirstSpanArea>
          <div>
            <FaUserAlt size={"35"} />
          </div>
          <div>
            <AboutmymodalFirstSpan>{userName?.userName}</AboutmymodalFirstSpan>
          </div>
        </AboutmymodalFirstSpanArea>
        <AboutmymodalSpanArea>
          <AboutmymodalLogout onClick={logoutpage}>로그아웃</AboutmymodalLogout>
        </AboutmymodalSpanArea>
        <AboutmymodalSpanArea>
          <Link to={`/mypage`}>
            <span>마이페이지</span>
          </Link>
        </AboutmymodalSpanArea>
        {isAdmin.isAdmin === "true" ? (
          <AboutmymodalSpanArea>
            <Link to={`/registration`}>
              <span>등록하기</span>
            </Link>
          </AboutmymodalSpanArea>
        ) : null}
      </AboutmymodalDivArea>
    </AboutmymodalDivBox>
  );
}

const AboutmymodalDivBox = styled.div`
  //border: 1px solid black;
  width: 250px;
  height: 200px;
  background-color: rgb(49, 59, 61);
  color: white;
  position: absolute;
  top: 6.25rem;
  right: 12.5rem;
  z-index: 11;
  border-radius: 10px;
`;

const AboutmymodalDivArea = styled.div`
  display: flex;
  flex-direction: column;
  //border: 1px solid black;
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

const AboutmymodalFirstSpanArea = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid white;
`;

const AboutmymodalFirstSpan = styled.span`
  font-size: 17px;
`;

const AboutmymodalLogout = styled.span`
  cursor: pointer;
  display: flex;
`;

export default Aboutmymodal;
