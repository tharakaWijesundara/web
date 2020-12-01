import React from "react";
import styled from "styled-components";
import Description from './description';
import Members from './members';
import Navbar from "../../components/Nav/Navbar";
import { Footer } from "../../components/footer";
import { Particle } from "../../components/particles";

const PageContainer = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: auto;
  padding: 0;
  overflow:hidden;
`;

export default function OurCrewPage(props) {
  return (
    <PageContainer>
      <Particle team />
      <Navbar beginColorBlack />

      <Description />

      <Members />

      <Footer />
    </PageContainer>
  );
}
