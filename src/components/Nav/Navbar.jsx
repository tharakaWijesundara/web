import React,{useEffect} from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import {Headertext} from "../header-text/index";
import { Marginer } from "../marginer";
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  width: 100%;
  height: 5px;
  display: flex;
`

const Navbar = (props) => {
  const {beginColorBlack} = props;
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
    });

    let ourCrewHeader = false;
    if(beginColorBlack){
      ourCrewHeader = true;
    }
    
    let navbarClasses;
    if(scrolled){
      navbarClasses='scrolled fixed-top navbar-expand-lg    ';     
    }
    else{
      navbarClasses='navbar fixed-top navbar-expand-lg   ';  
    }
    if(colorchange || ourCrewHeader){
      return (
        <Nav className="container-fluid" >
            <div className={navbarClasses}>
                <Headertext inline changethecolor/>
                <Burger />
            </div>
            
        </Nav>
      );
    }
    else{
        return (
          <Nav className="container-fluid">
            <div className={navbarClasses}>
              <Headertext inline/>
              <Burger changethecolor/>
            </div>
          </Nav>
      );
    }
}

export default Navbar
