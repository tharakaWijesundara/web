import React ,{useEffect}from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle1, SectionTitle2 } from "../../components/sectionTitle";

import team from "../../assets/pictures/team.svg";
import philosophy from "../../assets/pictures/philosophy.svg";
import customers from "../../assets/pictures/customers.svg";

import { MDBContainer } from "mdbreact"

import "pure-react-carousel/dist/react-carousel.es.css";

import { Row } from "reactstrap";

import './reviewSection.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ReviewsContainer = styled.div`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
`;



export function ReviewsSection(props) {
  useEffect(() => {
    AOS.init({duration:2000, once: true});
  }, [])
  return (
    <ReviewsContainer name="reviews">
      <Marginer direction="vertical" margin="8em" />
      <SectionTitle1>What defines <span><SectionTitle2>Us</SectionTitle2></span></SectionTitle1>
      <Marginer direction="vertical" margin="3em" />


      <MDBContainer className="cardsRowDiv" size="fluid" id="review_section_services">
        <Row className="reviewRowElements">
          <ReviewCard
            image={team}
            marginLine="0em"
            marginImage="0em"
            title="Team"
            reviewText="Our team consists of individuals who are full time engaged in relevant fields with great technical expertise. Variety is our key to innovation."
          />

          <ReviewCard
            image={philosophy}
            marginLine="1em"
            marginImage="2em"
            title="Philosophy"
            reviewText="We believe in tailor made designs that deliver ease of application "
          />


          <ReviewCard
            image={customers}
            marginLine="0em"
            marginImage="0em"
            title="Customers"
            reviewText="We are a tech start-up that focuses on global customer base with a large variety. So we take your global identity beyond imagination."
          />
        </Row>
      </MDBContainer>
    </ReviewsContainer>
  );
}
