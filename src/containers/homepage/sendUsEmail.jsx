import React,{useEffect} from "react";
import { Element } from "react-scroll";
import styled from "styled-components";


import AOS from 'aos';
import 'aos/dist/aos.css';

const sendUsontainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function SendEmailSection(props) {

  useEffect(() => {
    AOS.init({duration:2000, once: true});
  }, [])
  
  return (
    <>
        <main>
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
              viewBox="0 0 2560 500"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
       

        </main>
    </>
  );
}
