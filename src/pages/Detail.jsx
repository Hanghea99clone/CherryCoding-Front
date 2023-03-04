import React from "react";
import styled from "styled-components";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'



function Detail() {
  return <div>
    <Header />

    <DetailContainer>

      <DetailNavListBox>
        <h5> 홈 / 강좌 / WEB / (무료) 매우쉽게 알려주는 GIT & GITHUB</h5>
        <h1>(무료) 매우쉽게 알려주는 git & github</h1>
        <h4> ( 29 리뷰 )  13323 수강생</h4>
      </DetailNavListBox>

    </DetailContainer>
    <Footer />
  </div >;
}

export default Detail;

const DetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid red;
`;

const DetailNavListBox = styled.div`
  width: 80%;
  height: 12.5rem;
  border: 1px solid red;
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
