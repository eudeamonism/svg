import {
  Flex,
  Text,
  Slide,
  useDisclosure,
  Center,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import NavBar from '../Navigation/NavBar';

const DDash = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex direction="column">
        <NavBar />
      </Flex>
      <Center mt={[2, 5]}>
        <Flex
          borderWidth="1px"
          borderColor="gray.200"
          _dark={{ borderColor: 'gray.700' }}
          direction="column"
          align="center"
          p={[2, 4]}
        >
          <Image src="/assets/Eude.svg" boxSize={[80, 250, 450]} />
          <Flex
            p="2"
            backgroundColor="green.100"
            _dark={{ backgroundColor: 'green.500' }}
            w="120px"
            borderRadius="10px"
            onClick={onToggle}
            justify="center"
            mt={[2, 4]}
          >
            <Text
              fontWeight="bold"
              fontSize={['sm', 'md', 'lg']}
              color="blue.700"
              _dark={{ color: 'green.100' }}
              cursor="pointer"
              _hover={{ fontStyle: 'italic' }}
            >
              About Us
            </Text>
          </Flex>
        </Flex>
      </Center>

      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Flex
          p="40px"
          color="blue.700"
          bg="green.100"
          _dark={{ backgroundColor: 'green.500', color: 'green.100' }}
          rounded="md"
          shadow="md"
        >
          <Text>
            We're an informational website, focusing on various gaming topics,
            articles, and recipes. Our website if fairly new, and we will be
            adding more topics and sub-topics soon. We hope to provide 'insider'
            secrets to topics posted in a very clear and effective way!
          </Text>
        </Flex>
      </Slide>
    </>
  );
};

export default DDash;
