import { useState } from 'react';
import { Flex, Text, Center, Divider } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';

const BattleRoyal = () => {
  //Lego Switch
  const [battleRoyal, setBattleRoyal] = useState(false);
  //quests
  const [quests, setQuests] = useState(false);
  //News
  const [news, setNews] = useState(false);

  const battleRoyalMasterSwitch = () => {
    if (quests === true || news === true) {
      setQuests(false);
      setNews(false);
      setBattleRoyal(!battleRoyal)
    } else if (quests === false || news === false) {
      setBattleRoyal(!battleRoyal);
    }
  };
  return (
    <Flex fontSize="lg">
      <Flex gap="2">
        <Flex>
          <Text
            onClick={() => {
              battleRoyalMasterSwitch();
            }}
            textDecoration={battleRoyal === true ? 'underline' : null}
            w="150px"
          >
            Battle Royal
          </Text>
        </Flex>
        <Flex></Flex>
      </Flex>

      <Flex gap="2">
        {battleRoyal === true ? (
          <Flex direction="column" width="100px">
            <Flex justify="space-between" align="center">
              <Text
                onClick={() => {
                  setQuests(!quests);
                  setNews(false);
                }}
                textDecoration={quests === true ? 'underline' : null}
              >
                Quests
              </Text>
              <Text as={MdChevronRight} mt="1" />
            </Flex>

            <Flex justify="space-between" align="center">
              <Text
                onClick={() => {
                  setQuests(false);
                  setNews(!news);
                }}
                textDecoration={news === true ? 'underline' : null}
              >
                News
              </Text>
              <Text as={MdChevronRight} mt="1" />
            </Flex>
          </Flex>
        ) : null}
      </Flex>

      {(battleRoyal === true && quests === true) || news === true ? (
        <Center ml="2" mr="4">
          <Divider orientation="vertical" />
        </Center>
      ) : null}

      {quests === true && news === false ? (
        <Flex direction="column">
          <Text>Season TBD</Text>
          <Text color="gray.600">Coming Soon</Text>
        </Flex>
      ) : null}

      {quests === false && news === true ? (
        <Flex direction="column">
          <Text>Redeem Codes</Text>
          <Text color="gray.600">Coming Soon</Text>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default BattleRoyal;
