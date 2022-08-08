import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  Css, Docker, Git, Html, Python, Js,
  Node, ReactSvg, Sql, Ts, Express, Mongo, DotNet
} from '../../images/techstack/AllSvgs';


import {
  Container, Box, Title, SubTitle,
  Line, SvgsContainer, SvgBox, SvgName,
} from './StyledTechStack';

import {
  titleBoxVar, containerVariant, boxVariant
} from './framerTechStack';


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
          <Ts width={ 50 } />
          <SvgName>TypeScript</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <ReactSvg width={ 50 } />
          <SvgName>React</SvgName>
        </SvgBox>
        <SvgBox variants={ boxVariant }>
          <DotNet width={ 50 } />
          <SvgName>.NET</SvgName>
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
          <Mongo width={ 50 } />
          <SvgName>MongoDB</SvgName>
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
          <Python width={ 50 } />
          <SvgName>Python</SvgName>
        </SvgBox>
    </SvgsContainer>
    </Container>
  )
}

export default TechStack;