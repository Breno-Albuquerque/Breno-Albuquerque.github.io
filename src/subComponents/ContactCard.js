import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Curriculum, Email, Github, Linkedin } from '../images/contact/contactSvgs';

const Container = styled(motion.a)`
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

  background-color: ${props => props.theme.backLL};
  color: ${props => props.theme.text};

  border-radius: 0 50px 0 50px;

  &:hover{
    background-color: ${props => props.theme.mainL};
    color: ${props => props.theme.back};
  }
`

const AnchorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-weight: 900;
  width: 60%;
`

const AnchorText = styled.div`
  font-size: 16px;
`

const AnchorArrow = styled.div`
  font-family: "Material Icons";
  font-size: 20px;
`

function ContactCard(props) {
  const { id, text, icon, link } = props.data;
  const { inView, index } = props;
  const [svgColor, setSvgColor] = useState(props.theme.text);

  function handleMouseOver() {
    setSvgColor(props.theme.back);
  }

  function handleMouseLeave() {
    setSvgColor(props.theme.text);
  }

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [inView]);

  //  Delay for animations
  const delay = (index + 1) * 0.5

  const ContainerVar = {
    hidden: {
      x: -150,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 6,
        stiffness: 30,
        duration: 1,
        delay
      }
    },
    static: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <Container
    id={ id }
    href={ link }
    target="_blank" rel="noreferrer"

    variants={ ContainerVar }
    initial="hidden"
    animate={ animation }
    onMouseLeave={ handleMouseLeave }
    onMouseOver={ handleMouseOver }
    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    onHoverEnd={ () => animation.start('static') }
    whileTap={{ scale: 0.9 }}
    >
      { icon === 'email' && <Email fill={ svgColor } /> }
      { icon === 'github' && <Github fill={ svgColor } /> }
      { icon === 'linkedin' && <Linkedin fill={ svgColor } /> }
      { icon === 'curriculum' && <Curriculum fill={ svgColor } /> }
      <AnchorBox>
        <AnchorText>{ text }</AnchorText>
        <AnchorArrow>arrow_forward</AnchorArrow>
      </AnchorBox>
    </Container>
  )
}

export default ContactCard;
