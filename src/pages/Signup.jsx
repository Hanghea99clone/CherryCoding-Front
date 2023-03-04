import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../components/Button";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };

  return (
    <SignupContainer>
      <h2>회원가입</h2>
      <SignupBox>
        <form onSubmit={handleSubmit(onValid)}>
          <div>
            <Modallogininput
              {...register("email", {
                required: "아이디를 입력해주세요.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "이메일 형식만 입력해주세요.",
                },
              })}
              type="text"
            />
          </div>
          <span>{errors?.email?.message}</span>
          <div>
            <Modallogininput
              type="password"
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?!.*\s).{8,20}$/,
                  message:
                    "영어 소문자와 숫자, 특수문자 조합의 8-20자로 입력해주세요.",
                },
              })}
            />
          </div>
          <span>{errors?.password?.message}</span>
          <div>
            <Modallogininput type="passwordCheck" />
          </div>
          <div>
            <label>
              <input type="checkbox" /> 관리자
            </label>
          </div>
          <div>
            <Modallogininput type="password" />
          </div>
          <ModalloginBtn loginMdBtn>로그인</ModalloginBtn>
        </form>
      </SignupBox>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
  //border: 1px solid red;
  height: 100vh;
`;

const SignupBox = styled.div`
  border: 1px solid black;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Modallogininput = styled.input`
  height: 39px;
  margin-top: 10px;
  padding-left: 12px;
  border: none;
  border-radius: 4px;
  font-size: 19px;
  font-weight: bold;
  outline: none;
  border: 1px solid black;
  margin-bottom: 20px;
`;

const ModalloginBtn = styled(Button)`
  margin-top: 15px;
`;

export default Signup;
