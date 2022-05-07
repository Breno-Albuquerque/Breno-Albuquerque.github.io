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

  @media(min-width: 992px) {
    min-height: 80vh;
  }
`

const Box = styled.div`
  width: 100%;
  margin-bottom: 32px;

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

  margin-bottom: 32px;
  line-height: 24px;
`

const Picture = styled.img`
  width: 202px;
  
  margin: 32px auto;
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

  @media(min-width: 576px) {
    max-width: 60%;
  }
`

const ImgTextBox = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 576px) {
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
`


function About() {
  return (
    <Container>
      <Box>
        <Title>About Me</Title>
        <Line/>
      </Box>
      <ImgTextBox>
        <SubContainer>   
          <Text>
          <Highlight>Hello!</Highlight> My name is <Highlight>Breno</Highlight> and I enojoy creating different types of applications.
          </Text>
          <Text>
          I'm always interested in new technologies with distinct tools and resorces that can increase the <Highlight>quality</Highlight> and the <Highlight>speed</Highlight> of my <Highlight>programming</Highlight> and <Highlight>developing skills.</Highlight>
          </Text>
          <Text>
          I'm currently a <Highlight>full stack developer student</Highlight> at <Highlight>Trybe</Highlight>, I have already conclued the Front-End module of the course and my specialization is building web pages with JavaScript, HTML, CSS, React and Redux.
          </Text>
          
        </SubContainer>
        <Picture src={ myPicture2 } alt="Profile Picture"/>
      </ImgTextBox>
    </Container>
  )
}

export default About;
