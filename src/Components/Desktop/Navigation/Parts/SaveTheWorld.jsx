import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, Center, Divider } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';

const SaveTheWorld = () => {
  const [stw, setStw] = useState(false);
  const [stwLoad, setStwLoad] = useState(false);
  const [stwTrap, setStwTrap] = useState(false);
  const [stwUpdates, setStwUpdates] = useState(false);

  const navigate = useNavigate();

  const stwMasterSwitch = () => {
    if (stwLoad === true || stwTrap === true || stwUpdates === true) {
      setStwLoad(false);
      setStwTrap(false);
      setStwUpdates(false);
    } else if (stwLoad === false || stwTrap === false || stwUpdates === false) {
      setStw(!stw);
    }
  };
  return (
    <Flex fontSize="lg" mt={2}>
      <Flex gap="2">
        <Flex>
          <Text
            onClick={() => {
              stwMasterSwitch();
            }}
          >
            <Flex>
              <Text
                onClick={() => {
                  setStw(!stw);
                }}
                textDecoration={stw === false ? null : 'underline'}
                w="150px"
              >
                Save the World
              </Text>
            </Flex>
          </Text>
        </Flex>

        <Flex gap="2">
          {stw === true ? (
            <Flex direction="column" width="100px">
              <Flex justify="space-between" align="center">
                <Text
                  onClick={() => {
                    setStwLoad(!stwLoad);
                    setStwTrap(false);
                    setStwUpdates(false);
                  }}
                  textDecoration={
                    stwLoad === true && stwTrap === false ? 'underline' : null
                  }
                >
                  Loadouts
                </Text>
                <Text as={MdChevronRight} mt="1" />
              </Flex>
              <Flex justify="space-between" align="center">
                <Text
                  onClick={() => {
                    setStwTrap(!stwTrap);
                    setStwLoad(false);
                    setStwUpdates(false);
                  }}
                  textDecoration={
                    stwTrap === true && stwLoad === false ? 'underline' : null
                  }
                >
                  Trapping
                </Text>
                <Text as={MdChevronRight} mt="1" />
              </Flex>
              <Flex justify="space-between" align="center">
                <Text
                  onClick={() => {
                    setStwUpdates(!stwUpdates);
                    setStwLoad(false);
                    setStwTrap(false);
                  }}
                  textDecoration={
                    stwTrap === false &&
                    stwLoad === false &&
                    stwUpdates === true
                      ? 'underline'
                      : null
                  }
                >
                  Updates
                </Text>
                <Text as={MdChevronRight} mt="1" />
              </Flex>
            </Flex>
          ) : null}
        </Flex>

        <Flex>
          {(stw === true && stwLoad === true) ||
          stwUpdates === true ||
          stwTrap === true ? (
            <Center mr="4">
              <Divider orientation="vertical" />
            </Center>
          ) : null}

          {stwLoad === true && stwTrap === false && stwUpdates === false ? (
            <Flex direction="column">
              <Text
                onClick={() => {
                  navigate('/test');
                }}
              >
                Base
              </Text>
              <Text>Harvesting</Text>
              <Text>Special</Text>
            </Flex>
          ) : null}
          {stwTrap === true && stwLoad === false && stwUpdates === false ? (
            <Flex direction="column">
              <Text>Types</Text>
              <Text>Best Practices</Text>
            </Flex>
          ) : null}
          {stwUpdates === true && stwLoad === false && stwTrap === false ? (
            <Flex direction="column">
              <Text color="gray.600">Coming Soon</Text>
            </Flex>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SaveTheWorld;
