import React from 'react'
import styled from 'styled-components';

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
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`

const Title = styled.h1`
  font-size: 26px;

  margin-bottom: 24px;

  line-height: 40px;

  color: ${props => props.theme.purple1};

  @media(min-width: 576px) {
    font-size: 40px;
  }
`

const Name = styled.span`
  color: ${props => props.theme.white};
`

const Introduction = styled.article`
  align-self: flex-start;

  font-size: 15px;
  line-height: 24px;

  width: 95%;
  max-width: 576px;

  color: ${props => props.theme.white};

  @media(min-width: 576px) {
    font-size: 16px;
  }
`

const Highlight = styled.span`
  color: ${props => props.theme.purple1};
`

const ButtonsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const HelloButton = styled.button`
  width: 144px;
  height: 48px;

  font-size: 16px;
  font-weight: 900;
  color: ${props => props.theme.purple1};

  border: 1px solid ${props => props.theme.purple1};
  border-radius: 0 50px 0 50px;
  margin-right: 16px;

  background: none;

  @media(max-width: 335px) {
    margin-bottom: 32px;
  }
`

const ButtonCurriculum = styled.button`
  width: 144px;
  height: 48px;

  font-size: 16px;
  font-weight: 900;
  color: ${props => props.theme.white};

  border: 1px solid ${props => props.theme.purple1};
  border-radius: 0 50px 0 50px;

  background: ${props => props.theme.purple1};
`

function Home() {
  return (
    <Section>
      <Container>
        <Title>
          Hi! I'm <Name>Breno Albuquerque</Name>,<br/>Web Developer
        </Title>
        <Introduction>
        I'm a <Highlight>Front-End Web Developer</Highlight> specialized in React applications. Currently 
        I'm coursing the Back-End module of <Highlight>Trybe</Highlight> to became Full Stack.
        </Introduction>
      </Container>
      <ButtonsBox>
        <HelloButton>Say Hello !</HelloButton>
        <ButtonCurriculum>Curriculum</ButtonCurriculum>
      </ButtonsBox>
    </Section>
  )
}

export default Home;