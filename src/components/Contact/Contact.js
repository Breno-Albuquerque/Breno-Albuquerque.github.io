import React, { useContext } from 'react';
import ContactCard from '../../subComponents/ContactCard';
import { contacts } from '../../data/contacts';
import { ThemeContext } from 'styled-components';

import {
  Container, Title, Footer
} from './StyledContact';

function Contact() {
  const theme = useContext(ThemeContext);

  return (
    <Container id="Contact">
      <Title>Get In Touch</Title>
      { contacts.map((data, i) => (
        <ContactCard key={ i } data={ data } theme={ theme } />
      )) }
      <Footer>Designed & Built by Breno Albuquerque. </Footer>
    </Container>
  )
}

export default Contact;
