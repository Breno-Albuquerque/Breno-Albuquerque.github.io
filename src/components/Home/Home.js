import React from 'react'

import {
  Section, Container, Title, Introduction, Name, Test,
  Highlight, ButtonCurriculum, ButtonsBox, HelloAnchor
} from './StyledHome';

function Home() {

  const animateTitle = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.7
      }
    },
  }

  const animateIntroduction = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.2
      }
    },
  }

  const animateButtonsBox = {
    initial: {
      x: '-100vw',
    },
    animate: {
      x: 0,
      transition: {
        type: "spring",
        duration: 6,
        damping: 8,
        stiffness: 50,
        delay: 1.7,
      }
    },
  }

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
          >
          Say Hello !
        </HelloAnchor>

        <ButtonCurriculum>
          Curriculum
        </ButtonCurriculum>
      </ButtonsBox>
    </Section>
  )
}

export default Home;