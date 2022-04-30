import React from 'react'
import styled from 'styled-components';
import myPicture2 from '../images/myPicture2.png';

const Container = styled.section`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 16px;


  @media(min-width: 576px) {
    padding: 32px;
  }
`

const Box = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

/*   @media(min-width: 576px) {
    justify-content: space-evenly;
  } */
`

const Title = styled.h3`
  font-size: 22px;
  color: ${props => props.theme.purple1};
`

const Line = styled.span`
  background-color: ${props => props.theme.purple1};

  width: 65%;
  height: 1px;


  @media(min-width: 576px) {
    width: 75%;
  }
`

const Text = styled.p`
  color: ${props => props.theme.white};

  margin: 32px 0;
  line-height: 24px;

  @media(min-width: 576px) {
    max-width: 60%;
  }

`

const Picture = styled.img`
  width: 202px;
  
  margin: 0 auto;
`

const SubTitle = styled.h4`
  font-size: 20px;
  color: ${props => props.theme.purple1};

  margin-bottom: 16px;

  @media(min-width: 576px) {
    font-size: 22px;
  }
`

const ListContainer = styled.div`
  width: 100%;
  margin: 32px auto;

  @media(min-width: 576px) {
    max-width: 60%;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  max-height: 160px;
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

  @media(min-width: 576px) {
    font-size: 16px;
  }
`

const Highlight = styled.span`
  color: ${props => props.theme.purple1};
`

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 16px;
  width: 100%;
`

function About() {
  return (
    <Container>
      <Box>
        <Title>About Me</Title>
        <Line/>
      </Box>
      <SubContainer>
        <Text>
          Apaixonado por desenvolvimento de softwares, novas tecnologias e computação de forma geral. Atualmente estudo <Highlight>Desenvolvimento Web Full Stack</Highlight> na <Highlight>Trybe</Highlight>. Curiosidade e disposição para novos aprendizados me definem, sempre busco novos conhecimentos no mundo da tecnologia para poder aplicá-los e impactar positivamente a vida das pessoas.
        </Text>
        <Picture src={ myPicture2 } alt="Profile Picture"/>
      </SubContainer>

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
