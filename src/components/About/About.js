import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import newPicture from '../../images/newPicture.png';

import {
  Container, Box, Title, SubTitle, Line,
  ImgTextBox, SubContainer, Text, Highlight, Picture
} from './StyledAbout';

import {
  titleBoxVar, subContainer,
  textVar, pictureVar
} from './framerAbout'

function About() {

  const [refTitleBox, titleBoxInView] = useInView({
    threshold: 0.3
  });

  const [refPicture, pictureInView] = useInView();

  const controls = useAnimation();

  useEffect(() => {
    if (titleBoxInView) {
      controls.start('show');
    }
  }, [titleBoxInView, pictureInView]);

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
            <Highlight>Hello!</Highlight> My name is <Highlight>Breno</Highlight> and i'm a software delopment enthusiast.
          </Text>
          <Text variants={ textVar }>
            Right after having my first contact with <Highlight>programming</Highlight> in 2021, I knew that I would build a career in this area. Since then, I started to dedicate to studing and learning
            the basics of <Highlight>computer science</Highlight> and the most used tools in <Highlight>web development</Highlight>. I'm always interested and curious to learn new technologies that can help me <Highlight>improve</Highlight> my <Highlight>developing skills,</Highlight> so I can use it to <Highlight>positivily impact peoples lives</Highlight>.
          </Text>
          <Text variants={ textVar }>
            I'm currently a <Highlight>full stack developer student</Highlight> at <Highlight>Trybe</Highlight>, I have already conclued the Front-End module of the course and i'm finishing the Back-End one.
          </Text>
        </SubContainer>
        <Picture
          src={ newPicture }
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
