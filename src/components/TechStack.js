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
  color: ${props => props.theme.purple1};

  @media(min-width: 992px) {
    font-size: 32px;
  }
`

const Line = styled.span`
  background-color: ${props => props.theme.purple1};

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
  }
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

  box-shadow: 2px 2px 2px  ${props => props.theme.purple2};

  box-sizing: border-box;
  padding: 8px;

  border: 1px solid ${props => props.theme.purple2};

  @media(min-width: 768px) {
    margin-right: 32px;
  }
`

const SvgName = styled.span`
  font-size: 14px;
  color: ${props => props.theme.white};
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