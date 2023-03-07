import React from "react";
import styled from "styled-components";
import { FaLock } from "react-icons/fa";
import Button from "../Button";
import { useForm } from "react-hook-form";

function MyinfoEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  function onSubmitvalue(data) {
    console.log(data);
    reset();
  }

  return (
    <MypageMyinfoEditContainer>
      <MypageMyinfoEditBox>
        <h2>내 정보 수정</h2>
        <MypageMyinfoEditArea onSubmit={handleSubmit(onSubmitvalue)}>
          <MypageMyinfoEditInputArea>
            <input
              {...register("password", {
                required: "비밀번호를 꼭 입력해주세요.",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{1,}$/,
                  message: "숫자와 영문자를 적어도 1개 이상 포함해야 합니다.",
                },
              })}
              type="password"
            />
            <label>현재패스워드 입력</label>
            <div>
              <FaLock />
            </div>
          </MypageMyinfoEditInputArea>
          <span>{errors?.password?.message}</span>

          <MypageMyinfoEditInputArea>
            <input type="text" />
            <label>현재 이메일</label>
            <div>
              <FaLock />
            </div>
          </MypageMyinfoEditInputArea>

          <MypageMyinfoEditInputArea>
            <input type="password" />
            <label>새 비밀번호</label>
            <div>
              <FaLock />
            </div>
          </MypageMyinfoEditInputArea>

          <MypageMyinfoEditInputArea>
            <input type="password" />
            <label>새 비밀번호 재입력</label>
            <div>
              <FaLock />
            </div>
          </MypageMyinfoEditInputArea>

          <MypageMyinfoEditButtonArea>
            <Button smBtn>수정하기</Button>
          </MypageMyinfoEditButtonArea>
        </MypageMyinfoEditArea>
      </MypageMyinfoEditBox>
    </MypageMyinfoEditContainer>
  );
}

export default MyinfoEdit;

const MypageMyinfoEditContainer = styled.div`
  width: 100%;
  height: 45rem;
  border-top: 1px solid gray;
  margin: 6.25rem 1.25rem;
`;

const MypageMyinfoEditBox = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 1.875rem 0;

  > h2 {
    padding: 10px;
    font-size: 25px;
    text-align: center;
  }
`;

const MypageMyinfoEditArea = styled.form`
  width: 85%;
  height: 80%;
  margin-left: 1.875rem;
  ${(props) => props.theme.FelexCenter};
  flex-direction: column;
`;

const MypageMyinfoEditInputArea = styled.div`
  position: relative;
  margin: 20px 0;
  width: 19.375rem;
  height: 12.5rem;
  ${(props) => props.theme.FelexCenter};
  > label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    pointer-events: none;
    font-weight: 700;
    transition: all 0.25s ease-in-out;
  }
  > input {
    width: 100%;
    height: 50px;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: #000;
    padding-left: 1.25rem;
    border-radius: 0.625rem;
    font-weight: 500;
    outline: none;
    border: 1px solid gray;
  }
  > input:focus ~ label {
    top: -5px;
  }
  > input:valid ~ label {
    top: -5px;
  }
  > div {
    position: absolute;
    right: 10px;
    font-size: 1.2em;
    top: 20px;
  }
`;

const MypageMyinfoEditButtonArea = styled.div`
  ${(props) => props.theme.FelexCenter};
`;
