import React from "react";
import styled, { css } from "styled-components";

const Btn = ({ children, ...props }) => {
  return (
    <>
      <BtnStyle onClick={props.deleteItem} {...props}>
        {children}
      </BtnStyle>
    </>
  );
};

const BtnStyle = styled.button`
  width: 23.4375rem;
  height: 2.4375rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  ${(props) => props.theme.FelexCenter}
  ${(props) =>
    props.smBtn &&
    css`
      width: 11.6875rem;
      height: 2.4375rem;
    `}

    ${(props) =>
    props.mdBtn &&
    css`
      width: 11.6875rem;
      height: 2.4375rem;
    `}

    ${(props) =>
    props.lgBtn &&
    css`
      width: 11.6875rem;
      height: 2.4375rem;
    `}

    ${(props) =>
    props.mainMdBtn &&
    css`
      width: 11.6875rem;
      height: 60px;
      background-color: #ff6464;
    `}

    ${(props) =>
    props.loginMdBtn &&
    css`
      width: 100%;
      height: 50px;
      background-color: #ff6464;
    `}

    ${(props) =>
    props.signupMdBtn &&
    css`
      width: 100%;
      height: 50px;
      background-color: #64a8c6;
    `}
`;

export default Btn;
