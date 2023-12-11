import { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import SaveTheWorld from './SaveTheWorld';

const FortniteAccordion = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Flex direction="column">
        <Flex align="center" alignContent="center">
          <Text fontSize="lg" fontWeight={clicked === true ? 'bold' : null}>
            Fortnite
          </Text>
          <Text
            as={clicked === false ? MdArrowDropDown : MdArrowDropUp}
            fontSize="xl"
            onClick={() => {
              setClicked(!clicked);
            }}
          />
        </Flex>
        {clicked === true ? <SaveTheWorld /> : null}
      </Flex>
    </>
  );
};

export default FortniteAccordion;
