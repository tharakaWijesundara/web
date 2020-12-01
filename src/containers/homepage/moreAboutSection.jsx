import React, { useEffect } from "react";
import { Element } from "react-scroll";

import { Marginer } from "../../components/marginer";

import "./moreAboutSection.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


export function MoreAboutSection(props) {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, [])

  return (

    <main>
      <Marginer direction="vertical" margin="5em" />
      <section className="pb-20 relative block bg-gray-900">
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
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <Element id="about">
          <div name="about">
            <Marginer direction="vertical" margin="2em" />
            {/* <MoreAboutContainer  className="back-image">
              <SectionTitle1>About <span><SectionTitle2>Us</SectionTitle2></span></SectionTitle1>
              <MDBContainer className="moreAboutRowDiv" size="fluid" id="section_services">
                <Row className="rowElements">
                  <Col>
                    <div className="firstCol">
                      <AboutText>
                        Hexcode labs brings your imagination into reality with our state of the art
                        technological designs and innovations.
                        We, as a tech start-up introduces our portfolio to
                        our customers based on different sectors.{<br />}
                        {<br />}
                        As a corporate entity we believe in sustainable technologies for development,
                        so join with us and witness tailor made technologies just for you.
                  </AboutText>
                  <SubTitle> Vision</SubTitle>
                  <AboutText>Introducing the culture of sustainability through technological development.</AboutText>
                  <SubTitle> Mission</SubTitle>
                  <AboutText>Delivering tailor made technological designs and products that performs efficiently and effectively.</AboutText>
                    </div>         
                  </Col>
                  <Col>
                    
                  </Col>
                </Row>
                {/* <AboutImg src={AboutImgUrl} /> */}
            {/* </MDBContainer> */}
            {/* <AboutContainer>
                <AboutText>
                  Beema is about designing, building and deliverying best quality
                  software for your company. {<br />}
                  {<br />} We make sure that you get the best software inferstracture
                  and set of applications to ensure the best experience of your clients.{" "}
                  {<br />}
                  {<br />} So wether you are handling thousands of payment transactions
                  or you’re just starting out, you are in the right place.
                </AboutText>
                <SubTitle> Vision</SubTitle>
                <AboutText>Introducing the culture of sustainability through technological development.</AboutText>
                <SubTitle> Mission</SubTitle>
                <AboutText>Delivering tailor made technological designs and products that performs efficiently and effectively.</AboutText>
                  </div>

                </Col>
                <Col>
                </Col>

              </Row>

            </MDBContainer>
            {/* <AboutContainer>
              <AboutText>
                Beema is about designing, building and deliverying best quality
                software for your company. {<br />}
                {<br />} We make sure that you get the best software inferstracture
                and set of applications to ensure the best experience of your clients.{" "}
                {<br />}
                {<br />} So wether you are handling thousands of payment transactions
                or you’re just starting out, you are in the right place.
              </AboutText>
              <AboutImg src={AboutImgUrl} />
            </AboutContainer> */}
            {/* </MoreAboutContainer>
                <AboutImg src={AboutImgUrl} />
              </AboutContainer> 
              <Marginer direction="vertical" margin="5em" /> */}
            {/* <Marginer direction="vertical" margin="5em" /> */}
            {/* </MoreAboutContainer> */}

              <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                <div className="flex flex-wrap text-center justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-about">
                      About Us
                    </h2>
                  <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                    Hexcode labs brings your imagination into reality with our state of the art
                    technological designs and innovations.
                    We, as a tech start-up introduces our portfolio to
                          our customers based on different sectors.{<br />}
                    {<br />}
                          As a corporate entity we believe in sustainable technologies for development,
                          so join with us and witness tailor made technologies just for you.
                    </p>
                </div>
              </div>
              <div className="flex flex-wrap mt-12 justify-center">
                <div className="w-full lg:w-3/12 px-4 text-center">
                  <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  <h6 className="text-xl mt-5 font-semibold text-white">
                    Vision
                    </h6>
                  <p className="mt-2 mb-4 text-gray-500">
                    Introducing the culture of sustainability through technological development.
                    </p>
                </div>
                <div className="w-full lg:w-3/12 px-4 text-center">
                  <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-check text-xl"></i>
                  </div>
                  <h5 className="text-xl mt-5 font-semibold text-white">
                    Mission
                    </h5>
                  <p className="mt-2 mb-4 text-gray-500">
                    Delivering tailor made technological designs and products that performs efficiently and effectively.
                    </p>
                </div>
              </div>
            </div>
          </div>
          </Element>
        </section>
        {/* <section className="relative block py-10 lg:pt-0 bg-gray-900">
        <div className="container mx-auto px-4">
            <div className="flex  justify-center lg:-mt-20 ">
              
            </div>
          </div>
        </section> */}
      </main>

  );
}
