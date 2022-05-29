import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { Github } from '../images/contact/contactSvgs';
import { ThemeContext } from 'styled-components';

const Container = styled.div`
  background: none;
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.main};
  border-radius: 0 50px 0 50px;
  
  width: 256px;
  min-height: 304px;
  
  box-sizing: border-box;
  padding: 16px;

  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(min-width: 992px) {
    min-height: 381px;
    width: 272px;
    /* margin-right: 64px; */
    margin-bottom: 64px;

    color: ${props => props.theme.mainL};
    border: 1px solid ${props => props.theme.backLL};
    background: ${props => props.theme.backLL};

    transition: all 0.1s;

    &:hover{
      background: none;
      color: ${props => props.theme.text};
      border: 1px solid ${props => props.theme.main};
    }
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.back};
  background: ${props => props.theme.text};
  text-decoration: none;

  border-radius: 0 0 0 50px;
  padding: 0 8px;

  width: 128px;
  height: 40px;

  font-size: 18px;

  transition: all 0.1s;

  @media(min-width: 992px) {
    color: ${props => props.theme.mainL};
    background: ${props => props.theme.back};

    ${Container}:hover &{
      color: ${props => props.theme.back};
      background: ${props => props.theme.text};
    }
  }
`

const CardTitle = styled.h4`
  width: 100%;
  font-size: 20px;

  @media(min-width: 992px) {
    font-size: 22px;
  }
`

const CardDescription = styled.p`
  font-weight: 900;
  font-size: 14px;

  width: 90%;

  text-align: left;
  line-height: 20px;
`

const Line = styled.span`
  background-color: ${props => props.theme.text};

  width: 90%;
  height: 1px;

  @media(min-width: 992px) {
    background-color: ${props => props.theme.alt1};

    ${Container}:hover &{
      background-color: ${props => props.theme.text};
    }
  }
`

const Tags = styled.p`
  font-size: 12px;
  line-height: 18px;

  @media(min-width: 992px) {
    font-size: 14px;
  }
`

const GithubAnchor = styled.a`
  display: flex;
  align-items: flex-end;
`

function Card(props) {
  const { id, name, description, link, techs, repository } = props.project;
  const theme = useContext(ThemeContext);
  const [svgColor, setSvgColor] = useState(theme.mainL);


  function handleMouseOver() {
    setSvgColor(theme.text);
  }

  function handleMouseLeave() {
    setSvgColor(theme.mainL);
  } 

  return (
    <Container onMouseOver={ handleMouseOver } onMouseLeave={ handleMouseLeave } id={ id } > 
      <CardTitle>{ name }</CardTitle>
      <CardDescription>{ description }</CardDescription>
      <Line />
      <Tags>{ techs.map((tech) => <span>{' '}{ tech }</span>) }</Tags>
      <Footer>
        <Anchor href={ link } target="_blank">Visit</Anchor>
        <GithubAnchor href={ repository } target="_blank"> <Github fill={ svgColor } /> </GithubAnchor>
      </Footer>
    </Container>
  )
}

export default Card