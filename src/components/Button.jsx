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
      height: 3.75rem;
      border-radius: 0.625rem;
      color: white;
      font-size: 1.125rem;
      background-color: #ff5353;
    `}

    ${(props) =>
    props.loginMdBtn &&
    css`
      width: 100%;
      height: 3.125rem;
      background-color: #ff5353;
    `}

    ${(props) =>
    props.signupMdBtn &&
    css`
      width: 6.875rem;
      height: 2.5rem;
      border-radius: 0.3125rem;
      border: 1px solid #e84545;
      color: red;
      background-color: white;
    `}
    
    ${(props) =>
    props.loginSignupMdBtn &&
    css`
      width: 100%;
      height: 3.125rem;
      background-color: #4e4e4e;
    `}
`;

export default Btn;
