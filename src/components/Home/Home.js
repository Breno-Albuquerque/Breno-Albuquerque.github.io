import React from 'react';

import {
  Section, Container, Title, Introduction, Name, Test,
  Highlight, ButtonCurriculum, ButtonsBox, HelloAnchor
} from './StyledHome';

import {
  animateTitle, animateIntroduction, animateButtonsBox
} from './framerHome';

function Home() {
  return (
    <Section id="Home">
      <Container>
        <Title
          variants={ animateTitle }
          animate="animate"
          initial="initial"
        >
          Hi! I'm <Name>Breno Albuquerque</Name>,<br /> <Test>Web Developer</Test>
        </Title>

        <Introduction
          variants={ animateIntroduction }
          animate="animate"
          initial="initial"
        >
          I'm a <Highlight>Front-End Web Developer</Highlight> specialized in React applications. I'm currently coursing the Back-End module of <Highlight>Trybe</Highlight> to became Full Stack.
        </Introduction>
      </Container>

      <ButtonsBox
        variants={ animateButtonsBox }
        animate="animate"
        initial="initial"
      >
        <HelloAnchor
          target="_blank"
          href='mailto:brenoralbu@hotmail.com'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          >
          Say Hello !
        </HelloAnchor>

        <ButtonCurriculum
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Curriculum
        </ButtonCurriculum>
      </ButtonsBox>
    </Section>
  )
}

export default Home;