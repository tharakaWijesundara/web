import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

import './cardIndex.css'

const CardContainer = styled.div`
  width: 350px;
  height: 400px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 3px;
  margin: 20px 20px;
  position: relative;
  padding:0px 1.2em;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 13px;
  left: 17px;
  color: #525252;
  font-size: 30px;
`;

const ReviewText = styled.p`
  font-size: 17px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
  font-family: 'FreeSans';
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;

const TitleText = styled.h1`
display: flex;
justify-content: center;
font-family: 'FreeSans';
font-size: 40px;
font-weight: 800;
line-height: 1.4;
color: #DD038F;
margin: 0;
text-align: center;
`
  ;

export function ReviewCard(props) {
  const {marginImage, image, title, reviewText, marginLine } = props;

  return (
    <CardContainer>
      <QuoteIcon>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </QuoteIcon>
      <Marginer direction="vertical" margin="2em" />
      <TitleText>{title}</TitleText>
      <Marginer direction="vertical" margin="1em" />
      <ReviewText>{reviewText}</ReviewText>
      <Marginer direction="vertical" margin={marginImage} />
      <div className="cardImageDiv" >
        <img src={image} />
      </div>
      {/* <img className="reviewCardImage" src={image} /> */}
      <Marginer direction="vertical" margin="2em" />
      <Marginer direction="vertical" margin={marginLine} />
      <Line />
    </CardContainer>
  );
}
