import styled from "styled-components";
import Button from "../components/Button";

export const HomeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  white-space: nowrap;
  overflow: hidden;
`;

export const HomeImgSpanArea = styled.div`
  height: 25rem;
`;

export const HomeBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25rem;
  @media screen and (max-width: 1500px) {
    margin-left: 3.125rem;
  }
  @media screen and (max-width: 68.75rem) {
    margin-left: 3.125rem;
    font-size: 0.75rem;
  }
`;

export const HomeBannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const HomeBoxContainer = styled.div`
  ${(props) => props.theme.FelexCenter}
  width: 100%;
  background-color: #4a2884;
`;

export const HomeImgBanner = styled.img`
  width: 50%;
  height: 50%;
  margin-top: 3.125rem;
  @media screen and (max-width: 1100px) {
    width: 80%;
  }
`;

export const HomeGideBox = styled.div`
  height: 12.5rem;
  ${(props) => props.theme.FelexCenter}
`;

export const HomeGideBoxSpanDivArea = styled.div`
  width: 18.75rem;
  height: 6.25rem;
  border-radius: 1.25rem;
  background-color: black;
  color: white;
  ${(props) => props.theme.FelexCenter}
  flex-direction: column;
  font-size: 1.25rem;
`;

export const HomeImageBox = styled.div`
  width: 100%;
  margin-top: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeGridArea = styled.div`
  display: grid;
  width: 80%;
  place-items: center;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(3, 1fr);
  row-gap: 6.25rem;
  img {
    width: 18.75rem;
  }
  @media screen and (max-width: 1230px) {
    padding: 1.875rem;
  }
  @media screen and (max-width: 1396px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HomeContentsGridArea = styled.div`
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
  margin-top: 1.25rem;
`;

export const HomeTitleGrid = styled.span`
  font-size: 20px;
  @media screen and (max-width: 1570px) {
    font-size: 16px;
  }
`;

export const HomeTextGrid = styled.div`
  width: 20.625rem;
  margin-top: 1.25rem;
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12.5rem;
  padding: 0 1.25rem 0 1.25rem;
  @media screen and (min-width: 1900px) {
    justify-content: space-evenly;
  }
`;

export const HomeMiddleImg = styled.img`
  @media screen and (min-width: 1900px) {
    width: 30%;
  }
  width: 40%;
  margin-bottom: 3.75rem;
`;

export const HomeMiddleSpan = styled.span`
  font-size: 30px;
`;

export const HomeMiddleP = styled.p`
  margin-top: 1.25rem;
`;

export const HomeBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #484848;
  padding: 1.25rem;
`;

export const HomeBottomSpanArea = styled.div`
  text-align: center;
  color: white;
`;

export const HomeBottomSpan = styled.div`
  margin-top: 0.625rem;
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
  font-size: 1.5625rem;
`;

export const HomeFooterBox = styled.div`
  width: 100%;
  height: 9.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6.25rem;
`;

export const HomeFooterArea = styled.div`
  background-color: #f0f0f0;
  width: 37.5rem;
  height: 9.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.25rem;
`;

export const HomeFooterCircleImg = styled.img`
  width: 40%;
  margin-bottom: 2.5rem;
  font-size: 16px;
  @media screen and (min-width: 1100px) {
    width: 20%;
  }
`;

export const HomeFooterCircleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const HomeFooterCircleText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const HomeFooterCircleButton = styled(Button)`
  margin-top: 1.875rem;
`;

export const HomeLineSlider = styled.div`
  border: 0.125rem solid black;
  margin-top: 6.25rem; ;
`;

export const HomeLineSliderArea = styled.div`
  height: 18.75rem;
`;
