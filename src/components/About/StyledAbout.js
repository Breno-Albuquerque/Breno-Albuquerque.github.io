import { motion } from 'framer-motion';
import styled  from 'styled-components';

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 16px;

  @media(min-width: 576px) {
    padding: 32px;
  }

  @media(min-width: 992px) {
    min-height: 60vh;
    justify-content: center;
  }
`

export const Box = styled(motion.div)`
  width: 100%;
  margin-bottom: 32px;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;

  @media(min-width: 992px) {
    flex-direction: column;
  }
`

export const Title = styled(motion.h3)`
  font-size: 22px;
  color: ${props => props.theme.main};

  @media(min-width: 992px) {
    width: 100%;  
    font-size: 32px;
    text-align: center;
  }
`

export const Line = styled(motion.span)`
  background-color: ${props => props.theme.main};

  flex-grow: 0.95;
  height: 1px;
  margin-left: 12px;

  @media(min-width: 576px) {
    flex-grow: 1;
    margin-left: 16px;
  }

  @media(min-width: 992px) {
    display: none;
  }
`

export const Text = styled(motion.p)`
  color: ${props => props.theme.text};
  font-size: 16px;

  margin-bottom: 32px;
  line-height: 24px;

  @media(min-width: 992px) {
    font-size: 18px;
    line-height: 30px;
  }
`

export const Picture = styled(motion.img)`
  width: 202px;
  
  margin: 32px auto;
`

export const Highlight = styled.span`
  color: ${props => props.theme.main};
`

export const SubContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 16px;
  width: 100%;

  @media(min-width: 576px) {
    max-width: 60%;
  }
`

export const ImgTextBox = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 576px) {
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
`

export const SubTitle = styled(motion.h4)`
  color: ${props => props.theme.soft};
  font-size: 18px;
  margin: 10px 0;

  @media(max-width: 992px) {
    display: none;
  }
`