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

  @media(min-width: 576px) {
    padding: 32px;
  }

  @media(min-width: 992px) {
    min-height: 60vh;
  }
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

  @media(min-width: 992px) {
    font-size: 24px;
    margin-bottom: 32px;
  }
`

const Line = styled.span`
  background-color: ${props => props.theme.purple1};

  width: 65%;
  height: 1px;

  @media(min-width: 576px) {
    width: 75%;
  }

  @media(min-width: 992px) {
    display: none;
  }
`

const WorkList = styled.ul`
  display: flex;
  flex-direction: column;

  @media(min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
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
