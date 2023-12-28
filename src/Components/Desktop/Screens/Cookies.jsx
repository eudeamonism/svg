import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  Flex,
  HStack,
  Text,
  Image,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
} from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';
import NavBar from '../Navigation/NavBar';

const Cookies = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Flex direction="column" align="center">
        <Flex justify="center">
          <Flex
            align="center"
            border="1px"
            mt={[2, 3, 4]}
            p={[1, 2, 3]}
            borderRadius={[3, 4, 5]}
            _dark={{ borderColor: 'gray.600' }}
            borderColor="gray.300"
          >
            <Text
              onClick={() => {
                navigate('/');
              }}
              _hover={{ cursor: 'pointer' }}
              color="blue.400"
              _dark={{ color: 'teal.600' }}
              align="center"
              as="u"
              fontSize={['xs', 'xm', 'md']}
            >
              HOME
            </Text>
            <Text
              fontSize={['xs', 'xm', 'md']}
              as={MdChevronRight}
              color="gray.400"
              _dark={{ color: 'gray.600' }}
            />
            <Text
              color="gray.400"
              _dark={{ color: 'gray.600' }}
              fontSize={['xs', 'xm', 'md']}
            >
              RECIPES
            </Text>
            <Text
              fontSize={['xs', 'xm', 'md']}
              as={MdChevronRight}
              color="gray.400"
              _dark={{ color: 'gray.600' }}
            />
            <Text
              color="gray.400"
              _dark={{ color: 'gray.600' }}
              fontSize={['xs', 'xm', 'md']}
            >
              Baking
            </Text>
            <Text
              fontSize={['xs', 'xm', 'md']}
              as={MdChevronRight}
              color="gray.400"
              _dark={{ color: 'gray.600' }}
            />
            <Text
              color="gray.400"
              _dark={{ color: 'gray.600' }}
              fontSize={['xs', 'xm', 'md']}
            >
              Cookies
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" mt={[2, 3, 4]} align="center">
          <Flex align="baseline">
            <Text fontWeight="bold" fontSize={[18, 24, 30]}>
              Cookie Recipes
            </Text>
          </Flex>
          <Text as="i" fontSize={[14, 20, 26]} mt="-1" mb="1">
            Simple cookie recipes.
          </Text>
          <Flex direction="column">
            <Image
              src="/assets/cookie.png"
              width={[300, 400]}
              alt="Cookie jar filled with cookies, illustration, peach background."
              mt="2"
            />
            <Text
              fontSize={[10, 16, 22]}
              as="i"
              color="gray.400"
              _dark={{ color: 'gray.600' }}
            >
              Dalle Generated AI Illustration of Cookie Jar
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Text fontWeight="bold" fontSize={[18, 24, 30]} mt={[2, 5]} mb="2">
            Cookie FAQ
          </Text>
          <Flex border="2px" direction="column" p={[1, 3]}>
            <HashLink to="#oatmeal" smooth>
              <Text
                /* borderBottom="1px" */
                p="2"
                fontSize={['md', 'lg']}
                fontWeight="semibold"
                _hover={{ fontSize: 'x-large' }}
                cursor="pointer"
              >
                How does one make Oatmeal Cookies?
              </Text>
            </HashLink>
          </Flex>
        </Flex>

        <Divider mt={[5, 10]} />

        <Text
          id="oatmeal"
          fontSize={['lg', 'xx-large']}
          fontWeight="semibold"
          mt={[5, 10]}
          mb={[2, 5]}
        >
          Oatmeal Cookie Recipe
        </Text>
        <Flex w={[300, 600]} direction="column">
          <Text mb={[5, 10]} fontSize={['sm', 'md']}>
            These hearty and healthy cookies have a fantastic taste, but
            remember: whole wheat flour plays a crucial role in binding them.
            Skip it, and you'll end up with a crumbly mess, more like granola
            than a cookie! Follow the recipe's simple steps to avoid a dense,
            disappointing outcome.
          </Text>
        </Flex>
        <Flex justify="flex-start" w={[300, 600]} direction="column" mt="5">
          <Text fontSize={['lg', 'x-large']} fontWeight="bold">
            Step One
          </Text>
          <Text fontSize={['md', 'lg']} mb="5">
            As you progress, check off your ingredients to ensure you have not
            doubled on missed out on some ingredients!
          </Text>
          <TableContainer >
            <Table size={['sm', 'lg']}>
              <Thead>
                <Tr>
                  <Th>Status</Th>
                  <Th>Ingredients</Th>
                  <Th>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Checkbox size={['md', 'lg']} colorScheme={'green'} />
                  </Td>
                  <Td>Oatmeal</Td>
                  <Td>Two Cups</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox size={['md', 'lg']} colorScheme="green" />
                  </Td>
                  <Td>Roasted Almonds</Td>
                  <Td>One Cup</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox size={['md', 'lg']} colorScheme="green" />
                  </Td>
                  <Td>Sugar</Td>
                  <Td>Three-quarters of a cup</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox size={['md', 'lg']} colorScheme="green" />
                  </Td>
                  <Td>Oil</Td>
                  <Td>Half of a cup</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox size={['md', 'lg']} colorScheme="green" />
                  </Td>
                  <Td>Salt</Td>
                  <Td>Half a teaspoon</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox size={['md', 'lg']} colorScheme="green" />
                  </Td>
                  <Td>Raisins</Td>
                  <Td>One Cup</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox size={['md', 'lg']} colorScheme="green" />
                  </Td>
                  <Td>Egg Whites</Td>
                  <Td>Three</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Checkbox size={['md', 'lg']} colorScheme="green" />
                  </Td>
                  <Td>Whole Wheat Flour</Td>
                  <Td>around half of a cup</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Text fontSize={['lg', 'x-large']} fontWeight="bold" mt="10">
            Step Two
          </Text>
          <Text fontSize={['md', 'lg']} mb="5">
            In a bowl, dump oatmeal, roasted almonds, sugar, whole wheat flour,
            and salt. Mix them well.
          </Text>
          <Text fontSize={['lg', 'x-large']} fontWeight="bold" mt="10">
            Step Three
          </Text>
          <Text fontSize={['md', 'lg']} mb="5">
            In another bowl, whisk the egg whites until they are foamy, somewhat
            stiff.
          </Text>
          <Text fontSize={['lg', 'x-large']} fontWeight="bold" mt="10">
            Step Four
          </Text>
          <Text fontSize={['md', 'lg']} mb="5">
            We are going to mix things in stages, to the dry ingredients. Start
            by mixing in the egg whites, then the oil, and finally the raisins.
          </Text>
          <Text fontSize={['lg', 'x-large']} fontWeight="bold" mt="10">
            Step Five
          </Text>
          <Text fontSize={['md', 'lg']} mb="5">
            Shape the batter into a disc the size of a cup with the thickness of
            an index finger. Place these discs on a cookie sheet that is lined
            with parchment paper, allowing two fingers distance around each
            cookie.
          </Text>
          <Text fontSize={['lg', 'x-large']} fontWeight="bold" mt="10">
            Step Six
          </Text>
          <Text fontSize={['md', 'lg']} mb="5">
            BAKE these cookies at 350 degrees Farenheit for around 15 - 25
            minutes! You may need more or less, and you'll know they are ready
            when there is browning at the edges of the cookies.
          </Text>
        </Flex>
        <Divider mt="10" mb="30" />
      </Flex>
    </>
  );
};

export default Cookies;
