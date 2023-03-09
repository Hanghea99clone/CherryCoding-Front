import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toggle } from "../redux/module/login";
import Button from "./Button";
import { __postLogin } from "../redux/module/postLogin";

function Modallogin() {
  const modal = useSelector((state) => state.modal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    const loginInfo = {
      username: data.id,
      password: data.password,
    };
    dispatch(__postLogin(loginInfo));
  };

  const modalOpenClose = () => {
    dispatch(toggle(!modal));
  };

  return (
    <Modalblack>
      <Modalback>
        <div>
          <ModalloginTextArea>
            <span>로그인</span>
            <Modalloginclose onClick={modalOpenClose}>닫기</Modalloginclose>
          </ModalloginTextArea>
          <ModalloginInputBox>
            <ModalloginForm onSubmit={handleSubmit(onValid)}>
              <div>
                <Modallogininput
                  {...register("id", { required: "아이디를 입력해주세요." })}
                  placeholder="아이디"
                />
              </div>
              <span>{errors?.id?.message}</span>
              <Modallogininput
                {...register("password", {
                  required: "비밀번호를 입력해주세요",
                })}
                placeholder="비밀번호"
                type="password"
              />
              <span>{errors?.password?.message}</span>
              <ModalloginBtn loginMdBtn>로그인</ModalloginBtn>
              <Button onClick={() => navigate(`/signup`)} loginSignupMdBtn>
                회원가입
              </Button>
            </ModalloginForm>
          </ModalloginInputBox>
        </div>
      </Modalback>
    </Modalblack>
  );
}

const Modalblack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

const Modalback = styled.div`
  width: 23.75rem;
  height: 23.75rem;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
`;

const ModalloginTextArea = styled.div`
  //border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  margin-top: 1.25rem;
  padding: 1.25rem;
`;

const Modalloginclose = styled.span`
  cursor: pointer;
  font-size: 0.9375rem;
`;

const ModalloginInputBox = styled.div`
  margin-top: 1.5625rem;
  width: 100%;
`;

const Modallogininput = styled.input`
  height: 2.4375rem;
  margin-top: 0.625rem;
  padding-left: 0.75rem;
  border: none;
  font-size: 1.1875rem;
  font-weight: bold;
  outline: none;
  border-bottom: 0.0625rem solid black;
  margin-bottom: 1.25rem;
  width: 18.75rem;
  :focus {
    border-bottom: 0.0625rem solid #64a8c6;
  }
`;

const ModalloginForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ModalloginBtn = styled(Button)`
  margin-top: 2rem;
`;

export default Modallogin;
