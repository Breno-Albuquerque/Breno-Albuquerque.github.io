import React from 'react';
import Card from '../../subComponents/Card';
import { projects } from '../../data/projects';

import {
  Container, Box, Title,
  SubTitle, Line, WorkList
} from './StyledWork';

function Work() {
  return (
    <Container id="Work">
      <Box>
        <Title>My Work</Title>
        <SubTitle>Projects</SubTitle>
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
