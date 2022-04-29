import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from './Theme';
import Header from './components/Header';
import Home from './components/Home';
/* import styled from 'styled-components';

const ContentContainer = styled.div`
  background-color: ;
` */

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Header/>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
