import { css } from "styled-components";

export const defaultthem = {
  bgColor: "whitesmoke",
  textColor: "#393E46",
  accentColor: "#00a8ff",
  borderColor: "#1B262C",
  hoverColor: "#3D84A8",
};

export const FlexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FlexRowBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FlexCol = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
