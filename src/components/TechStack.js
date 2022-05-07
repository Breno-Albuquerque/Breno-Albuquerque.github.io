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
    min-height: 80vh;
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

const SubTitle = styled.h4`
  font-size: 20px;
  color: ${props => props.theme.purple1};

  margin: 32px 0;

  @media(min-width: 576px) {
    font-size: 22px;
  }
`

function TechStack() {
  return (
    <Container>
    <SubTitle>#Tech Stack</SubTitle>
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