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

  const onValid = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.body);
    formData.append("price", data.price);
    for (const keyValue of formImagin) {
      formData.append(keyValue[0], keyValue[1]);
    }
    dispatch(__postLecture(formData));
  };
  const mymodal = useSelector((state) => state.mymodal);

  return (
    <SignupContainer>
      <Header />
      {mymodal ? <Aboutmymodal /> : null}
      <h2>게시물 등록</h2>
      <SignupBox>
        {preview && (
          <img
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "20px",
              marginBottom: "40px",
            }}
            src={preview}
            alt="Preview"
          />
        )}
        <SignupForm onSubmit={handleSubmit(onValid)}>
          <RegiinputFile
            as={"input"}
            type="file"
            accept="image/*"
            onChange={onChangeimge}
          />
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
            <Regiinput
              type="text"
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
