import React from 'react'
import styled from 'styled-components';
import myPicture2 from '../images/myPicture2.png';

const Container = styled.section`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 16px;
`

const Box = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h3`
  font-size: 22px;
  color: ${props => props.theme.purple1};
`

const Line = styled.span`
  background-color: ${props => props.theme.purple1};

  width: 65%;
  height: 1px;
`

const Text = styled.p`
  color: ${props => props.theme.white};

  margin: 32px 0;
  line-height: 24px;
`

const Picture = styled.img`
  width: 202px;

  align-self: center;
`

const SubTitle = styled.h4`
  font-size: 20px;
  color: ${props => props.theme.purple1};

  margin-bottom: 16px;
`

const ListContainer = styled.div`
  margin: 32px 0;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 152px;
`

const ListItem = styled.li`
  font-size: 14px;
  color: ${props => props.theme.white};
  

  margin: 16px 0;

  &::before{
    content: "chevron_right ";

    margin-right: 4px;

    color: ${props => props.theme.purple1};
    font-family: "Material Icons";
  }
`

const Highlight = styled.span`
  color: ${props => props.theme.purple1};
`

function About() {
  return (
    <Container>
      <Box>
        <Title>About Me</Title>
        <Line/>
      </Box>
      <Text>
        Apaixonado por desenvolvimento de softwares, novas tecnologias e computação de forma geral. Atualmente estudo <Highlight>Desenvolvimento Web Full Stack</Highlight> na <Highlight>Trybe</Highlight>. Curiosidade e disposição para novos aprendizados me definem, sempre busco novos conhecimentos no mundo da tecnologia para poder aplicá-los e impactar positivamente a vida das pessoas.
      </Text>
      <Picture src={ myPicture2 } alt="Profile Picture"/>

      <ListContainer>
        <SubTitle>#Tech Stack</SubTitle>
        <List>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Redux</ListItem>
          <ListItem>Node.js</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>MySQL</ListItem>
          <ListItem>Docker</ListItem>
        </List>
      </ListContainer>
    </Container>
  )
}

export default About;
