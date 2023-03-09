import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modallogin from "../components/Modallogin";
import { useDispatch, useSelector } from "react-redux";
import { __postRegister } from "../redux/module/signup";
import { useNavigate } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const modal = useSelector((state) => state.modal);
  const siginup = useSelector((state) => state);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeAllCheck(e) {
    setIsCheckAll(e.target.checked);
  }

  const onValid = async (data) => {
    if (isCheckAll) {
      const adminInfo = {
        username: data.id,
        password: data.password,
        nickname: data.nickname,
        email: data.email,
        adminToken: "AAABnvxRVklrnYxKZ0aHgTBcXukeZygoC",
        admin: true,
      };
      dispatch(__postRegister(adminInfo));
      reset();
      navigate("/");
    } else {
      const userInfo = {
        username: data.id,
        password: data.password,
        nickname: data.nickname,
        email: data.email,
        adminToken: "dajfhasdf",
        admin: false,
      };
      dispatch(__postRegister(userInfo));
      reset();
      navigate("/");
    }

    if (isCheckAll && !data.adminPasswd) {
      alert("관리자 비밀번호를 입력해주세요.");
      return;
    }
    if (data.password !== data.passwordCheck) {
      alert("입력하신 2개의 비밀번호가 일치하지 않습니다.");
      return;
    }
  };

  return (
    <>
      <Header />
      {modal ? <Modallogin /> : null}
      <SginupTitleBox>
        <SignupTitle>회원가입</SignupTitle>
      </SginupTitleBox>
      <SignupContainer>
        <SignupBox>
          <SignupForm onSubmit={handleSubmit(onValid)}>
            <SignupInputArea>
              <h4>이름</h4>
              <Signupinput
                {...register("nickname", {
                  required: "이름을 입력해주세요.",
                  maxLength: {
                    value: 10,
                    message: "10글자 이하이어야 합니다.",
                  },
                })}
                type="text"
                placeholder="이름"
              />
            </SignupInputArea>
            <span>{errors?.nickname?.message}</span>
            <SignupInputArea>
              <h4>아이디</h4>
              <Signupinput
                {...register("id", {
                  required: "아이디를 입력해주세요.",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{1,}$/,
                    message: "숫자와 영문자를 적어도 1개 이상 포함해야 합니다.",
                  },
                })}
                type="text"
                placeholder="아이디"
              />
            </SignupInputArea>
            <span>{errors?.id?.message}</span>
            <SignupInputArea>
              <h4>이메일 주소</h4>
              <Signupinput
                {...register("email", {
                  required: "이메일를 입력해주세요.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "이메일 형식만 입력해주세요.",
                  },
                })}
                type="text"
                placeholder="이메일"
              />
            </SignupInputArea>
            <span>{errors?.email?.message}</span>
            <SignupInputArea>
              <h4>비밀번호 입력</h4>
              <Signupinput
                type="password"
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?!.*\s).{8,20}$/,
                    message:
                      "영어 소문자와 숫자, 특수문자 조합의 8-20자로 입력해주세요.",
                  },
                })}
                placeholder="비밀번호"
              />
            </SignupInputArea>
            <span>{errors?.password?.message}</span>
            <SignupInputArea>
              <h4>비밀번호 재입력</h4>
              <Signupinput
                type="password"
                {...register("passwordCheck", {
                  required: "비밀번호를 한번더 입력해주세요.",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?!.*\s).{8,20}$/,
                    message:
                      "영어 소문자와 숫자, 특수문자 조합의 8-20자로 입력해주세요.",
                  },
                })}
                placeholder="비밀번호 확인"
              />
            </SignupInputArea>
            <span>{errors?.passwordCheck?.message}</span>
            <SignupCheckBox>
              <label>
                <input
                  type="checkbox"
                  onClick={(e) => changeAllCheck(e)}
                  defaultChecked={isCheckAll}
                />{" "}
                관리자
              </label>
            </SignupCheckBox>
            {isCheckAll ? (
              <div>
                <h4>관리자 비밀번호</h4>
                <Signupinput
                  type="password"
                  {...register("adminPasswd", {
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?!.*\s).{8,20}$/,
                      message:
                        "영어 소문자와 숫자, 특수문자 조합의 8-20자로 입력해주세요.",
                    },
                  })}
                />
              </div>
            ) : null}
            <span>{errors?.adminPasswd?.message}</span>
            <SignupBtn signupMdBtn>가입완료</SignupBtn>
          </SignupForm>
        </SignupBox>
      </SignupContainer>
      <Footer />
    </>
  );
}

const SignupContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const SignupBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-left: 6.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const SginupTitleBox = styled.div`
  width: 100%;
  height: 4.375rem;
  background-color: #fafafa;
  position: absolute;
`;

const SignupTitle = styled.h2`
  width: 100%;
  margin-left: 3.125rem;
`;

const SignupForm = styled.form`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Signupinput = styled.input`
  height: 2.4375rem;
  width: 43.75rem;
  margin-top: 0.625rem;
  padding-left: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.1875rem;
  font-weight: bold;
  outline: none;
  border: 1px solid black;
  margin-bottom: 1.25rem;
`;

const SignupInputArea = styled.div`
  margin-top: 0.625rem;
`;

const SignupCheckBox = styled.div`
  margin-top: 1.875rem;
`;

const SignupBtn = styled(Button)`
  margin-top: 0.9375rem;
  :hover {
    background-color: #e84545;
    color: white;
  }
`;

export default Signup;
