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
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 6,
        damping: 6,
        stiffness: 30,
        delay: 1.7,
        staggerChildren: 0.5
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