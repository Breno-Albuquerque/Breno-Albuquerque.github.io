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
      animation.start('animate');
    }
  }, [inView]);

  const titleVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      }
    }
  }

  const item = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      }
    }
  }

  const containerVariant = {
    initial: {
      
    },
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2
      }
    }
  }

  const boxVariant = {
    initial: {
      opacity: 0,
      x: -50,
      y: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <Container id="TechStack">
      <Box variants={ titleVariants } animate={ animation } initial="initial">
        <Line variants={item} />
        <Title variants={item}>Tech Stack</Title>
        <SubTitle variants={item}>Most used tools</SubTitle>
      </Box>

      <SvgsContainer ref={ ref } variants={ containerVariant } initial="initial" animate={animation}>
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