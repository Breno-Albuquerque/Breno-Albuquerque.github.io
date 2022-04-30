import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from './Theme';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import styled from 'styled-components';
import Work from './components/Work';
import Contact from './components/Contact';


const ContentContainer = styled.div`
  box-sizing: border-box;
  
  background-color: ${props => props.theme.black};
  font-family: 'Poppins', sans-serif;

  max-width: 992px;
  margin: 0 auto;
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
          <Header/>
          <ContentContainer>
            <Home />
            <About />
            <Work />
            <Contact />
          </ContentContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
