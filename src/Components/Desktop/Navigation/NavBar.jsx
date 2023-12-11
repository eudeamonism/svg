import { useState } from 'react';
import { Flex, Text, Divider } from '@chakra-ui/react';
import SaveTheWorld from './Parts/SaveTheWorld';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import FortniteAccordion from './Parts/FortniteAccordion';

const NavBar = () => {
  const SomethingCloser = () => {
    alert('Hello!');
  };

  return (
    <>
      <Flex>
        <Flex mr="5">
          <ColorModeSwitcher />
        </Flex>
        <Flex justify="space-between" p="2" w="100%">
          <Text>Navigating Bar</Text>
          <Text>Navigating Bar</Text>
          <Text>Navigating Bar</Text>
          <Text mr="2">Navigating Bar</Text>
        </Flex>
      </Flex>
      <Divider />
      <Flex gap="4">
        <FortniteAccordion />
      </Flex>
      <Divider />
    </>
  );
};

export default NavBar;
