import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import myPicture3 from '../../images/myPicture3.png';

import {
  Container, Box, Title, SubTitle, Line,
  ImgTextBox, SubContainer, Text, Highlight, Picture
} from './StyledAbout';

function About() {

  const {ref, inView} = useInView({
    threshold: 0.3
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [inView]);

  const boxVariants = {
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
        duration: 1,
      }
    }
  }

  const subContainerVar = {
    initial: {

    },
    animate: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1
      }
    }
  }

  const textVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4
      }
    }
  }

  const pictureVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 3
      }
    }
  }

  return (
    <Container  id="About">
      <Box ref={ ref } variants={ boxVariants } animate={ animation } initial="initial">
        <Line variants={ item } />
        <Title variants={ item }>About Me</Title>
        <SubTitle variants={ item }>Description</SubTitle>
      </Box>
      <ImgTextBox>
        <SubContainer variants={ subContainerVar } initial="initial" animate={ animation }>   
          <Text  variants={ textVariants }>
            <Highlight>Hello!</Highlight> My name is <Highlight>Breno</Highlight> and I enojoy creating different types of applications.
          </Text>
          <Text variants={ textVariants }>
            I'm always interested in new technologies with distinct tools and resorces that can increase the <Highlight>quality</Highlight> and the <Highlight>speed</Highlight> of my <Highlight>programming</Highlight> and <Highlight>developing skills.</Highlight>
          </Text>
          <Text variants={ textVariants }>
            I'm currently a <Highlight>full stack developer student</Highlight> at <Highlight>Trybe</Highlight>, I have already conclued the Front-End module of the course and my specialization is building web pages with JavaScript, HTML, CSS, React and Redux.
          </Text>
        </SubContainer>
        <Picture
          src={ myPicture3 }
          alt="Profile Picture"
          variants={ pictureVariants }
          initial="initial"
          animate={ animation }
        />
      </ImgTextBox>
    </Container>
  )
}

export default About;
