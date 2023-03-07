import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  HomeBox,
  HomeImgSpanArea,
  HomeBoxDiv,
  HomeBannerImg,
  HomeBoxContainer,
  HomeImgBanner,
  HomeGideBox,
  HomeGideBoxSpanDivArea,
  HomeImageBox,
  HomeGridArea,
  HomeMiddleTextBox,
  HomeMiddleImg,
  HomeMiddleSpan,
  HomeMiddleP,
  HomeBottomBox,
  HomeBottomSpanArea,
  HomeBottomSpan,
  HomeBottomDiv,
  HomeBottomImg,
  HomeBottom,
  HomeFooterBox,
  HomeFooterArea,
  HomeFooterCircleImg,
  HomeFooterCircleBox,
  HomeFooterCircleText,
  HomeFooterCircleButton,
  HomeLineSlider,
  HomeLineSliderArea,
} from "../style/Home";
import mainpagedesign31 from "../asset/mainpagedesign31.png";
import mainpagebanner from "../asset/mainpagebanner.png";
import explain from "../asset/explain.png";
import tablet from "../asset/tablet.png";
import footerimage from "../asset/footerimage.png";
import Modallogin from "../components/Modallogin";
import { useDispatch, useSelector } from "react-redux";
import HomeCateogry from "../components/HomeCateogry";
import Aboutmymodal from "../components/Aboutmymodal";
import { myModal } from "../redux/module/mymodal";
import { useEffect } from "react";
import { __getCurriculumList } from "../redux/module/getcurriculum";
import { Link } from "react-router-dom";

function Home() {
  const modal = useSelector((state) => state.modal);
  const mymodal = useSelector((state) => state.mymodal);
  const dispatch = useDispatch();
  const { isLoading, error, getCurriculmList } = useSelector((state) => {
    return state;
  });

  const List = getCurriculmList.data.data?.lectureDto;

  useEffect(() => {
    dispatch(myModal(false));
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getCurriculumList());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <HomeBox>
        {modal ? <Modallogin /> : null}
        {mymodal ? <Aboutmymodal /> : null}
        <HomeBoxDiv>
          <div>
            <h1>
              포트폴리오 완성까지 책임지는
              <br />
            </h1>
            <h1>Online 프로그래밍 강좌</h1>
          </div>
          <div>
            <span>
              체리코딩 온라인 과정 개강!
              <br />
            </span>
            <span>기초부터 실무까지 단기완성으로!</span>
          </div>
        </HomeBoxDiv>
        <HomeImgSpanArea>
          <HomeBannerImg src={mainpagedesign31} />
        </HomeImgSpanArea>
      </HomeBox>
      <HomeBoxContainer>
        <HomeImgBanner src={mainpagebanner} />
      </HomeBoxContainer>
      <HomeGideBox>
        <HomeGideBoxSpanDivArea>
          <span>
            뭐부터 들을지 모르겠어요
            <br />
          </span>
          <span>
            프리패스 수강 가이드
            <br />
          </span>
        </HomeGideBoxSpanDivArea>
      </HomeGideBox>
      <HomeImageBox>
        <HomeGridArea>
          {List?.map((item) => {
            return (
              <Link key={item.id} to={`/detail/${item.id}`}>
                <HomeCateogry
                  content={item.content}
                  imageUrl={item.imageUrl}
                  title={item.title}
                />
              </Link>
            );
          })}
        </HomeGridArea>
      </HomeImageBox>
      <HomeMiddleTextBox>
        <div>
          <HomeMiddleSpan>저는 왜 개발자를 하고 있죠?</HomeMiddleSpan>
          <HomeMiddleP>
            책에서 재미없는 문법예제만 따라해봤다면
            <br />
            채리코딩에서 프로잭트로 다시 시작하세요.
          </HomeMiddleP>
          <HomeMiddleP>
            의미없는 숫자놀음 예제보다는
            <br />
            첫날부터 웹을 개발하며 배우는 실전.
          </HomeMiddleP>
        </div>

        <HomeMiddleImg src={explain} alt="썸네일" />
      </HomeMiddleTextBox>
      <HomeBottomBox>
        <HomeBottomSpanArea>
          <HomeBottom>
            수강생 포트폴리오 샘풀
            <br />
          </HomeBottom>
          <HomeBottomSpan>
            <span>수강생이 직접 만든 포트폴리오 구경하기</span>
          </HomeBottomSpan>
        </HomeBottomSpanArea>
        <HomeBottomDiv>
          <HomeBottomImg src={tablet} />
        </HomeBottomDiv>
      </HomeBottomBox>
      <HomeFooterBox>
        <HomeFooterArea>
          <span>
            코딩애플 수강생이라면
            <br />
          </span>
          <span>
            취직될때 까지
            <br />
          </span>
          <span>무료 포트 폴리오 코칭!</span>
        </HomeFooterArea>
      </HomeFooterBox>
      <HomeFooterCircleBox>
        <HomeFooterCircleImg src={footerimage} />
        <HomeFooterCircleText>
          <span>
            HTML/CSS,JS,Nodejs 프로젝트 모든 분야에 대한 <br />
          </span>
          <span>폴트폴리오 검토 및 개선방안을 제안드립니다.</span>
          <HomeFooterCircleButton mainMdBtn children={"신청하기"} />
        </HomeFooterCircleText>
      </HomeFooterCircleBox>
      <HomeLineSlider></HomeLineSlider>
      <HomeLineSliderArea></HomeLineSliderArea>
      <Footer />
    </div>
  );
}

export default Home;
