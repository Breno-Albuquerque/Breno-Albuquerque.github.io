import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.section`
  box-sizing: border-box;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  min-height: 90vh;
`

export const Title = styled(motion.h2)`
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

export const Footer = styled.footer`
  color: ${props => props.theme.text};
  font-size: 14px;

  margin-top: 48px;
  margin-bottom: 8px;

  width: 100%;
  text-align: center;
`
