import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: ${props => props.wasClicked ? '0' : '-85%'};

  box-sizing: border-box;
  padding: 16px;

  height: 100vh;
  width: 75%;

  transition: all ease 0.25s;
  background-color: ${props => props.theme.back};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScrollLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const Nav = styled.nav`
  height: 80%;
  width: 80%;

  font-family: 'Poppins', sans-serif;
  font-size: 24px;

  color: ${props => props.theme.text};
`

export const List = styled.ul`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Li = styled.li`
  display: flex;
  align-items: center;

`

export const Arrow = styled.span`
  font-family: 'Material Icons';
  color: ${props => props.theme.main};

  margin-right: 8px;
`