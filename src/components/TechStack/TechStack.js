import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  Css, Docker, Git, Html, Jest, Js,
  Node, ReactSvg, Redux, Sql, Ts, Express
} from '../../images/techstack/AllSvgs';


import {
  Container, Box, Title, SubTitle,
  Line, SvgsContainer, SvgBox, SvgName,
} from './StyledTechStack';


function TechStack() {

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

  const containerVariant = {
    hidden: {
      
    },
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  }

  const boxVariant = {
    hidden: {
      opacity: 0,
      x: -50,
      y: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <Container id="TechStack">
      <Box
        ref={ ref }
        variants={ titleBoxVar }
        animate={ animation }
        initial="hidden"
      >
        <Line />
        <Title>Tech Stack</Title>
        <SubTitle>Most used tools</SubTitle>
      </Box>

      <SvgsContainer  variants={ containerVariant } initial="hidden" animate={animation}>
        <SvgBox variants={ boxVariant }>
          <Node width={ 50 } />
          <SvgName>Node.js</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <ReactSvg width={ 50 } />
          <SvgName>React</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <Redux width={ 50 } />
          <SvgName>Redux</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <Ts width={ 50 } />
          <SvgName>TypeScript</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <Html width={ 50 } />
          <SvgName>HTML</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }> 
          <Css width={ 50 } />
          <SvgName>Css</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <Js width={ 50 } />
          <SvgName>JavaScript</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <Git width={ 50 } />
          <SvgName>Git</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <Express width={ 50 } />
          <SvgName>Express</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <Docker width={ 50 } />
          <SvgName>Docker</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <Sql width={ 50 } />
          <SvgName>MySQL</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <Jest width={ 50 } />
          <SvgName>Jest</SvgName>
        </SvgBox>
    </SvgsContainer>
    </Container>
  )
}

export default TechStack;