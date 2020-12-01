import React, { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";

import "./topSection.css";

import BackgroundImg from "../../assets/pictures/background.jpg";
import { DownArrow } from "../../components/downArrow";
import { Marginer } from "../../components/marginer";
// import { Navbar }  from "../../components/navbar";
import Navbar from "../../components/Nav/Navbar";

import AOS from 'aos';
import 'aos/dist/aos.css';
import {Particle} from "../../components/particles"
import Typing from 'react-typing-animation';

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  display:flex;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.20);
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const DownArrowContainer = styled.div`
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  position: absolute;
`;

const AnimatedTypingComponent = () => (
  <Typing loop>
    <span className="title">Brings Your Imagination Into Reality.</span>
    <Typing.Reset count={1} delay={500} />
  </Typing>
);
export function TopSection(props) {

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, [])

  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 800 });
  };


  

  return (
    <Element>
      <Particle/>
      <TopContainer  className="home">
        <BackgroundFilter>
          <Navbar />
          <h1 className="hexcode">
            HEXCODE<span className="labs">LABS</span>
          </h1>
          <AnimatedTypingComponent loop={true}/>
          {/* <h1 className="title">Brings Your Imagination Into Reality</h1> */}
          <Marginer direction="vertical" margin="2em" />
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
    </TopContainer>
    </Element>
  );
}
