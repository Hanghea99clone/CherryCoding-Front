import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterConteiner>
      <div>
        <FooterHtreeSpanArea>
          <h3>About</h3>
          <span>팀원</span>
        </FooterHtreeSpanArea>
        <FooterBoxDiv>
          <div>
            <span>FE: </span>
            <span>이한결, </span>
            <span>음지훈, </span>
            <span>권구민</span>
          </div>
          <div>
            <span>BE: </span>
            <span>유영우, </span>
            <span>김정규, </span>
            <span>나도관, </span>
            <span>강민규</span>
          </div>
        </FooterBoxDiv>
      </div>
    </FooterConteiner>
  );
}

const FooterConteiner = styled.div`
  border: 0.0625rem solid black;
  width: 100%;
  height: 8.125rem;
  background: #303347;
  color: #fff;
`;

const FooterHtreeSpanArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterBoxDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Footer;
