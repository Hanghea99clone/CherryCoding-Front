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
`;

export default Btn;
