import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: ${props => props.wasClicked ? '0' : '-85%'};

  box-sizing: border-box;
  padding: 16px;

  height: 100vh;
  width: 75%;

  transition: all ease 0.25s;
  background-color: inherit;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ScrollLink = styled(Link)`
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  height: 80%;
  width: 80%;

  font-family: 'Poppins', sans-serif;
  font-size: 24px;

  color: ${props => props.theme.text};
`

const List = styled.ul`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Li = styled.li`
  display: flex;
  align-items: center;

`

const Arrow = styled.span`
  font-family: 'Material Icons';
  color: ${props => props.theme.main};

  margin-right: 8px;
`

function Menu({ wasClicked, handleMenuClick }) {
  return (
    <Container wasClicked={ wasClicked } >
      <Nav>
        <List>
          <Li>
            <ScrollLink activeClass="active" spy={true} smooth={true} offset={-80} duration={500} to="About" onClick={ handleMenuClick }>
              <Arrow>chevron_right</Arrow> 
              About
            </ScrollLink>
          </Li>
          <Li>
            <ScrollLink activeClass="active" spy={true} smooth={true} offset={-80} duration={500} to="TechStack" onClick={ handleMenuClick }>
              <Arrow>chevron_right</Arrow> 
              Tech Stack
            </ScrollLink>
          </Li>
          <Li>
            <ScrollLink activeClass="active" spy={true} smooth={true} offset={-80} duration={500} to="Work" onClick={ handleMenuClick }>
              <Arrow>chevron_right</Arrow> 
              Work
            </ScrollLink>
          </Li>
          <Li>
            <ScrollLink activeClass="active" spy={true} smooth={true} offset={-80} duration={500} to="Contact" onClick={ handleMenuClick }>
              <Arrow>chevron_right</Arrow> 
              Contact
            </ScrollLink>
          </Li>
        </List>
      </Nav>
    </Container>
  )
}

export default Menu;
