import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  font-family: 'Poppins', sans-serif;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 16px;
`

const Box = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h3`
  font-size: 22px;
  color: ${props => props.theme.purple1};
`

const Line = styled.span`
  background-color: ${props => props.theme.purple1};

  width: 65%;
  height: 1px;
`

function Work() {
  return (
    <Container>
      <Box>
        <Title>My Work</Title>
        <Line />
      </Box>
    </Container>
  )
}

export default Work;
