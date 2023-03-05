import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ListContainer from "../components/ListContainer";

function Curriculum() {
  const list = [
    {
      id: 1,
      title: "깃허브 강의",
      description: `깃허브 강의이이이이이이ㅣㅇㅁ  길이가 짧아서 조금 더 길게 작성할게요 조금만 더 길게 조금만 더  조금만 더 조금만 더 `,
      price: "무료",
    },
    {
      id: 2,
      title: "리엑트 강의 ",
      description:
        "리액트 알려주는 강의인데요 길이가 짧아서 조금 더 길게 작성할게요 조금만 더 길게  ",
      price: "무료",
    },
    {
      id: 3,
      title: "자바스크립트",
      description:
        "자바스크립트 강의인데요 길이가 짧아서 조금 더 길게 작성할게요 조금만 더 길게  ",
      price: "무료",
    },
    {
      id: 4,
      title: "타입스크립트",
      description:
        "타입스크립트 강의인데요 길이가 짧아서 조금 더 길게 작성할게요 조금만 더 길게 ",
      price: "이것도 무료 ",
    },
    {
      id: 5,
      title: "뉴진스크립트",
      description:
        "뉴진스크립트 강의인데요 길이가 짧아서 조금 더 길게 작성할게요 조금만 더 길게 ",
      price: "99,999₩ ",
    },
    {
      id: 6,
      title: "자바자바꽉",
      description: `자바자바꽉 강의인데요 길이가 짧아서 조금 더 길게 작성할게요 조금만 더 길게 느그 서장
        남천동 살제`,
      price: "이것도 무료 ",
    },
  ];

  return (
    <>
      <Header />
      <CurriculumNav />
      <CurriculumContainer>

        <ListContainer />

      </CurriculumContainer>
      <Footer />
    </>
  );
}

export default Curriculum;

const CurriculumNav = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 4vh;
`;

const CurriculumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const CurriculumBox = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; */
`;
