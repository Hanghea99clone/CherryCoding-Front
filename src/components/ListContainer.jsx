import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ListContainer = (item) => {
  const navigate = useNavigate();
  const onClickDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <MypageListBox>
      <MypageListArea>
        <MypageListDivImg
          onClick={() => {
            onClickDetailPage(item?.item?.id);
          }}
        >
          <img src={item?.item?.imageUrl} />
        </MypageListDivImg>

        <MypageListDivText>
          <MypageListTextTitle>
            <a
              onClick={() => {
                onClickDetailPage(item?.item?.id);
              }}
            >
              {item?.item?.title}
            </a>
          </MypageListTextTitle>

          <MypageListTextStar>
            <a>
              리뷰
              <MypageListTextReview>
                ({item?.item?.reviewCnt} 리뷰)
              </MypageListTextReview>
            </a>
          </MypageListTextStar>

          <MypageListTextBody>
            <p> {item?.item?.content}</p>
          </MypageListTextBody>

          <MypageListTextBtn>
            <p>{item?.item?.price}원</p>
          </MypageListTextBtn>
        </MypageListDivText>
      </MypageListArea>
    </MypageListBox>
  );
};

export default ListContainer;

const MypageListBox = styled.div`
  padding: 0.625rem;
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid gray;
`;

const MypageListArea = styled.div`
  width: 100%;
  height: 19.6875rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin: 0rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 1.25rem;
`;

const MypageListDivImg = styled.div`
  width: 30%;
  height: 85%;
  margin: 0 auto;
  ${(props) => props.theme.FelexCenter};
  > img {
    width: 100%;
    height: 100%;
    border-radius: 0.625rem;
    object-fit: cover;
  }
  :hover {
    transform: scale(0.97);
    transition: 0.5s;
  }
  transform: scale(1);
  transition: 0.5s;
`;

const MypageListDivText = styled.div`
  width: 65%;
  height: 85%;
`;

const MypageListTextTitle = styled.div`
  width: 100%;
  text-align: left;
  > a {
    color: #105796;
    padding-left: 1.25rem;
    font-size: 1rem;
    cursor: pointer;
  }
  > a:hover {
    color: tomato;
    transition: 0.4s;
  }
`;

const MypageListTextStar = styled.div`
  width: 100%;
  height: 10%;
  padding: 0.3125rem;
  > a {
    padding: 0.9375rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
`;
const MypageListTextReview = styled.span`
  padding-left: 0.3125rem;
  font-size: 0.75rem;
  color: #888;
`;

const MypageListTextBody = styled.div`
  widows: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  text-align: left;
  > p {
    padding: 0.9375rem;
    font-size: 0.875rem;
    color: rgb(68, 68, 68);
  }
`;

const MypageListTextBtn = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: right;
  > p {
    display: flex;
    font-size: 1.25rem;
    color: #ec625b;

    margin-top: 5rem;
    cursor: pointer;
  }
  > p:hover {
    transform: scale(1.1);
    transition: 0.4s;
    text-shadow: 0px 0px 4px #ccc, 0px -5px 4px #ff3, 2px -10px 6px #fd3,
      -2px -15px 11px #680, 2px -19px 18px #f20;
  }
`;
