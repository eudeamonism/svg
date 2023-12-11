import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
