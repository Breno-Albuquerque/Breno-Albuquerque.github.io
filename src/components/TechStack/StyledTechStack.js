import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 16px;

  @media(min-width: 576px) {
    padding: 32px;
  }

  @media(min-width: 992px) {
    min-height: 80vh;
    margin-bottom: 64px;
    justify-content: center;
    align-items: center;
  }
`

export const Box = styled(motion.div)`
  width: 100%;
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row-reverse;

  @media(min-width: 992px) {
    flex-direction: column;
  }
`

export const Title = styled(motion.h3)`
  font-size: 22px;
  color: ${props => props.theme.main};
  
  @media(min-width: 992px) {

    width: 100%;
    text-align: center;
    font-size: 32px;
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

export const SvgsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  
  align-items: center;
  justify-content: space-around;

  width: 90%;
  max-width: 300px;

  margin: 16px auto;

  @media(min-width: 768px) {
    max-width: 576px;
  }

  @media(min-width: 992px) {
    max-width: 100%;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
  }
`

export const SvgBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border-radius: 0 50px 0 50px;

  width: 160px;
  height: 160px;

  margin-bottom: 16px;

/*   box-shadow: 2px 2px 2px 0 ${props => props.theme.alt1}; */

  box-sizing: border-box;
  padding: 8px;

  transition: all ease 0.2s;

  border: 1px solid ${props => props.theme.main};

  @media(min-width: 768px) {
    margin-right: 32px;
  }

  @media(min-width: 992px) {
    background-color: ${props => props.theme.backL};
    border: 1px solid ${props => props.theme.back};

    &:hover{
      background-color: ${props => props.theme.back};
      border: 1px solid ${props => props.theme.main};
    }
  }
`

export const SvgName = styled.span`
  font-size: 14px;
  color: ${props => props.theme.text};
`

export const SubTitle = styled(motion.h4)`
  color: ${props => props.theme.soft};
  font-size: 18px;
  margin: 10px 0;

  @media(max-width: 992px) {
    display: none;
  }
`