import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Registration() {
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
      <Header />
      <h2>게시물 등록</h2>
      <SignupBox>
        <SignupForm onSubmit={handleSubmit(onValid)}>
          <RegiinputFile as={"input"} type="file" />
          <div>
            <Regiinput
              type="text"
              {...register("title", {
                required: "제목을 입력해주세요.",
              })}
              placeholder="게시물 제목"
            />
          </div>
          <span>{errors?.title?.message}</span>
          <div>
            <RegiTextarea
              as={"textarea"}
              type="text"
              {...register("body", {
                required: "내용을 입력해주세요",
                minLength: {
                  value: 20,
                  message: "20자 이상 작성해주세요.",
                },
              })}
              placeholder="게시물 내용"
            />
          </div>
          <span>{errors?.body?.message}</span>
          <SignupBtn signupMdBtn>게시물 등록</SignupBtn>
        </SignupForm>
      </SignupBox>
      <Footer />
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
  //border: 1px solid red;
  height: 100vh;
`;

const SignupBox = styled.div`
  //border: 1px solid black;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.form`
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Regiinput = styled.input`
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

const RegiTextarea = styled(Regiinput)`
  width: 400px;
  height: 300px;
  margin-top: 10px;
  padding-left: 12px;
  border: none;
  border-radius: 4px;
  font-size: 19px;
  font-weight: bold;
  outline: none;
  border: 1px solid black;
  margin-bottom: 20px;
  resize: none;
`;

const RegiinputFile = styled(Regiinput)`
  border: none;
  width: 300px;
  ::file-selector-button {
    width: 150px;
    height: 30px;
    background: #fff;
    border: 1px solid rgb(77, 77, 77);
    border-radius: 10px;
    cursor: pointer;
  }
`;

const SignupBtn = styled(Button)`
  margin-top: 15px;
`;

export default Registration;
