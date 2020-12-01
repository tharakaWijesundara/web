const { default: styled } = require("styled-components");

export const SectionTitle1 = styled.h1`
  font-family: 'FreeSans';
  color: #460c5e;
  font-size: 55px;
  font-weight: bold;
  display: inline-block;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
export const SectionTitle2 = styled.h1`
font-family: 'FreeSans';
  color: #DD038F;
  font-size: 55px;
  font-weight: bold;
  display: inline-block;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
