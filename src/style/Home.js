import styled from "styled-components";
import Button from "../components/Button";

export const HomeBox = styled.div`
  //border: 0.0625rem solid red;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  white-space: nowrap;
  overflow: hidden;
`;

export const HomeImgSpanArea = styled.div`
  //border: .0625rem solid black;
  height: 25rem;
`;

export const HomeBoxDiv = styled.div`
  //border: .0625rem solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25rem;
  @media screen and (max-width: 1500px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 1100px) {
    margin-left: 50px;
    font-size: 12px;
  }
`;

export const HomeBannerImg = styled.img`
  //border: .0625rem solid black;
  width: 100%;
  height: 100%;
  object-fit: cover;
  //background-color: red;
`;
export const HomeBoxContainer = styled.div`
  //border: 0.0625rem solid blue;
  ${(props) => props.theme.FelexCenter}
  width: 100%;
  background-color: #4a2884;
`;

export const HomeImgBanner = styled.img`
  //border: 0.0625rem solid red;
  width: 50%;
  height: 50%;
  margin-top: 3.125rem;
  @media screen and (max-width: 1100px) {
    width: 80%;
  }
`;

export const HomeGideBox = styled.div`
  //border: 1px solid black;
  height: 12.5rem;
  ${(props) => props.theme.FelexCenter}
`;

export const HomeGideBoxSpanDivArea = styled.div`
  //border: 1px solid black;
  width: 18.75rem;
  height: 6.25rem;
  border-radius: 20px;
  background-color: black;
  color: white;
  ${(props) => props.theme.FelexCenter}
  flex-direction: column;
  font-size: 20px;
`;

export const HomeImageBox = styled.div`
  //border: 0.0625rem solid blue;
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeGridArea = styled.div`
  //border: 0.0625rem solid blue;
  display: grid;
  width: 80%;
  place-items: center;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(3, 1fr);
  row-gap: 100px;
  img {
    width: 300px;
  }
  @media screen and (max-width: 1230px) {
    padding: 30px;
  }
  @media screen and (max-width: 1396px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HomeContentsGridArea = styled.div`
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeContentGridImg = styled.img`
  @media screen and (max-width: 1570px) {
    max-width: 80%;
  }
`;

export const HomeTitleGridArea = styled.div`
  margin-top: 20px;
`;

export const HomeTitleGrid = styled.span`
  font-size: 20px;
  @media screen and (max-width: 1570px) {
    font-size: 16px;
  }
`;

export const HomeTextGrid = styled.div`
  width: 330px;
  //border: 1px solid black;
  margin-top: 20px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (max-width: 1285px) {
    font-size: 15px;
  }
`;

export const HomeMiddleTextBox = styled.div`
  //border: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 200px;
  padding: 0 20px 0 20px;
  @media screen and (min-width: 1900px) {
    justify-content: space-evenly;
  }
`;

export const HomeMiddleImg = styled.img`
  //border: 1px solid black;
  @media screen and (min-width: 1900px) {
    width: 30%;
  }
  width: 40%;
  margin-bottom: 60px;
`;

export const HomeMiddleSpan = styled.span`
  font-size: 30px;
`;

export const HomeMiddleP = styled.p`
  margin-top: 20px;
`;

export const HomeBottomBox = styled.div`
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #484848;
  padding: 20px;
`;

export const HomeBottomSpanArea = styled.div`
  text-align: center;
  color: white;
`;

export const HomeBottomSpan = styled.div`
  margin-top: 10px;
`;

export const HomeBottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeBottomImg = styled.img`
  width: 40%;
`;

export const HomeBottom = styled.span`
  font-size: 25px;
`;

export const HomeFooterBox = styled.div`
  //border: 1px solid black;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const HomeFooterArea = styled.div`
  //border: 1px solid red;
  background-color: #f0f0f0;
  width: 600px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
`;

export const HomeFooterCircleImg = styled.img`
  //border: 1px solid black;
  width: 40%;
  margin-bottom: 40px;
  font-size: 16px;
  @media screen and (min-width: 1100px) {
    width: 20%;
  }
`;

export const HomeFooterCircleBox = styled.div`
  //border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const HomeFooterCircleText = styled.div`
  //border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const HomeFooterCircleButton = styled(Button)`
  margin-top: 30px;
`;

export const HomeLineSlider = styled.div`
  border: 2px solid black;
  margin-top: 100px; ;
`;

export const HomeLineSliderArea = styled.div`
  height: 300px;
`;
