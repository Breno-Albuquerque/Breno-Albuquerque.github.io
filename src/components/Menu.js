import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.wasClicked ? '0' : '-85%'};

  box-sizing: border-box;
  padding: 16px;

  height: 100vh;
  width: 75%;

  transition: all ease 0.25s;
  background-color: ${props => props.theme.black};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Nav = styled.nav`
  height: 80%;
  width: 80%;

  font-family: 'Poppins', sans-serif;
  font-size: 24px;

  color: ${props => props.theme.white};
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
  color: ${props => props.theme.purple1};

  margin-right: 8px;
`

function Menu({ wasClicked }) {
  return (
    <Container wasClicked={ wasClicked } >
      <Nav>
        <List>
          <Li><Arrow>chevron_right</Arrow> About</Li>
          <Li><Arrow>chevron_right</Arrow> Work</Li>
          <Li><Arrow>chevron_right</Arrow> Contact</Li>
        </List>
      </Nav>
    </Container>
  )
}

export default Menu;
