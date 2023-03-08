import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { __postLecture } from "../redux/module/registration";
import Aboutmymodal from "../components/Aboutmymodal";
import { myModal } from "../redux/module/mymodal";
import { __getCurriculumList } from "../redux/module/getcurriculum";
import codingcherrylogo from "../asset/codingcherrylogo.png";

function Registration() {
  const [formImagin, setFormformImagin] = useState(new FormData());
  const [preview, setPreview] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const isAdmin = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin?.isAdmin) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    dispatch(myModal(false));
  }, [dispatch]);

  function onChangeimge(e) {
    const img = e.target.files[0];
    const formImg = new FormData();
    formImg.append("multipartFile", img);
    const reader = new FileReader();
    setFormformImagin(formImg);
    reader.onloadend = () => {
      setPreview(reader.result);
    };

    if (img) {
      reader.readAsDataURL(img);
    } else {
      setPreview("");
    }
  }

  const onValid = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.body);
    formData.append("price", data.price);
    for (const keyValue of formImagin) {
      formData.append(keyValue[0], keyValue[1]);
    }
    await dispatch(__postLecture(formData));
    await dispatch(__getCurriculumList());
    navigate("/");
  };
  const mymodal = useSelector((state) => state.mymodal);

  return (
    <SignupContainer>
      <Header />
      {mymodal ? <Aboutmymodal /> : null}

      {/* <RegistrationTitle>게시물 등록</RegistrationTitle> */}
      <SignupBox>
        <BoxLogoArea><img src={codingcherrylogo} /> <p style={{ fontSize: "1rem" }}>강의 등록 !</p></BoxLogoArea>

        <SignupForm onSubmit={handleSubmit(onValid)}>

          <FormImgArea>
            {preview && (
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={preview}
                  alt="Preview"
                />
              </div>
            )}
            <div>
              <RegiinputFile
                as={"input"}
                type="file"
                accept="image/*"
                onChange={onChangeimge}
              />
            </div>
          </FormImgArea>

          <div>
            <Regiinput
              style={{ marginTop: "40px" }}
              type="text"
              {...register("title", {
                required: "제목을 입력해주세요.",
              })}
              placeholder="게시물 제목"
            />
          </div>
          <span>{errors?.title?.message}</span>
          <div>
            <Regiinput
              type="number"
              {...register("price", {
                required: "가격을 입력해주세요.",
                pattern: {
                  value: /^\d+$/,
                  message: "숫자만 입력가능합니다.",
                },
              })}
              placeholder="가격"
            />
          </div>
          <span>{errors?.price?.message}</span>
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
    </SignupContainer >
  );
}

const SignupContainer = styled.div`
  //border: 1px solid red;
  height: 100vh;
`;

const SignupBox = styled.div`
  width: 60%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #f1f3f5;
  border-radius: .9375rem;
`;

const BoxLogoArea = styled.div`
  width: 100%;
  height: 4.375rem;
  display: flex;
  align-items: center;
  > img {
    padding-left: 3.125rem;
    width: 20%;
  }
`;

const SignupForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormImgArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem 2.5rem;
  > div {
    width: 50%;
    height: 100%;
  
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .625rem;
  }

`



const Regiinput = styled.input`
  height: 1.875rem;
  margin-top: .625rem;
  padding-left: .75rem;
  border: none;
  border-radius: .25rem;
  font-size: 1.2rem;
  font-weight: bold;
  outline: none;
  border: 1px solid black;
  margin-top: 1.25rem;
`;

const RegiTextarea = styled(Regiinput)`
  width: 25rem;
  height: 15.625rem;
  margin-top: .625rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.1875rem;
  font-weight: bold;
  outline: none;
  border: 1px solid black;
  margin-bottom: 1.25rem;
  resize: none;
  padding: 1.25rem;
  
`;

const RegistrationTitle = styled.h2`
  margin-left: 3.125rem;
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
