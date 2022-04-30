import React, { useState } from 'react';
import styled from 'styled-components';
import Bsymbol from '../subComponents/Bsymbol';
import Menu from './Menu';

const Container = styled.header`
  display: flex;
  align-items: center;

  font-family: 'Poppins', sans-serif;
  position: fixed;

  box-sizing: border-box;

  background-color: ${props => props.theme.black};
  box-shadow: 0px 2px 8px 0px ${props => props.theme.purple1};

  z-index: 9;

  width: 100%;
  height: 10vh;

  @media(min-width: 992px) {
    height: 80px;
    box-shadow: none;
  }
`

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 16px;

  width: 100%;
  max-width: 992px;

  margin: 0 auto;
`

const Nav = styled.nav`
  display: none;
  width: 60%;

  @media(min-width: 768px) {
    display: block;
  }
`

const NavOl = styled.ol`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`

const NavLi = styled.li`
  color: ${props => props.theme.white};
  font-weight: 900;
`

const MenuBox = styled.button`
  position: relative;
  height: 24px;
  width: 24px;

  z-index: 10;
  
  transition: all 0.25s;

  border: none;
  background: none;

  @media(min-width: 768px) {
    display: none;
  }
`

const MenuLine = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 24px;
  height: 2px;

  transition: all 0.5s;

  display: ${props => (props.wasClicked && props.position === 'middle') && 'none'};

  transform: ${props => { 
    if (props.position === 'middle') return 'translateY(8px)'
    if (props.position === 'bottom') return 'translateY(16px)'
    return 'none';
   }};

  transform: ${props => {
    if (props.position === 'top' && props.wasClicked) return 'rotate(-45deg) translateY(6px) translateX(-6px)'
    if (props.position === 'bottom' && props.wasClicked) return 'rotate(45deg) translateY(6px) translateX(6px)'
  }};

  background-color: ${props => props.theme.purple1};
`

function Header() {
  const [wasClicked, setWasClicked] = useState(false);

  function handleMenuClick() {
    setWasClicked(!wasClicked)
  }

  return (
    <Container>
      <SubContainer>
        <Bsymbol/>

        <MenuBox onClick={ handleMenuClick }>
          <MenuLine wasClicked={ wasClicked } position={'top'} />
          <MenuLine wasClicked={ wasClicked } position={'middle'}/>
          <MenuLine wasClicked={ wasClicked } position={'bottom'}/>
        </MenuBox>

        <Nav>
          <NavOl>
            <NavLi>Home</NavLi>
            <NavLi>About</NavLi>
            <NavLi>Work</NavLi>
            <NavLi>Contact</NavLi>
          </NavOl>
        </Nav>

        <Menu wasClicked={ wasClicked } />
      </SubContainer>
    </Container>
  )
}

export default Header;
