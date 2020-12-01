import React from "react";
import styled from "styled-components";

import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { ReviewsSection } from "./reviewsSection";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";
import { SendEmailSection } from "./sendUsEmail";
import Particles from 'react-particles-js';


import "./topSection.css";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;


export default function Homepage(props) {

  return (

    <PageContainer>
      <TopSection/>
      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
      <ReviewsSection />
      <Marginer direction="vertical" margin="2em" />
      <MoreAboutSection />
      <Footer />
    </PageContainer>
  );
}

