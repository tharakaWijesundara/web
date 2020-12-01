import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { MDBContainer } from "mdbreact";
import { Row, Col } from "reactstrap";

import './footer_index.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const FooterContainer = styled.div`
  width: 100%;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  position: relative;
`;

const MotivationalText = styled.h1`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: #adadad;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReserved = styled.div`
  bottom: 8px;
  left: 50%;
  color: #1a202c;
  font-size: 12px;
  margin-top:30px;
  margin-bottom:20px;
  font-family: 'FreeSans';
`;

export function Footer(props) {
  const scrollToTopSection = () => {
    scroller.scrollTo("home", { smooth: true, duration: 800 });
  };
  const scrollToServiceSection = () => {
    scroller.scrollTo("services", { smooth: true, duration: 800 });
  };
  const scrollToReviewSection = () => {
    scroller.scrollTo("reviews", { smooth: true, duration: 800 });
  };
  const scrollTomoreaboutSection = () => {
    scroller.scrollTo("about", { smooth: true, duration: 800 });
  };
  return (
    <Element id="contact">
      <main name="contact">
        <section className="pb-20 relative block bg-gray-200">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div>
            <Marginer direction="vertical" margin="5em" />
            <MDBContainer className="footerRowDiv" size="fluid" id="section_services">
              <Row className="footerRowElements">
              <Marginer direction="horizontal" margin="2em" />
                <div className="footerFirstCol">
                  <Col>
                    <Logo small />
                    <Marginer direction="vertical" margin="1em" />
                    <p className="bottomTextLogo"> Brings your imagination into reality.
                  </p>
                  </Col>
                </div>
                <Marginer direction="horizontal" margin="2em" />
                <div className="footerFirstCol">
                  <Col>
                    <Marginer direction="vertical" margin="1em" />
                    <h1 className="navigateTo">Navigate to</h1>
                    <Marginer direction="vertical" margin="1em" />
                    <p className="links"><a href="/#home" onClick={scrollToTopSection}>Home</a> </p>
                    <p className="links"><a href="/#services" onClick={scrollToServiceSection}>Services</a>   </p>
                    <p className="links"><a href="/#about" onClick={scrollTomoreaboutSection}>About Us</a>   </p>
                    <p className="links"><a href="/crew">Our Crew</a>   </p>
                  </Col>
                </div>
                
                <Marginer direction="horizontal" margin="2em" />
                <div className="footerFirstCol">
                  <Col>
                    <Marginer direction="vertical" margin="1em" />
                    <h1 className="navigateTo">Keep in touch</h1>
                    <Marginer direction="vertical" margin="1em" />
                    <p><a className="links" href="https://www.linkedin.com/company/hexcode-labs/"> Linked In </a></p>
                    <p><a className="links" href="https://www.facebook.com/hexcode.labs"> Facebook </a></p>
                    <p><a className="links" href="https://www.instagram.com/hexcode.labs/"> Instagram </a></p>
                  </Col>
                </div>
                <Marginer direction="horizontal" margin="2em" />
                <div className="footerFirstCol">
                  <Col>
                    <Marginer direction="vertical" margin="1em" />
                    <h1 className="navigateTo">Contact Us</h1>
                    <Marginer direction="vertical" margin="1em" />
                    <p className="links">Gmail : <span><p className="contacts">info@hexcodelabs.lk</p></span></p>
                    <p className="links">Call us : <span><p className="contacts">Rashan - +94 (70) 398 3529</p></span></p>
                  </Col>
                </div>
                <Marginer direction="horizontal" margin="2em" />

              </Row>
            </MDBContainer>
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <Marginer direction="vertical" margin="5em" />
                <div className="text-sm text-gray-600 font-semibold py-1">
                  &copy; 2020 Hexcode Labs All rights reserved.
              </div>
              </div>
            </div>

            {/* <Logo small />
        <Marginer direction="vertical" margin="1em" />
        <MotivationalText>Just say the magical word</MotivationalText>
        <MotivationalText>and we will do the rest</MotivationalText>
        <Marginer direction="vertical" margin="1em" />
        <Marginer direction="vertical" margin="5em" /> */}

          </div>
        </section>
      </main>
    </Element>
  );
}
{/* <AccessibilityContainer>
<SocialContainer>
  <SocialIcon>
    <FontAwesomeIcon icon={faTwitter} />
  </SocialIcon>
  <SocialIcon>
    <FontAwesomeIcon icon={faLinkedin} />
  </SocialIcon>
</SocialContainer>
</AccessibilityContainer> */}
