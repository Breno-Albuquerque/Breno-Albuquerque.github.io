import React from 'react'
import styled from 'styled-components';
import myPicture2 from '../images/myPicture2.png';

import { Css, Docker, Git, Html, Jest, Js, Node, ReactSvg, Redux, Sql, Ts } from '../images/techstack/AllSvgs';


const Container = styled.section`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 16px;


  @media(min-width: 576px) {
    padding: 32px;
  }

  @media(min-width: 992px) {
    min-height: 80vh;
  }
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

  @media(min-width: 992px) {
    font-size: 24px;
  }
`

const Line = styled.span`
  background-color: ${props => props.theme.purple1};

  width: 65%;
  height: 1px;


  @media(min-width: 576px) {
    width: 75%;
  }

  @media(min-width: 992px) {
    display: none;
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

  margin: 32px 0;

  @media(min-width: 576px) {
    font-size: 22px;
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

const SvgsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  width: 90%;
  max-width: 300px;

  margin: 16px auto;
`

const SvgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border-radius: 0 50px 0 50px;

  width: 130px;
  height: 130px;

  margin-bottom: 16px;

  box-shadow: 4px 4px 4px  ${props => props.theme.purple2};

  box-sizing: border-box;
  padding: 8px;

  border: 1px solid ${props => props.theme.purple2};
`

const SvgName = styled.span`
  font-size: 14px;
  color: ${props => props.theme.white};
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

      <SubTitle>#Tech Stack</SubTitle>
    <SvgsContainer>
      <SvgBox> 
        <Css width={ 50 } />
        <SvgName>Css</SvgName>
      </SvgBox>
      <SvgBox>
        <Docker width={ 50 } />
        <SvgName>Docker</SvgName>
      </SvgBox>
      <SvgBox>
        <Git width={ 50 } />
        <SvgName>Git</SvgName>
      </SvgBox>
      <SvgBox>
        <Html width={ 50 } />
        <SvgName>HTML</SvgName>
      </SvgBox>
      <SvgBox>
        <Jest width={ 50 } />
        <SvgName>Jest</SvgName>
      </SvgBox>
      <SvgBox>
        <Js width={ 50 } />
        <SvgName>JavaScript</SvgName>
      </SvgBox>
      <SvgBox>
        <Node width={ 50 } />
        <SvgName>Node.js</SvgName>
      </SvgBox>
      <SvgBox>
        <ReactSvg width={ 50 } />
        <SvgName>React</SvgName>
      </SvgBox>
      <SvgBox>
        <Redux width={ 50 } />
        <SvgName>Redux</SvgName>
      </SvgBox>
      <SvgBox>
        <Sql width={ 50 } />
        <SvgName>MySQL</SvgName>
      </SvgBox>
      <SvgBox>
        <Ts width={ 50 } />
        <SvgName>TypeScript</SvgName>
      </SvgBox>
    </SvgsContainer>

    </Container>
  )
}

export default About;
