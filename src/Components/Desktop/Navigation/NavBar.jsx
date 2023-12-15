import { useState } from 'react';
import { Flex, Text, Divider } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import SaveTheWorld from './Parts/SaveTheWorld';
import Legos from './Parts/Legos';
import BattleRoyal from './Parts/BattleRoyal';
import { MdImportContacts } from 'react-icons/md';

const NavBar = () => {
  const [fortnite, setFortnite] = useState(false);
  const [writing, setWriting] = useState(false);
  const [baking, setBaking] = useState(false);
  const [philosophy, setPhilosophy] = useState(false);
  const [architecture, setArchitecture] = useState(false);

  return (
    <>
      <Flex align="center">
        <Flex mr="5" mt="1">
          <ColorModeSwitcher />
        </Flex>

        <Flex justify="space-between" p="2" w="100%" align="center">
          <Flex align="center" gap="2">
            <Text as={MdImportContacts} fontSize="x-large" />
            <Text fontWeight="bold" fontSize="x-large">
              Myth Scribe
            </Text>
          </Flex>

          <Text
            mr="10"
            fontWeight="semibold"
            onClick={() => {
              alert('Coming soon...');
            }}
            cursor="pointer"
          >
            About Us
          </Text>
        </Flex>
      </Flex>
      <Divider mb="2" />
      <Flex gap="4" w="100%" justify="space-evenly">
        <Flex align="center">
          <Text
            fontSize="lg"
            textDecoration={
              fortnite === true &&
              writing === false &&
              baking === false &&
              philosophy === false &&
              architecture === false
                ? 'underline'
                : null
            }
            textDecorationThickness={fortnite === true ? 3 : null}
            _hover={{ textDecoration: 'underline', textDecorationThickness: 3 }}
            cursor="pointer"
            onClick={() => {
              setFortnite(!fortnite);
              setWriting(false);
              setArchitecture(false);
              setBaking(false);
              setPhilosophy(false);
            }}
          >
            FORTNITE
          </Text>
        </Flex>
        <Flex align="center">
          <Text
            fontSize="lg"
            textDecoration={
              fortnite === false &&
              writing === true &&
              baking === false &&
              philosophy === false &&
              architecture === false
                ? 'underline'
                : null
            }
            textDecorationThickness={
              writing === true &&
              fortnite === false &&
              baking === false &&
              philosophy === false &&
              architecture === false
                ? 3
                : null
            }
            _hover={{ textDecoration: 'underline', textDecorationThickness: 3 }}
            cursor="pointer"
            onClick={() => {
              setWriting(!writing);
              setFortnite(false);
              setArchitecture(false);
              setBaking(false);
              setPhilosophy(false);
            }}
          >
            WRITING
          </Text>
        </Flex>
        {/* <Flex align="center">
          <Text
            fontSize="lg"
            textDecoration={
              fortnite === false &&
              writing === false &&
              baking === false &&
              philosophy === false &&
              architecture === true
                ? 'underline'
                : null
            }
            textDecorationThickness={
              writing === false &&
              fortnite === false &&
              baking === false &&
              philosophy === false &&
              architecture === true
                ? 3
                : null
            }
            _hover={{ textDecoration: 'underline', textDecorationThickness: 3 }}
            cursor="pointer"
            onClick={() => {
              setWriting(false);
              setFortnite(false);
              setArchitecture(!architecture);
              setBaking(false);
              setPhilosophy(false);
            }}
          >
            ARCHITECTURE
          </Text>
        </Flex> */}
        {/* <Flex align="center">
          <Text
            fontSize="lg"
            textDecoration={
              fortnite === false &&
              writing === false &&
              baking === true &&
              philosophy === false &&
              architecture === false
                ? 'underline'
                : null
            }
            textDecorationThickness={
              writing === false &&
              fortnite === false &&
              baking === true &&
              philosophy === false &&
              architecture === false
                ? 3
                : null
            }
            _hover={{ textDecoration: 'underline', textDecorationThickness: 3 }}
            onClick={() => {
              setWriting(false);
              setFortnite(false);
              setArchitecture(false);
              setBaking(!baking);
              setPhilosophy(false);
            }}
            cursor="pointer"
          >
            BAKING
          </Text>
        </Flex> */}
        {/* <Flex align="center">
          <Text
            fontSize="lg"
            textDecoration={
              fortnite === false &&
              writing === false &&
              baking === false &&
              philosophy === true &&
              architecture === false
                ? 'underline'
                : null
            }
            textDecorationThickness={
              writing === false &&
              fortnite === false &&
              baking === false &&
              philosophy === true &&
              architecture === false
                ? 3
                : null
            }
            _hover={{ textDecoration: 'underline', textDecorationThickness: 3 }}
            onClick={() => {
              setWriting(false);
              setFortnite(false);
              setArchitecture(false);
              setBaking(false);
              setPhilosophy(!philosophy);
            }}
            cursor="pointer"
          >
            PHILOSOPHY
          </Text>
        </Flex> */}
      </Flex>
      <Flex ml="3">
        {fortnite === true &&
        writing === false &&
        architecture === false &&
        baking === false &&
        philosophy === false ? (
          <Flex gap="2" direction="column">
            <SaveTheWorld />
            {/* <Legos /> */}
            {/* <BattleRoyal /> */}
          </Flex>
        ) : null}
        {fortnite === false &&
        writing === true &&
        architecture === false &&
        baking === false &&
        philosophy === false ? (
          <Flex gap="2" direction="column" fontSize="lg">
            <Text color="gray.500">Coming Soon</Text>
          </Flex>
        ) : null}
        {fortnite === false &&
        writing === false &&
        architecture === true &&
        baking === false &&
        philosophy === false ? (
          <Flex gap="2" direction="column" fontSize="lg">
            <Text>Arhitecture Theory</Text>
            <Text>Coding Fundamentals</Text>
          </Flex>
        ) : null}
        {fortnite === false &&
        writing === false &&
        architecture === false &&
        baking === true &&
        philosophy === false ? (
          <Flex gap="2" direction="column" fontSize="lg">
            <Text>Poolish Pizza</Text>
            <Text>Sourdough Bread</Text>
          </Flex>
        ) : null}
        {fortnite === false &&
        writing === false &&
        architecture === false &&
        baking === false &&
        philosophy === true ? (
          <Flex gap="2" direction="column" fontSize="lg">
            <Text>Analysis</Text>
          </Flex>
        ) : null}
      </Flex>

      <Divider mt="2" />
    </>
  );
};

export default NavBar;
