import React, { useState } from 'react';
import styled from 'styled-components';
import Bsymbol from '../../subComponents/Bsymbol';
import Menu from '../Menu/Menu';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import {
  Container, MenuBox, MenuLine,
  Nav, NavOl, NavLi, SubContainer
} from './StyledHeader';

function Header() {
  const [wasClicked, setWasClicked] = useState(false);
  const [isActive, setIsActive] = useState([false, false, false, false, false]);

  function handleMenuClick() {
    setWasClicked(!wasClicked)
  }

  function handleSetActive(n) {
    const newState = isActive.map((e, i) => i === n ? true : e);
    setIsActive(newState);
  }

  function handleSetInactive(n) {
    const newState = isActive.map((e, i) => i === n ? false : e);
    setIsActive(newState);
  }

  return (
    <Container
      animate={{
        y: 0,
      }}
      initial={{
        y: '-10vh'
      }}
      transition={{
        duration: 1
      }}
    >
      <SubContainer>
        <Bsymbol/>

        <MenuBox onClick={ handleMenuClick }>
          <MenuLine wasClicked={ wasClicked } position={'top'} />
          <MenuLine wasClicked={ wasClicked } position={'middle'}/>
          <MenuLine wasClicked={ wasClicked } position={'bottom'}/>
        </MenuBox>

        <Nav>
        <NavOl>
          <NavLi

            n={0} isActive={ isActive }>
              <Link onSetActive={ () => handleSetActive(0) } onSetInactive={ () => handleSetInactive(0) } activeClass="active" spy={true} smooth={true} offset={-130} duration={500} to="Home">Home</Link>
            </NavLi>
            <NavLi
            n={1} isActive={ isActive }>
              <Link onSetActive={ () => handleSetActive(1) } onSetInactive={ () => handleSetInactive(1) } activeClass="active" spy={true} smooth={true} offset={-130} duration={500} to="About">About</Link>
            </NavLi>
            <NavLi
             n={2} isActive={ isActive }>
              <Link onSetActive={ () => handleSetActive(2) } onSetInactive={ () => handleSetInactive(2) } activeClass="active" spy={true} smooth={true} offset={-130} duration={500} to="TechStack">Tech Stack</Link>
            </NavLi>
            <NavLi
             n={3} isActive={ isActive }>
              <Link onSetActive={ () => handleSetActive(3) } onSetInactive={ () => handleSetInactive(3) }  activeClass="active" spy={true} smooth={true} offset={-130} duration={500} to="Work">Work</Link>
            </NavLi>
            <NavLi
             n={4} isActive={ isActive }>
              <Link onSetActive={ () => handleSetActive(4) } onSetInactive={ () => handleSetInactive(4) } activeClass="active" spy={true} smooth={true} offset={-130} duration={500} to="Contact">Contact</Link>
            </NavLi>
          </NavOl>
        </Nav>

        <Menu handleMenuClick={ handleMenuClick } wasClicked={ wasClicked } />
      </SubContainer>
    </Container>
  )
}

export default Header;
