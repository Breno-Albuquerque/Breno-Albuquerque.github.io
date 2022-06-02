import React from 'react'
import myPicture3 from '../../images/myPicture3.png';

import {
  Container, Box, Title, SubTitle, Line,
  ImgTextBox, SubContainer, Text, Highlight, Picture
} from './StyledAbout';

function About() {
  return (
    <Container id="About">
      <Box>
        <Title>About Me</Title>
        <SubTitle>Description</SubTitle>
        <Line/>
      </Box>
      <ImgTextBox>
        <SubContainer>   
          <Text>
          <Highlight>Hello!</Highlight> My name is <Highlight>Breno</Highlight> and I enojoy creating different types of applications.
          </Text>
          <Text>
          I'm always interested in new technologies with distinct tools and resorces that can increase the <Highlight>quality</Highlight> and the <Highlight>speed</Highlight> of my <Highlight>programming</Highlight> and <Highlight>developing skills.</Highlight>
          </Text>
          <Text>
          I'm currently a <Highlight>full stack developer student</Highlight> at <Highlight>Trybe</Highlight>, I have already conclued the Front-End module of the course and my specialization is building web pages with JavaScript, HTML, CSS, React and Redux.
          </Text>
          
        </SubContainer>
        <Picture src={ myPicture3 } alt="Profile Picture"/>
      </ImgTextBox>
    </Container>
  )
}

export default About;
