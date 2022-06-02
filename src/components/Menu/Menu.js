import React from 'react'

import {
  Container, Nav, List, Li,
  ScrollLink, Arrow
} from './StyledMenu';

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
