import { useState } from 'react';
import { Flex, Text, Divider } from '@chakra-ui/react';
import SaveTheWorld from './Parts/SaveTheWorld';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';

const NavBar = () => {
  const [fortnite, setFortnite] = useState(false);
  const [writing, setWriting] = useState(false);
  const [baking, setBaking] = useState(false);
  const [philosophy, setPhilosophy] = useState(false);
  const [architecture, setArchitecture] = useState(false);

  return (
    <>
      <Flex>
        <Flex mr="5">
          <ColorModeSwitcher />
        </Flex>
        <Flex justify="space-between" p="2" w="100%">
          <Text>LOGO</Text>

          <Text mr="10">Search</Text>
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
        <Flex align="center">
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
        </Flex>
        <Flex align="center">
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
          >
            BAKING
          </Text>
        </Flex>
        <Flex align="center">
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
          >
            PHILOSOPHY
          </Text>
        </Flex>
      </Flex>
      {fortnite === true &&
      writing === false &&
      architecture === false &&
      baking === false &&
      philosophy === false ? (
        <SaveTheWorld />
      ) : null}
      {fortnite === false &&
      writing === true &&
      architecture === false &&
      baking === false &&
      philosophy === false ? (
        <Text>Writing Stuff</Text>
      ) : null}
      {fortnite === false &&
      writing === false &&
      architecture === true &&
      baking === false &&
      philosophy === false ? (
        <Text>Architecture</Text>
      ) : null}
      {fortnite === false &&
      writing === false &&
      architecture === false &&
      baking === true &&
      philosophy === false ? (
        <Text>Baking</Text>
      ) : null}
      {fortnite === false &&
      writing === false &&
      architecture === false &&
      baking === false &&
      philosophy === true ? (
        <Text>Philosophy</Text>
      ) : null}
      <Divider mt="2" />
    </>
  );
};

export default NavBar;
