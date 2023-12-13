import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
import NavBar from '../Navigation/NavBar';

const Test = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="column">
      <NavBar />
      <Flex gap="1" mt="2" mb="4" align="center" ml="4">
        <Text
          onClick={() => {
            navigate('/');
          }}
          _hover={{ cursor: 'pointer' }}
          color="blue.400"
          _dark={{ color: 'teal.600' }}
        >
          HOME
        </Text>
        <Text as={MdChevronRight} />
        <Text
          onClick={() => {
            alert('Fortnite main page');
          }}
          _hover={{ cursor: 'pointer' }}
          color="blue.400"
          _dark={{ color: 'teal.600' }}
        >
          FORTNITE
        </Text>
        <Text as={MdChevronRight} />
        <Text
          onClick={() => {
            alert('Save the World Main Page');
          }}
          _hover={{ cursor: 'pointer' }}
          color="blue.400"
          _dark={{ color: 'teal.600' }}
        >
          Save the World
        </Text>
        <Text as={MdChevronRight} />
        <Text
          onClick={() => {
            alert('STW Loadouts');
          }}
          _hover={{ cursor: 'pointer' }}
          color="blue.400"
          _dark={{ color: 'teal.600' }}
        >
          Loadouts
        </Text>
        <Text as={MdChevronRight} />
        <Text color="gray.400" _dark={{ color: 'gray.600' }}>
          Base
        </Text>
      </Flex>
      <Text>Testing Page, Testing stuff!</Text>
    </Flex>
  );
};

export default Test;
