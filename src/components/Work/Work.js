import React, { useEffect } from 'react';
import Card from '../../subComponents/Card';
import { projects } from '../../data/projects';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import {
  Container, Box, Title,
  SubTitle, Line, WorkList
} from './StyledWork';

function Work() {

  const { ref, inView } = useInView({
    threshold: 0.8
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [inView]);

  const titleVariants = {
    initial: {
      scale: 0
    },
    animate: {
      scale:1,
      transition: {
        type: 'spring',
        duration: 0.5,
      }
    }
  }

  const item = {
    initial: {
      scale: 0
    },
    animate: {
      scale:1,
      transition: {
        type: 'spring',
        duration: 1,
      }
    }
  }

  return (
    <Container id="Work">
      <Box ref={ ref } variants={ titleVariants } animate={ animation } initial="initial">
        <Line/>
        <Title>My Work</Title>
        <SubTitle>Projects</SubTitle>
      </Box>
      <WorkList >
        { projects.map((project, index) => (
          <Card inView={ inView } index={ index } key={ index } project={ project } />
        )) }
      </WorkList>
    </Container>
  )
}

export default Work;
