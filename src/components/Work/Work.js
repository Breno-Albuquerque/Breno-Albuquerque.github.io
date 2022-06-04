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
    threshold: 0.3
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [inView]);

  const titleBoxVar = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const workListVar = {
    hidden: {

    },
    show: {
      duration: {
        delayChildren: 1
      }
    }
  }

  return (
    <Container id="Work">
      <Box ref={ ref } variants={ titleBoxVar } animate={ animation } initial="hidden">
        <Line/>
        <Title>My Work</Title>
        <SubTitle>Projects</SubTitle>
      </Box>
      <WorkList
        variants={ workListVar }
        animate={ animation }
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
