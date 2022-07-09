import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from './Theme';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import styled from 'styled-components';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import TechStack from './components/TechStack/TechStack';


const ContentContainer = styled.div`
  box-sizing: border-box;
  filter: ${props => props.wasClicked ? 'blur(5px)' : 'none'};
  
  background-color: inherit;
  font-family: 'Poppins', sans-serif;

  max-width: 992px;
  margin: 0 auto;

  overflow: hidden;
`

function App() {
  const [wasClicked, setWasClicked] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
          <Header wasClicked={wasClicked} setWasClicked={setWasClicked}/>
          <ContentContainer wasClicked={wasClicked}>
            <Home />
            <About />
            <TechStack />
            <Work />
            <Contact />
          </ContentContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
