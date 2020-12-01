import React from "react";
import styled, { css } from "styled-components";

import HexcodeLogo from "../../assets/logo/logo.svg";
import { theme } from "../../theme";
import './logo_index.css';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;
  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
`;

// const LogoText = styled.div`
//   margin-top: ${({ inline }) => (inline ? 0 : "6px")};
//   font-size: ${({ inline, small }) =>
//     inline ? "18px" : small ? "23px" : "40px"};
//   color: ${({ inline }) => (inline ? "#fff" : theme.primary)};
//   font-weight: 900;
// `;

export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={HexcodeLogo} inline={inline} small={small} />
      <h1 className = "LogoText1">HEXCODE<span><h1 className = "LogoText2">LABS</h1></span></h1>
    </LogoContainer>
  );
}
