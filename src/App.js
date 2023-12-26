import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Dashboard from './Components/Dashboard';
import Test from './Components/Desktop/Screens/Test';
import DStw from './Components/Desktop/Screens/DStw';
import DStwTrap from './Components/Desktop/Screens/DStwTrap';
import DDashHome from './Components/Desktop/Screens/DDashHome';
import Cookies from './Components/Desktop/Screens/Cookies';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/home" element={<DDashHome />} /> */}
          <Route path="/test" element={<Test />} />
          <Route path="/stw" element={<DStw />} />
          <Route path="/stw/trap" element={<DStwTrap />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
