import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from './Theme';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import styled from 'styled-components';
import Work from './components/Work';

const ContentContainer = styled.div`
/*   max-width: ; */

  box-sizing: border-box;
  
  background-color: ${props => props.theme.black};
  font-family: 'Poppins', sans-serif;
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <ContentContainer>
          <Header/>
          <Home />
          <About />
          <Work />
        </ContentContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
