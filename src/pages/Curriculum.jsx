import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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
        <CurriculumBox>
          {list.map((list) => (
            <CurriculumCourseArea key={list.id}>
              <Link to="/detail/:id">
                <CurriculumCourseAreaImage
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt5RSvS9oz4uNyackHj9poHNt_P0TJl8Bzw&usqp=CAU"
                  }
                />
              </Link>
              <CurriculumCourseListArea>
                <CurriculumTitleLink to="/detail/:id">
                  {list.title}
                </CurriculumTitleLink>
                <CurriculumDescriptionP>
                  {list.description}
                </CurriculumDescriptionP>
                <CurriculumPriceP>{list.price}</CurriculumPriceP>
              </CurriculumCourseListArea>
            </CurriculumCourseArea>
          ))}
        </CurriculumBox>
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

const CurriculumCourseArea = styled.div`
  display: flex;

  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);
`;

const CurriculumCourseAreaImage = styled.img`
  border-radius: 10px;
  border-radius: 10px;
  width: 340px;
  height: 214px;
  margin-right: 20px;
  object-fit: cover;
  margin-bottom: 20px;
  :hover {
    transform: scale(0.97);
    transition: 0.5s;
  }
  transform: scale(1);
  transition: 0.5s;
`;
const CurriculumCourseListArea = styled.div`
  flex: 1;
  padding: 20px;
`;

const CurriculumTitleLink = styled(Link)`
  font-size: 20px;
  margin-bottom: 10px;
  text-decoration-line: none;
  color: #446c9f;

  :hover {
    color: tomato;
    transition: 0.4s;
  }
`;

const CurriculumDescriptionP = styled.p`
  font-size: 15px;
  color: #888;
  margin-bottom: 10px;
`;

const CurriculumPriceP = styled.span`
  display: flex;

  font-size: 20px;
  color: #ec625b;
  justify-content: flex-end;
  margin-top: 5rem;
`;
