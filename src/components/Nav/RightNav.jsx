import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Marginer } from "../marginer";
import { Element, scroller, Link} from "react-scroll";
import 'aos/dist/aos.css';
import './navbar.scss';


// import OurCrew from '../../containers/ourCrewPage/index'

const Ul = styled.ul`
  display: flex;
  flex-direction: row ;
  margin-left: auto;
  margin-right:auto;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ changethecolor }) => changethecolor ? '#1a202c' : '#ffffff'};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0px 0px 21px -8px rgba(0,0,0,0.75);
  }
`;

const RightNav = ({ open, changethecolor }) => {

  const scrollToTopSection = () => {
    scroller.scrollTo("home", { smooth: true, duration: 600 });
  };
  const scrollToServiceSection = () => {
    scroller.scrollTo("services", { smooth: true, duration: 600 });
  };
  const scrollToFooterSection = () => {
    scroller.scrollTo("contact", { smooth: true, duration: 600 });
  };
  const scrollTomoreaboutSection = () => {
    scroller.scrollTo("about", { smooth: true, duration: 600 });
  };




  if (changethecolor) {
    return (
      <Ul open={open} changethecolor={changethecolor} className="ml-auto">
        <Marginer direction="horizontal" margin="8em" />
        <li className="nav-item">
          <a className="nav-link ml-3 text-white" activeClassName="active" href="/#home" onClick={scrollToTopSection}>Home <span className="sr-only">(current)</span></a>
          {/* <a className="nav-link ml-3 text-white" href="home">Home <span className="sr-only">(current)</span></a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3 text-white" activeClassName="active" href="/#services" onClick={scrollToServiceSection}>Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link ml-3 text-white" activeClassName="active" href="/#about" onClick={scrollTomoreaboutSection}>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3 text-white" activeClassName="active" href="/crew">Our Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3 text-white" activeClassName="active" href="/#contact" onClick={scrollToFooterSection}>Contact Us</a>
        </li>
        <Marginer direction="horizontal" margin="8em" />
      </Ul>
    )
  }
  else {
    return (
      <Ul open={open} changethecolor={changethecolor} className="ml-auto">
        <Marginer direction="horizontal" margin="8em" />
        <li className="nav-item">
          <a className="nav-link ml-3 text-black" activeClassName="active" href="/#home" onClick={scrollToTopSection}>Home <span className="sr-only">(current)</span></a>
          {/* <a className="nav-link ml-3 text-black" href="home">Home <span className="sr-only">(current)</span></a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3 text-black" activeClassName="active" href="/#services" onClick={scrollToServiceSection}>Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3 text-black" activeClassName="active" href="/#about" onClick={scrollTomoreaboutSection}>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3 text-black" activeClassName="active" href="/crew">Our Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-3 text-black" activeClassName="active" href="/#contact" onClick={scrollToFooterSection}>Contact Us</a>
        </li>
        <Marginer direction="horizontal" margin="8em" />
      </Ul>
    )
  }
}

export default RightNav
