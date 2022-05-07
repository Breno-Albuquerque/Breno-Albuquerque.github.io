import React, { useState } from 'react';
import styled from 'styled-components';
import Bsymbol from '../subComponents/Bsymbol';
import Menu from './Menu';
import { Link } from 'react-scroll';

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

const NavLi = styled.li`
/*   display: flex;
  flex-direction: column-reverse;
  align-items: center; */

  position: relative;

  color: ${props => props.isActive[props.n] ? props.theme.purple1 : props.theme.white};
  font-weight: 900;

  cursor: pointer;

  ${props => props.isActive[props.n] && '&::before{ content: "•"; position: absolute; left: 50%; bottom: -100%;}'}

`

function Header() {
  const [wasClicked, setWasClicked] = useState(false);
  const [isActive, setIsActive] = useState([false, false, false, false]);

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
            <NavLi n={0} isActive={ isActive }>
              <Link onSetActive={ () => handleSetActive(0) } onSetInactive={ () => handleSetInactive(0) } activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="About">About</Link>
            </NavLi>
            <NavLi n={1} isActive={ isActive }>
              <Link onSetActive={ () => handleSetActive(1) } onSetInactive={ () => handleSetInactive(1) } activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="TechStack">Tech Stack</Link>
            </NavLi>
            <NavLi n={2} isActive={ isActive }>
              <Link onSetActive={ () => handleSetActive(2) } onSetInactive={ () => handleSetInactive(2) }  activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="Work">Work</Link>
            </NavLi>
            <NavLi n={3} isActive={ isActive }>
              <Link onSetActive={ () => handleSetActive(3) } onSetInactive={ () => handleSetInactive(3) } activeClass="active" spy={true} smooth={true} offset={-100} duration={500} to="Contact">Contact</Link>
            </NavLi>
          </NavOl>
        </Nav>

        <Menu handleMenuClick={ handleMenuClick } wasClicked={ wasClicked } />
      </SubContainer>
    </Container>
  )
}

export default Header;
