import styled from 'styled-components';

export const Container = styled.section`
  font-family: 'Poppins', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding: 16px;

  @media(min-width: 576px) {
    padding: 32px;
  }

  @media(min-width: 992px) {
    min-height: 80vh;
    justify-content: center;
  }
`

export const Box = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 32px;

  @media(min-width: 992px) {
    flex-direction: column;
  }
`

export const Title = styled.h3`
  font-size: 22px;
  color: ${props => props.theme.main};

  @media(min-width: 992px) {
    width: 100%;
    text-align: center;
    font-size: 32px;
  }
`

export const Line = styled.span`
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

export const WorkList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;

  @media(min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    align-self: center;
  }
`

export const SubTitle = styled.h4`
  color: ${props => props.theme.soft};
  font-size: 18px;
  margin: 10px 0;

  @media(max-width: 992px) {
    display: none;
  }
`