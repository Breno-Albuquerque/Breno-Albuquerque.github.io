import React, { useState } from 'react';
import Bsymbol from '../../subComponents/Bsymbol';
import Menu from '../Menu/Menu';
import { Link } from 'react-scroll';

import {
  Container, MenuBox, MenuLine,
  Nav, NavOl, NavLi, SubContainer
} from './StyledHeader';

const links = ['Home', 'About', "TechStack", "Work", 'Contact'];

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

  const containerVariants = {
    initial: {
      y: '-10vh'
    },
    animate: {
      y: 0,
      transition: {
        duration: 1
      }
    },
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
                    to={ link }
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
