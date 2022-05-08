import React from 'react';
import styled from 'styled-components';

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
    min-height: 60vh;
    justify-content: center;
  }
`

const Box = styled.div`
  width: 100%;
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.h3`
  font-size: 22px;
  color: ${props => props.theme.main};

  @media(min-width: 992px) {
    font-size: 32px;
  }
`

const Line = styled.span`
  background-color: ${props => props.theme.main};

  flex-grow: 0.95;
  height: 1px;
  margin-left: 12px;

  @media(min-width: 576px) {
    flex-grow: 1;
    margin-left: 16px;
  }

  @media(min-width: 992px) {
    display: none;
  }
`

const SvgsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  align-items: center;
  justify-content: space-around;

  width: 90%;
  max-width: 300px;

  margin: 16px auto;

  @media(min-width: 768px) {
    max-width: 576px;
  }

  @media(min-width: 992px) {
    max-width: 100%;
    justify-content: flex-start;
    margin-left: 0;
    margin-right: 0;
  }
`

const SvgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border-radius: 0 50px 0 50px;

  width: 160px;
  height: 160px;

  margin-bottom: 16px;

/*   box-shadow: 2px 2px 2px 0 ${props => props.theme.alt1}; */

  box-sizing: border-box;
  padding: 8px;

  transition: all ease 0.2s;

  border: 1px solid ${props => props.theme.main};

  @media(min-width: 768px) {
    margin-right: 32px;
  }

  @media(min-width: 992px) {
    background-color: ${props => props.theme.backL};
    border: 1px solid ${props => props.theme.back};

    &:hover{
      background-color: ${props => props.theme.back};
      border: 1px solid ${props => props.theme.main};
    }
  }
`

const SvgName = styled.span`
  font-size: 14px;
  color: ${props => props.theme.text};
`

function TechStack() {
  return (
    <Container id="TechStack">
      <Box>
        <Title>Tech Stack</Title>
        <Line/>
      </Box>
      <SvgsContainer>
        <SvgBox>
          <ReactSvg width={ 50 } />
          <SvgName>React</SvgName>
        </SvgBox>
        <SvgBox>
          <Redux width={ 50 } />
          <SvgName>Redux</SvgName>
        </SvgBox>
        <SvgBox>
          <Html width={ 50 } />
          <SvgName>HTML</SvgName>
        </SvgBox>
        <SvgBox> 
          <Css width={ 50 } />
          <SvgName>Css</SvgName>
        </SvgBox>
        <SvgBox>
          <Js width={ 50 } />
          <SvgName>JavaScript</SvgName>
        </SvgBox>
        <SvgBox>
          <Git width={ 50 } />
          <SvgName>Git</SvgName>
        </SvgBox>
        <SvgBox>
          <Docker width={ 50 } />
          <SvgName>Docker</SvgName>
        </SvgBox>
        <SvgBox>
          <Jest width={ 50 } />
          <SvgName>Jest</SvgName>
        </SvgBox>
        <SvgBox>
          <Node width={ 50 } />
          <SvgName>Node.js</SvgName>
        </SvgBox>
        <SvgBox>
          <Sql width={ 50 } />
          <SvgName>MySQL</SvgName>
        </SvgBox>
  {/*       <SvgBox>
          <Ts width={ 50 } />
          <SvgName>TypeScript</SvgName>
        </SvgBox> */}
    </SvgsContainer>
    </Container>
  )
}

export default TechStack;