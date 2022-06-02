import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.header)`
  display: flex;
  align-items: center;

  font-family: 'Poppins', sans-serif;
  position: fixed;

  box-sizing: border-box;

  background-color: ${props => props.theme.back};
  box-shadow: 0px 2px 8px 0px ${props => props.theme.main};

  z-index: 9;

  width: 100%;
  height: 10vh;

  @media(min-width: 992px) {
    height: 80px;
    box-shadow: none;
  }
`

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 16px;

  width: 100%;
  max-width: 992px;

  margin: 0 auto;
`

export const Nav = styled.nav`
  display: none;
  width: 60%;

  @media(min-width: 768px) {
    display: block;
  }
`

export const NavOl = styled(motion.ol)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`

export const MenuBox = styled.button`
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

export const MenuLine = styled.span`
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

  background-color: ${props => props.theme.main};
`

export const NavLi = styled(motion.li)`
/*   display: flex;
  flex-direction: column-reverse;
  align-items: center; */

  position: relative;

  color: ${props => props.isActive[props.n] ? props.theme.main : props.theme.text};
  font-weight: 900;

  cursor: pointer;

  ${props => props.isActive[props.n] && '&::before{ content: "•"; position: absolute; left: 50%; bottom: -100%;}'}

`