import React from "react";
import {
  HomeContentsGridArea,
  HomeTitleGridArea,
  HomeTitleGrid,
  HomeTextGrid,
  HomeContentGridImg,
} from "../style/Home";

function HomeCateogry({ content, imageUrl, title }) {
  return (
    <HomeContentsGridArea>
      <HomeContentGridImg src={imageUrl} alt="홈 이미지" />
      <HomeTitleGridArea>
        <HomeTitleGrid>{title}</HomeTitleGrid>
      </HomeTitleGridArea>
      <HomeTextGrid>
        <p>{content}</p>
      </HomeTextGrid>
    </HomeContentsGridArea>
  );
}

export default HomeCateogry;
