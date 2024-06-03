// src/App.js
import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import { LanguageProvider } from './components/LanguageContext';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {

      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };
  

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <LanguageProvider> 
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
        <Route
              path="/"
              element={<Home />}
            />
                    <Route
              path="/skills"
              element={<Skills />}
            />
                                <Route
              path="/projects"
              element={<Projects />}
            />
                                            <Route
              path="/certificates"
              element={<Certificates />}
            />
        </Routes>
        {/* <Footer /> */}
      </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
