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
          { ['About', 'TechStack', 'Work', 'Contact'].map((item, index) => {
            return (
              <Li key={ index }>
              <ScrollLink
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to={ item }
                onClick={ handleMenuClick }>
                <Arrow>chevron_right</Arrow> 
                { item }
              </ScrollLink>
            </Li>
            )
          }) }
        </List>
      </Nav>
    </Container>
  )
}

export default Menu;
