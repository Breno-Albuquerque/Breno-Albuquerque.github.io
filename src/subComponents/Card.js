import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { Github } from '../images/contact/contactSvgs';
import { ThemeContext } from 'styled-components';

const Container = styled.div`
  background: none;
  color: ${props => props.theme.white};
  border-radius: 0 50px 0 50px;
  border: 1px solid ${props => props.theme.purple1};
  
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
    width: 281px;
    margin-right: 64px;
    margin-bottom: 64px;

    color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.black};
    background: ${props => props.theme.purple2};

    transition: all 0.1s;

    &:hover{
      background: none;
      color: ${props => props.theme.white};
      border: 1px solid ${props => props.theme.purple1};
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

  background-color: ${props => props.theme.white};
  color: ${props => props.theme.purple1};
  text-decoration: none;

  border-radius: 0 0 0 50px;
  padding: 0 8px;

  width: 128px;
  height: 40px;

  font-size: 18px;

  @media(min-width: 992px) {
    color: ${props => props.theme.black};
    background: ${props => props.theme.white};
  }
`

const CardTitle = styled.h4`
  width: 100%;
  font-size: 20px;
`

const CardDescription = styled.p`
  font-weight: 900;
  font-size: 14px;

  width: 90%;

  text-align: left;
  line-height: 20px;
`

const Line = styled.span`
  background-color: ${props => props.theme.white};

  width: 90%;
  height: 1px;

  @media(min-width: 992px) {
    background-color: ${props => props.theme.white};
  }
`

const Tags = styled.p`
  font-size: 12px;
`

const GithubAnchor = styled.a`
  display: flex;
  align-items: flex-end;
`

function Card(props) {
  const { id, name, description, link, techs, repository } = props.project;
  const theme = useContext(ThemeContext);
  const [svgColor, setSvgColor] = useState(theme.white);


/*   function handleMouseOver() {
    setSvgColor(theme.white);
  }

  function handleMouseLeave() {
    setSvgColor(theme.white);
  } */

  return (
    <Container /* onMouseOver={ handleMouseOver } onMouseLeave={ handleMouseLeave } */ id={ id } > 
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