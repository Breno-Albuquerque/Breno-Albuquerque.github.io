import React, { useEffect } from 'react';
import Card from '../../subComponents/Card';
import { projects } from '../../data/projects';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import {
  Container, Box, Title,
  SubTitle, Line, WorkList
} from './StyledWork';

import { titleBoxVar } from './framerWork';

function Work() {
  const { ref, inView } = useInView({
    threshold: 0.3
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [inView]);

  return (
    <Container id="Work">
      <Box ref={ ref } variants={ titleBoxVar } animate={ animation } initial="hidden">
        <Line/>
        <Title>My Work</Title>
        <SubTitle>Projects</SubTitle>
      </Box>
      <WorkList
        initial="hidden"
      >
        { projects.map((project, index) => (
          <Card
            inView={ inView }
            index={ index }
            key={ index }
            project={ project }
          />
        )) }
      </WorkList>
    </Container>
  )
}

export default Work;
