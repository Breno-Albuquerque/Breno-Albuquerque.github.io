import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  box-sizing: border-box;
  padding: 8px 16px;

  margin-bottom: 16px;

  background-color: ${props => props.theme.purple2};

  border-radius: 0 50px 0 50px;
`

const AnchorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${props => props.theme.white};

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
    <Container id={ id } >
      <img src={ icon } alt="Midia Icon"/>
      <AnchorBox>
        <AnchorText>{ text }</AnchorText>
        <AnchorArrow>arrow_forward</AnchorArrow>
      </AnchorBox>
    </Container>
  )
}

export default ContactCard