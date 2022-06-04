import React, { useContext, useEffect, useState } from 'react'
import { Github } from '../images/contact/contactSvgs';
import styled, { ThemeContext, keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const Container = styled(motion.div)`
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
  width: 100%;
  display: flex;

  justify-content: space-between;

  align-items: flex-end;
`

const Anchor = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;

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

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const GithubAnchor = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${Container}:hover {
    transition: scale(1.1);
  }

  ${Container}:hover &>:first-child {
    animation: ${rotate} infinite 3s linear;
  }

/*   @media(min-width: 992px) {
    border-radius: 5px;
    padding: 4px;
    background-color: ${props => props.theme.back};
    flex-direction: column-reverse;
  } */
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

  // Delays para animações:
  const { index, inView } = props;
  const delay = (index + 1) * 0.5;

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [inView]);

  const projectVar = {
    hidden: {
      scale: 0
    },
    show: {
      scale:1,
      transition: {
        type: 'spring',
        duration: 1,
        delay,
      }
    },
    static: {
      scale: 1,
    }
  }

  return (
    <Container
      onMouseOver={ handleMouseOver }
      onMouseLeave={ handleMouseLeave }
      id={ id }

      whileHover={{scale: 1.1 }}
      onHoverEnd={ () => animation.start('static') }
      variants={ projectVar }
      initial="hidden"
      animate={ animation }
    > 
      <CardTitle>{ name }</CardTitle>
      <CardDescription>{ description }</CardDescription>
      <Line />
      <Tags>{ techs.map((tech, index) => <span key={ index }>{' '}{ tech }</span>) }</Tags>
      <Footer>
        <Anchor
          href={ link }
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          >
          Visit
        </Anchor>
        <GithubAnchor
          href={ repository }
          target="_blank"
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 1.1 }}
        >
          <Github
            fill={ svgColor }
          />
        </GithubAnchor>
      </Footer>
    </Container>
  )
}

export default Card