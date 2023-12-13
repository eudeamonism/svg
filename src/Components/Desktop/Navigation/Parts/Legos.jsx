import { useState } from 'react';
import { Flex, Text, Center, Divider } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';

const Legos = () => {
  //Lego Switch
  const [legos, setLegos] = useState(false);
  //Survival
  const [survival, setSurvival] = useState(false);
  //News
  const [news, setNews] = useState(false);

  const legosMasterSwitch = () => {
    if (survival === true || news === true) {
      setSurvival(false);
      setNews(false);
      setLegos(!legos)
    } else if (survival === false || news === false) {
      setLegos(!legos);
    }
  };
  return (
    <Flex fontSize="lg">
      <Flex gap="2">
        <Flex>
          <Text
            onClick={() => {
              legosMasterSwitch();
            }}
            textDecoration={legos === true ? 'underline' : null}
            w="150px"
          >
            Legos
          </Text>
        </Flex>
        <Flex></Flex>
      </Flex>

      <Flex gap="2">
        {legos === true ? (
          <Flex direction="column" width="100px">
            <Flex justify="space-between" align="center">
              <Text
                onClick={() => {
                  setSurvival(!survival);
                  setNews(false);
                }}
                textDecoration={survival === true ? 'underline' : null}
              >
                Survival
              </Text>
              <Text as={MdChevronRight} mt="1" />
            </Flex>

            <Flex justify="space-between" align="center">
              <Text
                onClick={() => {
                  setSurvival(false);
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

      {(legos === true && survival === true) || news === true ? (
        <Center ml="2" mr="4">
          <Divider orientation="vertical" />
        </Center>
      ) : null}

      {survival === true && news === false ? (
        <Flex direction="column">
          <Text>Guide</Text>
          <Text color="gray.600">Coming Soon</Text>
        </Flex>
      ) : null}

      {survival === false && news === true ? (
        <Flex direction="column">
          <Text>Redeem Codes</Text>
          <Text color="gray.600">Coming Soon</Text>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Legos;
