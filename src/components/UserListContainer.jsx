import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";




// 리스트를 보여줄 컴포넌트
const UserListContainer = (MyCurriculum) => {
  console.log(MyCurriculum?.MyCurriculum)

  const navigate = useNavigate();
  const onClickDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };
  // const { isLoading, error, mycourse } = useSelector((state) => {
  //     return state;
  // });
  // console.log(mycourse)
  // useEffect(() => {
  //     dispatch(__usercurriculum());
  // }, [dispatch]);



  // console.log(mycourse)


  return (
    <>{
      MyCurriculum?.MyCurriculum?.map((item) => {
        return (
          <MypageListBox key={item?.id}>
            <MypageListArea>
              <MypageListDivImg
                onClick={() => {
                  onClickDetailPage(item?.id);
                }}
              >
                <img src={item?.imageUrl} />
              </MypageListDivImg>

              <MypageListDivText>
                <MypageListTextTitle>
                  <a
                    onClick={() => {
                      onClickDetailPage(item?.id);
                    }}
                  >
                    {item?.title}
                  </a>
                </MypageListTextTitle>

                <MypageListTextStar>
                  <a>
                    리뷰<MypageListTextReview>({item?.reviewCnt} 리뷰)</MypageListTextReview>
                  </a>
                </MypageListTextStar>

                <MypageListTextBody>
                  <p> {item?.content}</p>
                </MypageListTextBody>

                <MypageListTextBtn>
                  <p>{item?.price}원</p>
                </MypageListTextBtn>
              </MypageListDivText>
            </MypageListArea>
          </MypageListBox>
        )
      })
    }

    </>
  );
};

export default UserListContainer;

const MypageListBox = styled.div`
  padding: 10px;
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid gray;
`;

const MypageListArea = styled.div`
  width: 100%;
  height: 315px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
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
  /* border: 1px solid red; */
`;

const MypageListTextTitle = styled.div`
  width: 100%;
  text-align: left;
  > a {
    color: #105796;
    padding-left: 1.25rem;
    font-size: 16px;
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
  padding: 5px;
  > a {
    padding: 0.9375rem;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
`;
const MypageListTextReview = styled.span`
  padding-left: 0.3125rem;
  font-size: 12px;
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
    font-size: 14px;
    color: rgb(68, 68, 68);
  }
`;

const MypageListTextBtn = styled.div`
  width: 100%;
  height: 40%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: right;
  > p {
    display: flex;
    font-size: 20px;
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
