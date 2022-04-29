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
`

const Title = styled.h1`
  font-size: 26px;

  margin-bottom: 24px;

  line-height: 40px;

  color: ${props => props.theme.purple1};
`

const Name = styled.span`
  color: ${props => props.theme.white};
`

const Introduction = styled.article`
  align-self: flex-start;

  font-size: 14px;
  line-height: 24px;

  width: 95%;

  color: ${props => props.theme.white};
`

const Highlight = styled.span`
  color: ${props => props.theme.purple1};
`

const HelloBtn = styled.button`
  width: 160px;
  height: 56px;

  font-size: 18px;
  font-weight: 900;
  color: ${props => props.theme.purple1};

  border: 1px solid ${props => props.theme.purple1};
  border-radius: 0 50px 0 50px;

  background: none;
`

function Home() {
  return (
    <Section>
      <Container>
        <Title>
          Hi! I'm <Name>Breno Albuquerque</Name>, Web Developer
        </Title>
        <Introduction>
        I'm a <Highlight>Front-End Web Developer</Highlight> specialized in React applications. Currently 
        I'm coursing the Back-End module of <Highlight>Trybe</Highlight> to became Full Stack.
        </Introduction>
      </Container>
      <HelloBtn>Say Hello !</HelloBtn>
    </Section>
  )
}

export default Home;