import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  font-family: 'Poppins', sans-serif;

  min-height: 100vh;
  width: 100%;

  box-sizing: border-box;
  padding: 16px;

  @media(min-width: 576px) {
    padding: 32px;
  }
`

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`

const Title = styled(motion.h1)`
  font-size: 26px;

  margin-bottom: 24px;

  line-height: 40px;

  color: ${props => props.theme.main};

  @media(min-width: 576px) {
    font-size: 40px;
    line-height: 48px;
  }
`

const Name = styled.span`
  color: ${props => props.theme.text};
`

const Introduction = styled(motion.article)`
  align-self: flex-start;

  font-size: 15px;
  line-height: 24px;

  width: 95%;
  max-width: 576px;

  color: ${props => props.theme.text};

  @media(min-width: 576px) {
    font-size: 16px;
  }

  @media(min-width: 992px) {
    font-size: 18px;
    line-height: 30px;
  }
`

const Highlight = styled.span`
  color: ${props => props.theme.main};
`

const ButtonsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media(min-width: 992px) {
    align-self: flex-start;
  }
`

const HelloAnchor = styled(motion.a)`
  width: 144px;
  height: 48px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 900;
  color: ${props => props.theme.main};

  border: 1px solid ${props => props.theme.main};
  border-radius: 0 50px 0 50px;
  margin-right: 16px;

  background: none;
  cursor: pointer;

  @media(max-width: 335px) {
    margin-bottom: 32px;
  }

  transition: all 0.3s;

  &:hover{
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.back};
  }
`

const ButtonCurriculum = styled(motion.button)`
  width: 144px;
  height: 48px;

  font-size: 16px;
  font-weight: 900;
  color: ${props => props.theme.back};

  border: 1px solid ${props => props.theme.main};
  border-radius: 0 50px 0 50px;

  background: ${props => props.theme.main};

  cursor: pointer;
`

const Test = styled.span`
  color: ${props => props.theme.soft};
`

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
            delay: 0.5
          }}
        >
          I'm a <Highlight>Front-End Web Developer</Highlight> specialized in React applications. Currently
          I'm coursing the Back-End module of <Highlight>Trybe</Highlight> to became Full Stack.
        </Introduction>

      </Container>
      <ButtonsBox>
        <HelloAnchor
          target="_blank"
          href='mailto:brenoralbu@hotmail.com'
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
            Say Hello !
        </HelloAnchor>
        <ButtonCurriculum
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
            delay: 1,
          }}
        >Curriculum
        </ButtonCurriculum>
      </ButtonsBox>
    </Section>
  )
}

export default Home;