import React from "react";
import styled, { css } from "styled-components";


const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  margin-left: auto;
  margin-right:auto;
  align-items: center;
  margin-top: 10px;
`;
const LogoImg = styled.img`
  width: 18em;
  height: 18em;
  ${({ inline }) =>
    inline &&
    css`
      width: 54px;
      height: 54px;
      margin-right: 16px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
`;

const LogoText1 = styled.div`
  margin-top: ${({ inline }) => (inline ? 5 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "20px" : small ? "23px" : "40px"};
  color: ${({ changethecolor }) => (!changethecolor ? "#fff" :"#460c5e")};
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  
`;

const LogoText2 = styled.div`
  margin-top: ${({ inline }) => (inline ? 5 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "20px" : small ? "23px" : "40px"};
  color: ${({ changethecolor }) => (!changethecolor ? "#fff" : "#DD038F")};
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  
`;

export function Headertext(props) {
  const { inline, changethecolor, small} = props;
  console.log(changethecolor);
  return (
    <LogoContainer inline={inline} changethecolor={changethecolor} small={small} className="ml-auto">  
      <LogoText1 inline={inline} changethecolor={changethecolor} small={small}>
        HEXCODE
      </LogoText1>
      <LogoText2 inline={inline} changethecolor={changethecolor} small={small}>
        LABS
      </LogoText2>
    </LogoContainer>
  );
}
