import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  text-decoration: none;

  width: 100%;
  max-width: 400px;

  box-sizing: border-box;
  padding: 8px 16px;

  margin: 0 auto;
  margin-bottom: 16px;

  background-color: ${props => props.theme.purple2};
  color: ${props => props.theme.white};

  border-radius: 0 50px 0 50px;

  transition: all 0.3s;

  &:hover{
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
  }
`

const AnchorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-weight: 900;
  width: 60%;
`

const AnchorText = styled.a`
  font-size: 16px;
`

const AnchorArrow = styled.a`
  font-family: "Material Icons";
  font-size: 20px;
`

function ContactCard({ data }) {
  const { id, text, icon, link } = data

  return (
    <Container id={ id } href={ link }
    target="_blank" rel="noreferrer">
      <img src={ icon } alt="Midia Icon"/>
      <AnchorBox>
        <AnchorText>{ text }</AnchorText>
        <AnchorArrow>arrow_forward</AnchorArrow>
      </AnchorBox>
    </Container>
  )
}

export default ContactCard;
