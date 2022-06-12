import React, { useContext, useEffect } from 'react';
import ContactCard from '../../subComponents/ContactCard';
import { contacts } from '../../data/contacts';
import { ThemeContext } from 'styled-components';

import {
  Container, Title, Footer
} from './StyledContact';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import { titleVar } from './framerContact';

function Contact() {
  const theme = useContext(ThemeContext);

  const {ref, inView} = useInView({
    threshold: 0.3
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [inView]);

  return (
    <Container id="Contact">
      <Title ref={ref} variants={ titleVar } initial="hidden" animate={ animation }>Get In Touch</Title>
      { contacts.map((data, i) => (
        <ContactCard index={i} inView={ inView } key={ i } data={ data } theme={ theme } />
      )) }
      <Footer>Designed & Built by Breno Albuquerque. </Footer>
    </Container>
  )
}

export default Contact;
