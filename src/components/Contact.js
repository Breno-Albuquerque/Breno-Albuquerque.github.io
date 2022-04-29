import React from 'react';
import styled from 'styled-components';
import ContactCard from '../subComponents/ContactCard';
import { contacts } from '../data/contacts';

const Container = styled.section`
  box-sizing: border-box;
  padding: 16px;
`

const Title = styled.h2`
  color: ${props => props.theme.purple1};
  font-size: 24px;
  font-weight: bold;

  width: 100%;

  margin-bottom: 32px;

  text-align: center;
`

function Contact() {
  return (
    <Container>
      <Title>Get In Touch</Title>
      { contacts.map((data) => (
        <ContactCard data={ data } />
      )) }
    </Container>
  )
}

export default Contact;
