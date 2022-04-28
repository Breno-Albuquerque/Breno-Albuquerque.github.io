import React from 'react';
import styled from 'styled-components';
import Bsymbol from '../subComponents/Bsymbol';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.black};

  height: 10vh;
`

function Header() {
  return (
    <Container>
      <Bsymbol/>
    </Container>
  )
}

export default Header;
