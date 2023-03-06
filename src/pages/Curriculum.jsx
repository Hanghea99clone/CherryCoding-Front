import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ListContainer from "../components/ListContainer";
import { useDispatch, useSelector } from "react-redux";
import { __getCurriculumList } from "../redux/module/getcurriculum";
import { Loading } from "../components/Loading";

function Curriculum() {
  const dispatch = useDispatch();

  // 첫 로딩될 때 리스트 가져옴
  const { isLoading, error, getCurriculmList } = useSelector((state) => {
    return state;
  });

  // console.log(getCurriculmList.data.data.lectureDto)
  const List = getCurriculmList.data.data?.lectureDto;

  useEffect(() => {
    dispatch(__getCurriculumList());
  }, [dispatch]);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* 로딩일떄 스피너 보여주기 */}
      {isLoading && true ? (
        <Loading />
      ) : (
        // 로딩이 아닐떄
        <>
          <Header />

          <CurriculumNav />
          <CurriculumContainer>
            {List?.map((item) => {
              return <ListContainer item={item} key={item.id} />;
            })}
          </CurriculumContainer>

          <Footer />
        </>
      )}
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
