import React from "react";
import styled from "styled-components";
import Button from '../Button'


// 리스트를 보여줄 컴포넌트
const ListContainer = () => {
    return (
        <MypageListBox>
            <MypageListArea>
                <MypageListDivImg>
                    <img src="https://codingapple.com/wp-content/uploads/2020/02/%EC%83%81%ED%92%88%EC%82%AC%EC%A7%84%EC%98%A8%EB%9D%BC%EC%9D%B8_1.png" />
                </MypageListDivImg>

                <MypageListDivText>

                    <MypageListTextTitle>
                        <a>쉽게 이해하는 JavaScript 객체지향 & ES6 신문법</a>
                    </MypageListTextTitle>

                    <MypageListTextStar>
                        <a>리뷰<MypageListTextReview>(33 리뷰)</MypageListTextReview></a>
                    </MypageListTextStar>

                    <MypageListTextBody>
                        <p>&nbsp; &nbsp; 실제 웹 UI를 여러개 만들어보며 배워보는 JavaScript 기초 수업입니다. 문법만 쭉 나열하면서 가르치면 재미없어서 강의 끄고 유튜브 보러갈 것이 뻔하니 실무 예제 중심의…</p>
                    </MypageListTextBody>


                    <MypageListTextBtn>
                        <Button smBtn>수강 계속하기</Button>
                    </MypageListTextBtn>

                </MypageListDivText>

            </MypageListArea>
        </MypageListBox>
    )
}

export default ListContainer;

const MypageListBox = styled.div`
  padding: 10px;
  width: 90%;
  margin: 0 auto;
`

const MypageListArea = styled.div`
  width: 100%;
  height: 315px;
  border-top: 1px solid rgba(0,0,0,.08);
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 20px;
`;

const MypageListDivImg = styled.div`
  width: 30%;
  height: 85%;
  margin: 0 auto;
  ${(props) => props.theme.FelexCenter};
  > img { 
    width: 100%;
    height: 100%;
    border-radius: .625rem;
  }
`;

const MypageListDivText = styled.div`
  width: 65%;
  height: 85%;
  /* border: 1px solid red; */
  `;

const MypageListTextTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
    > a {
    color: #105796;
    padding-left: 1.25rem;
    font-size: 16px;
  }
`;

const MypageListTextStar = styled.div`
  width: 100%;
  height: 10%;
  padding: 10px;
  > a {
    padding: .9375rem;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
`;
const MypageListTextReview = styled.span`
  padding-left: .3125rem;
  font-size: 12px;
  color: #888;
  `;

const MypageListTextBody = styled.div`
  widows: 100%;
  height: 25%;
  /* border: 1px solid red; */
  > p {
    padding: 10px;
    font-size: 14px;
    color: rgb(68,68,68);
  }
`;

const MypageListTextBtn = styled.div`
    width: 100%;
    height: 40%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: right;
`
