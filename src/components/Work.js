import React from 'react';
import styled from 'styled-components';
import Card from '../subComponents/Card';
import { projects } from '../data/projects';

const Container = styled.section`
  font-family: 'Poppins', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding: 16px;
`

const Box = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
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

const WorkList = styled.ul`
  display: flex;
  flex-direction: column;
`

function Work() {
  return (
    <Container>
      <Box>
        <Title>My Work</Title>
        <Line />
      </Box>
      <WorkList>
        { projects.map((project) => (
          <Card project={ project } />
        )) }
      </WorkList>
    </Container>
  )
}

export default Work;
