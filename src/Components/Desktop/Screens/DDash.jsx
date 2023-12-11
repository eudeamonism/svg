import { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import NavBar from '../Navigation/NavBar';

const DDash = () => {
  const [stw, setStw] = useState(false);
  const [stwLoad, setStwLoad] = useState(false);
  const [stwBuild, setStwBuild] = useState(false);
  return (
    <Flex direction="column">
      <NavBar />
      
    </Flex>
  );
};

export default DDash;
