import { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const SaveTheWorld = () => {
  const [stw, setStw] = useState(false);
  const [stwLoad, setStwLoad] = useState(false);
  const [stwTrap, setStwTrap] = useState(false);
  const [stwUpdates, setStwUpdates] = useState(false);

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
    <>
      <Flex gap="2">
        <Flex>
          <Text
            onClick={() => {
              stwMasterSwitch();
            }}
          >
            <Text
              onClick={() => {
                setStw(!stw);
              }}
              fontWeight={stw === false ? null : 'bold'}
            >
              Save the World
            </Text>
          </Text>
        </Flex>
        <Flex gap="2">
          {stw === true ? (
            <Flex direction="column">
              <Text
                onClick={() => {
                  setStwLoad(!stwLoad);
                  setStwTrap(false);
                  setStwUpdates(false);
                }}
                fontWeight={
                  stwLoad === true && stwTrap === false ? 'bold' : null
                }
              >
                Loadouts
              </Text>
              <Text
                onClick={() => {
                  setStwTrap(!stwTrap);
                  setStwLoad(false);
                  setStwUpdates(false);
                }}
                fontWeight={
                  stwTrap === true && stwLoad === false ? 'bold' : null
                }
              >
                Trapping
              </Text>
              <Text
                onClick={() => {
                  setStwUpdates(!stwUpdates);
                  setStwLoad(false);
                  setStwTrap(false);
                }}
              >
                Updates
              </Text>
            </Flex>
          ) : null}
        </Flex>
        {stwLoad === true && stwTrap === false && stwUpdates === false ? (
          <Flex direction="column">
            <Text>Base</Text>
            <Text>Harvesting</Text>
            <Text>Special</Text>
          </Flex>
        ) : null}
        {stwTrap === true && stwLoad === false && stwUpdates === false ? (
          <Flex direction="column">
            <Text color="gray.50" _dark={{ color: 'gray.600' }}>
              |
            </Text>
            <Text>Best Practices</Text>
            <Text>Harvesting</Text>
            <Text>Special</Text>
          </Flex>
        ) : null}
        {stwUpdates === true && stwLoad === false && stwTrap === false ? (
          <Flex direction="column">
            <Text color="gray.50" _dark={{ color: 'gray.600' }}>
              |
            </Text>
            <Text color="gray.50" _dark={{ color: 'gray.600' }}>
              |
            </Text>
            <Text color="gray.600">Coming Soon</Text>
          </Flex>
        ) : null}
      </Flex>
    </>
  );
};

export default SaveTheWorld;
