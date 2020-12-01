import React, { useEffect } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle1, SectionTitle2 } from "../../components/sectionTitle";

import web from "../../assets/illustrations/web.svg";
import Robo from "../../assets/illustrations/robo.svg";
import Mobile from "../../assets/illustrations/mobile.svg";
import ml from "../../assets/illustrations/ml.svg";
import pcb from "../../assets/illustrations/pcb.svg";
import modeling from "../../assets/illustrations/3d.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';

import './serviceSection.css'

const ServicesContainer = styled.div`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  // @media screen and (min-width: 500px) {
  //   //max-width: 200px;
  //   flex-direction: column-reverse;
  // }
`;



export function ServicesSection(props) {

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
      // offset: 200
    });
  }, [])

  return (
    <Element id="services">
      <ServicesContainer name="servicesSection">
        <Marginer direction="vertical" margin="8em" />
        <SectionTitle1>Our <span><SectionTitle2>Services</SectionTitle2></span></SectionTitle1>
        <Marginer direction="vertical" margin="3em" />
        <div className="ourServiceDiv" data-aos="fade-up">
          <OurSerivce

            title="Mobile application development"
            description="We undertake design and development of mobile 
            applications to suit your business and personal requirements based on both Android and IOS platforms."
            imgUrl={Mobile}
            sub={"SOFTWARE"}
          />
        </div>
        <div className="ourServiceDiv" data-aos="fade-up">
          <OurSerivce
            title="Web application development"
            description="Interactive website development to convey your ideas to the cyber community."
            imgUrl={web}
            isReversed
            sub={"SOFTWARE"}
          />
        </div>
        <div className="ourServiceDiv" data-aos="fade-up">
          <OurSerivce
            title="Machine Learning"
            description="Our expertise in machine learning will bring your complex 
            task to the ground level with custom made designs."
            imgUrl={ml}
            sub={"AI"}
          />
        </div>
        <div className="ourServiceDiv" data-aos="fade-up">
          <OurSerivce
            title="Robotics, Automation and Embedded systems"
            description="We undertake robotics, automation and embedded systems design and development for
            industrial environments and all other IoT related fields."
            imgUrl={Robo}
            sub={"ELECTRONICS"}
            isReversed
          />
        </div>
        <div className="ourServiceDiv" data-aos="fade-up">
          <OurSerivce
            title="PCB designing and prototyping"
            description="Tailor made PCB designs from single layer to multi layer with 
            prototyping options are carried out by our electronics team."
            sub={"ELECTRONICS"}
            imgUrl={pcb}
          />
        </div>
        <div className="ourServiceDiv" data-aos="fade-up">
          <OurSerivce
            title="3D modeling and designing"
            description="3D modeling of robotics designs, mechanical designs.. etc are done with 
            precision and extraordinay finishing to meet your 3D printing requirements."
            imgUrl={modeling}
            sub={"DESIGN"}
            isReversed
          />
        </div>

      </ServicesContainer>
    </Element>
  );
}
