import React, { useContext } from 'react';
import styled from 'styled-components';
import ContactCard from '../subComponents/ContactCard';
import { contacts } from '../data/contacts';
import { ThemeContext } from 'styled-components';

const Container = styled.section`
  box-sizing: border-box;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  min-height: 90vh;
`

const Title = styled.h2`
  color: ${props => props.theme.main};
  font-size: 24px;
  font-weight: bold;

  width: 100%;

  margin-bottom: 32px;

  text-align: center;

  @media(min-width: 576px) {
    font-size: 26px;
  }

  @media(min-width: 992px) {
    font-size: 36px;
  }
`

const Footer = styled.footer`
  color: ${props => props.theme.text};
  font-size: 14px;

  margin-top: 48px;
  margin-bottom: 8px;

  width: 100%;
  text-align: center;
`

function Contact() {
  const theme = useContext(ThemeContext);

  return (
    <Container id="Contact">
      <Title>Get In Touch</Title>
      { contacts.map((data) => (
        <ContactCard data={ data } theme={ theme } />
      )) }
      <Footer>Designed & Built by Breno Albuquerque. </Footer>
    </Container>
  )
}

export default Contact;
