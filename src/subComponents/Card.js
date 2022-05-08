import React from 'react'
import styled from 'styled-components';
import github from '../images/github.svg';

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
`

const Tags = styled.p`
  font-size: 12px;
`

const Github = styled.a`
  display: flex;
  align-items: flex-end;
`

function Card(props) {
  const { id, name, description, link, techs, repository } = props.project;

  return (
    <Container id={ id } > 
      <CardTitle>{ name }</CardTitle>
      <CardDescription>{ description }</CardDescription>
      <Line />
      <Tags>{ techs.map((tech) => <span>{' '}{ tech }</span>) }</Tags>
      <Footer>
        <Anchor href={ link } target="_blank">Visit</Anchor>
        <Github href={ repository } target="_blank"><img src={ github } alt="Github Icon" ></img></Github>
      </Footer>
    </Container>
  )
}

export default Card