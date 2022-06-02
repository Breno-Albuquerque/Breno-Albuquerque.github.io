import React from 'react'

import {
  Section, Container, Title,
  Introduction, Name, Test,
  Highlight, ButtonCurriculum,
  ButtonsBox, HelloAnchor
} from './StyledHome';

function Home() {

  return (
    <Section id="Home">
      <Container
      >
        <Title
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
            delay: 0.7
          }}
        >
          Hi! I'm <Name>Breno Albuquerque</Name>,<br /> <Test>Web Developer</Test>
        </Title>

        <Introduction
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
            delay: 1.2
          }}
        >
          I'm a <Highlight>Front-End Web Developer</Highlight> specialized in React applications. Currently
          I'm coursing the Back-End module of <Highlight>Trybe</Highlight> to became Full Stack.
        </Introduction>

      </Container>
      <ButtonsBox
          animate={{
            x: 0,
          }}
          initial={{
            x: '-100vw',
          }}
          transition={{
            duration: 1.3,
            type: "spring",
            stiffness: 50,
            delay: 1.7,
          }}
      >
        <HelloAnchor
          target="_blank"
          href='mailto:brenoralbu@hotmail.com'
          >
            Say Hello !
        </HelloAnchor>
        <ButtonCurriculum

        >Curriculum
        </ButtonCurriculum>
      </ButtonsBox>
    </Section>
  )
}

export default Home;