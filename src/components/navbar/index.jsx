//Navbar.js
import React,{useEffect} from 'react';
import styled from "styled-components";
import './navbar.scss';
import { Button } from "../button";
import {Headertext} from "../header-text/index";


export function Navbar(props) {
  const [scrolled,setScrolled]=React.useState(false);
  const [colorchange,setColorchange]=React.useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 100 ){
        setScrolled(true);
        setColorchange(true);
      }
      else{
        setScrolled(false);
        setColorchange(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })

    let navbarClasses;
    if(scrolled){
      navbarClasses='scrolled fixed-top navbar-expand-lg navbar-light   ';     
    }
    else{
      navbarClasses='navbar sticky-top navbar-expand-lg navbar-light  ';  
    }
    
    if(colorchange){
      return (
            <div className={navbarClasses}>
                <a className="navbar-brand ml-5" href="#">
                {/* <img src={logo_cropped} alt="logo" class="d-inline-block align-top" width = "170" height = "70"/> */}
                  <Headertext inline changethecolor/>
                </a>
                <div className="collapse navbar-collapse " id="navbarSupportedContent" id = "section_navBar">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <a className="nav-link ml-3 text-black" href="home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3 text-black" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3 text-black" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3 text-black" href="#">Our Crew</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3 text-black" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
      );
    }
    else{
        return (
          <div className={navbarClasses}>
                <a className="navbar-brand ml-5" href="#">
                {/* <img src={logo_cropped} alt="logo" class="d-inline-block align-top" width = "170" height = "70"/> */}
                  <Headertext inline/>
                </a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent" id = "section_navBar">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <a className="nav-link ml-3 text-white" href="home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3 text-white" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3 text-white" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3 text-white" href="#">Our Crew</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3 text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
      );
    }
}

