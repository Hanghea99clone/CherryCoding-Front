import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListContainer from "../components/ListContainer";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components/Loading";
import Aboutmymodal from "../components/Aboutmymodal";
import { myModal } from "../redux/module/mymodal";
import { useInView } from "react-intersection-observer";
import {
  __getInfinitiScroll,
  initInfinitiScroll,
} from "../redux/module/infinitiscroll";

function Curriculum() {
  const page = useRef(1);
  const [ref, inView] = useInView();
  const dispatch = useDispatch();
  const mymodal = useSelector((state) => state.mymodal);

  const {
    data,
    isLoading: infinityLoading,
    error: isEror,
  } = useSelector((state) => state.infinite);

  useEffect(() => {
    dispatch(initInfinitiScroll());
    dispatch(__getInfinitiScroll({ page: page.current }));
    dispatch(myModal(false));
  }, []);

  useEffect(() => {
    if (inView) {
      page.current += 1;
      dispatch(__getInfinitiScroll({ page: page.current }));
    }
  }, [inView]);

  return (
    <>
      <Header />
      {mymodal ? <Aboutmymodal /> : null}
      <CurriculumNav />
      <CurriculumContainer>
        {data?.map((item) => {
          return item?.data?.map((item) => {
            return <ListContainer item={item} key={item.id} />;
          });
        })}
        <div ref={ref}>
          {infinityLoading && <Loading />}
          <p>마지막 페이지 입니다.</p>
        </div>
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
