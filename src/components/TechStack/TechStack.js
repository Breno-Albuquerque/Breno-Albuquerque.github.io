import React from 'react';

import {
  Css, Docker, Git, Html, Jest, Js,
  Node, ReactSvg, Redux, Sql, Ts, Express
} from '../../images/techstack/AllSvgs';


import {
  Container, Box, Title, SubTitle,
  Line, SvgsContainer, SvgBox, SvgName,
} from './StyledTechStack';


function TechStack() {
  return (
    <Container id="TechStack">
      <Box>
        <Title>Tech Stack</Title>
        <SubTitle>Most used tools</SubTitle>
        <Line/>
      </Box>

      <SvgsContainer>
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
          <Ts width={ 50 } />
          <SvgName>TypeScript</SvgName>
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
          <Express width={ 50 } />
          <SvgName>Express</SvgName>
        </SvgBox>
        <SvgBox>
          <Docker width={ 50 } />
          <SvgName>Docker</SvgName>
        </SvgBox>
        <SvgBox>
          <Sql width={ 50 } />
          <SvgName>MySQL</SvgName>
        </SvgBox>
        <SvgBox>
          <Jest width={ 50 } />
          <SvgName>Jest</SvgName>
        </SvgBox>
    </SvgsContainer>
    </Container>
  )
}

export default TechStack;