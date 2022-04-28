import React from 'react';
import styled from 'styled-components';

const Symbol = styled.div`
  font-family: 'Indie Flower', cursive;
  font-size: 3rem;

  color: ${props => props.theme.purple1};
`

function Bsymbol() {
  return (
    <Symbol>B</Symbol>
  )
}

export default Bsymbol;
