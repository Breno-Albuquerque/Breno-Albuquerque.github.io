import React, { useState } from 'react';
import Bsymbol from '../../subComponents/Bsymbol';
import Menu from '../Menu/Menu';
import { Link } from 'react-scroll';

import {
  Container, MenuBox, MenuLine,
  Nav, NavOl, NavLi, SubContainer
} from './StyledHeader';

import { containerVariants } from './framerHeader';

const links = ['Home', 'About', "Tech Stack", "Work", 'Contact'];

function Header({setWasClicked, wasClicked}) {

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
      variants={ containerVariants }
      animate="animate"
      initial="initial"
    >
      <SubContainer>
        <Bsymbol/>
        <MenuBox
          onClick={ handleMenuClick }>
          <MenuLine
            wasClicked={ wasClicked }
            position={'top'}
          />
          <MenuLine
            wasClicked={ wasClicked }
            position={'middle'}
          />
          <MenuLine
            wasClicked={ wasClicked }
            position={'bottom'}
          />
        </MenuBox>

        <Nav>
          <NavOl>
            { links.map((link, index) => {
              return (
                <NavLi whileHover={{ scale: 1.1 }} n={ index } isActive={ isActive } key={index }>
                  <Link
                    onSetActive={ () => handleSetActive(index) }
                    onSetInactive={ () => handleSetInactive(index) }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                    to={ link === 'Tech Stack' ? 'TechStack' : link }
                  >
                    { link }
                  </Link>
               </NavLi>
              )
            }) }
          </NavOl>
        </Nav>

        <Menu
          handleMenuClick={ handleMenuClick }
          wasClicked={ wasClicked }
        />
      </SubContainer>
    </Container>
  )
}

export default Header;
