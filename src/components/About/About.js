import { DragControls, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import myPicture3 from '../../images/myPicture3.png';

import {
  Container, Box, Title, SubTitle, Line,
  ImgTextBox, SubContainer, Text, Highlight, Picture
} from './StyledAbout';

function About() {

  const [refTitleBox, titleBoxInView] = useInView({
    threshold: 0.3
  });

  const [refTextContainer, textContainerInView] = useInView();

  const [refPicture, pictureInView] = useInView();

  const controls = useAnimation();

  useEffect(() => {
    if (titleBoxInView) {
      controls.start('show');
    }
  }, [titleBoxInView, textContainerInView, pictureInView]);

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

  const subContainer = {
    hidden: {

    },
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5
      }
    }
  }

  const textVar = {
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

  const pictureVar = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 2,
      }
    }
  }

  return (
    <Container id="About">
      <Box
        ref={ refTitleBox }
        variants={ titleBoxVar }
        animate={ controls }
        initial="hidden"
      >
        <Line />
        <Title>About Me</Title>
        <SubTitle>Description</SubTitle>
      </Box>
      <ImgTextBox>
        <SubContainer
          variants={ subContainer }
          animate={ controls }
          initial="hidden"
        >   
          <Text  variants={ textVar }>
            <Highlight>Hello!</Highlight> My name is <Highlight>Breno</Highlight> and I enojoy creating different types of applications.
          </Text>
          <Text variants={ textVar }>
            I'm always interested in new technologies with distinct tools and resorces that can increase the <Highlight>quality</Highlight> and the <Highlight>speed</Highlight> of my <Highlight>programming</Highlight> and <Highlight>developing skills.</Highlight>
          </Text>
          <Text variants={ textVar }>
            I'm currently a <Highlight>full stack developer student</Highlight> at <Highlight>Trybe</Highlight>, I have already conclued the Front-End module of the course and my specialization is building web pages with JavaScript, HTML, CSS, React and Redux.
          </Text>
        </SubContainer>
        <Picture
          src={ myPicture3 }
          alt="Profile Picture"
          ref={ refPicture }
          variants={ pictureVar }
          animate={ controls }
          initial="hidden"
        />
      </ImgTextBox>
    </Container>
  )
}

export default About;
