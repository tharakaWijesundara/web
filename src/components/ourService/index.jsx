import React from "react";
import styled from "styled-components/macro";
import './ourServiceIndex.css'
const ServiceContainer = styled.div`
  display: flex;
  // align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 1em;
  flex-wrap: wrap-reverse;
  // background-color:blue;
  justify-content: center;
  // @media screen and (max-width: 480px) {
  //   justify-content: center;
  // }
`;

const ServiceImg = styled.img`
margin-top:4em;
  width: 25em;
  height: 20em;
  @media screen and (max-width: 480px) {
    width: 14em;
    height: 12em;
  }
  // @media screen and (max-width: 600px) {
  //   margin-left:1em;
  //   margin-right:1em;
  // }
`;

const DescriptionContainer = styled.div`
  padding-top : 5em;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  //max-width: 60%;
  // background-color:yellow;
  // @media screen and (max-width: 600px) {
  //   margin-left:1em;
  //   margin-right:1em;
  // }

  @media screen and (max-width: 480px) {
    //max-width: 100%;
    max-width: 480px;
  }
`;

const Title = styled.h2`
font-family: 'FreeSans';
  color: #000;
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;

  @media screen and (max-width: 480px) {
    margin-top: 1.5em;
  }
`;

const Details = styled.p`
font-family: 'FreeSans';
  color: #7a7a7a;
  font-size: 21px;
  text-align: center;
  max-width: 55%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Hexcode= styled.h1`

font-family: 'Rubik', sans-serif;
  font-size: 25px;
  font-weight: bold;
  line-height: 1.4;
  color: #460c5e;
  margin-top:5px;
  display: inline-block;
  /* margin-bottom: 5px; */

      /* @media screen and (max-width: 480px) {
        max-width: 100%;
        flex-direction: column-reverse;
      } */
}
`;

const Sub= styled.h1`
font-family: 'Rubik', sans-serif;
  font-size: 25px;
  font-weight: normal;
  line-height: 1.4;
  margin-top:5px;
  color: #DD038F;
  display: inline-block;
  /* margin-bottom: 5px; */
}`;






export function OurSerivce(props) {
  const { imgUrl, title, description, isReversed, sub } = props;

  return (
    <div className="ourServiceTopContainer">
      <ServiceContainer isReversed={isReversed}>
      <ServiceImg src={imgUrl} />

        <DescriptionContainer>
          <Title>{title}</Title>
          <Details>{description}</Details>
          <Hexcode>HEXCODE<span><Sub>{sub}</Sub></span></Hexcode>
        </DescriptionContainer>
        
      </ServiceContainer>
    </div>
  );
}
