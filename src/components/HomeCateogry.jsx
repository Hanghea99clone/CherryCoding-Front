import React from "react";
import {
  HomeContentsGridArea,
  HomeTitleGridArea,
  HomeTitleGrid,
  HomeTextGrid,
} from "../style/Home";
import DataBase from "../asset/DataBase.png";

function HomeCateogry() {
  return (
    <HomeContentsGridArea>
      <img src={DataBase} />
      <HomeTitleGridArea>
        <HomeTitleGrid>
          쉽게 이해하는 인스타그램 데이터 베이스 만들기
        </HomeTitleGrid>
      </HomeTitleGridArea>
      <HomeTextGrid>
        <p>
          리액트 쉽게 설명하기 장인, 코딩애플입니다. '상태관리를 위해 객체를
          부모 컴포넌트의 state로부터 props로 받아와서 리턴해주세요' 같은
          변태적이 사람입니다.
        </p>
      </HomeTextGrid>
    </HomeContentsGridArea>
  );
}

export default HomeCateogry;
