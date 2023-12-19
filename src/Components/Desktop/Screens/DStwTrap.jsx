import {
  Flex,
  Text,
  Heading,
  Box,
  Link,
  Card,
  Image,
  Stack,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';

import { HashLink } from 'react-router-hash-link';

import NavBar from '../Navigation/NavBar';

const DStwTrap = () => {
  return (
    <>
      <NavBar />
      <Flex direction="column" p="4">
        <Text mb="5" fontWeight="bold" fontSize="35px" id="stwfundamentals">
          Best Practices
        </Text>
        <Flex gap="1" direction="column" mb="20px">
          <Text fontSize="lg">
            &nbsp;&nbsp;&nbsp;&nbsp; It's hard to say definitively what the best
            practices are for Save the World (STW); however, here are a couple
            of things I would do differently if I started over. By the way, my
            Power Level (PL) is already 140, which means I've completed the game
            twice. Completing Canny Valley is considered the first playthrough,
            and finishing Twine and defeating the Mythical Storm King (MSK)
            marks the second completion. I've also completely filled my
            Collection Book for all currently obtainable items.
          </Text>

          <Text fontSize="lg">
            &nbsp;&nbsp;&nbsp;&nbsp; While any of the heroes listed in my
            loadouts are good choices, keep in mind that many of them are
            seasonal. See the following Excel sheet for more information.
          </Text>
        </Flex>

        <iframe
          src="https://docs.google.com/spreadsheets/d/1UOCfWQxMgdrjnf3TbUu3N3Dynx8eaSTG_-ThrO6SF-M/edit#gid=0"
          width="80%"
          height="700px"
        ></iframe>
        <Text mb="5" fontWeight="bold" fontSize="25px" mt="20px">
          Building your profile
        </Text>

        <Flex gap="1" direction="column">
          <Text fontSize="lg">
            &nbsp;&nbsp;&nbsp;&nbsp; Completing a variety of missions will also
            allow you to massively gather all the types of materials needed to
            power up your heroes, schematics, and survivors. Specifically,
            Ventures provide vouchers to select any one hero and schematic from
            the collection book before completing seasonal quests that unlock
            those schematics, with the exception of MSK weapons, which are only
            attainable upon completing the MSK.
          </Text>
          <Text fontSize="lg">
            &nbsp;&nbsp;&nbsp;&nbsp; Completing a variety of missions will also
            allow you to massively gather all the types of materials needed to
            power up your heroes, schematics, and survivors. Specifically,
            Ventures provide vouchers to select any one hero and schematic from
            the collection book before completing seasonal quests that unlock
            those schematics, with the exception of MSK weapons, which are only
            attainable upon completing the MSK.
          </Text>
          <Text fontSize="lg">
            &nbsp;&nbsp;&nbsp;&nbsp; Boost your progress by finding your people!
            Remember getting stuck in Stonewood forever? Avoid that by joining a
            dedicated Fortnite STW server. You'll connect with like-minded
            players at your level, making finding full lobbies and tackling
            difficult missions a breeze.
            <Text fontWeight="bold" mt="5px">
              Pro tip:
            </Text>{' '}
            I used to switch servers to EU, where STW seems much more active
            (like, 200% more!). Maybe explore different regions and find your
            perfect community.
          </Text>
        </Flex>
        <Text mt="30px" fontWeight="bold">
          Here's a good Fortnite STW server to join, below:
        </Text>
        <Flex
          mt="5px"
          mb="20px"
          p="2"
          borderRadius={5}
          w="275px"
          borderColor="blue.200"
          _dark={{ borderColor: 'blue.600' }}
          borderWidth="2px"
          cursor="pointer"
          align="center"
          justify="center"
          _hover={{ backgroundColor: 'blue.200' }}
        >
          <Link href="https://discord.gg/4rTJWVEQ" isExternal>
            <Text fontWeight="semibold" fontSize="20px">
              Fortnite: Save The World
            </Text>
          </Link>
        </Flex>
        <Text mb="5" fontWeight="bold" fontSize="25px" mt="20px" id="stwbest">
          Fundamentals of Traps and Trapping
        </Text>
        <Flex gap="1" direction="column">
          <Text fontSize="lg">
            &nbsp;&nbsp;&nbsp;&nbsp; There are three types of traps: wall,
            ceiling, and floor traps. Arguably, the best all-around traps are
            ceiling traps. Elevated properly, they're immune to husk damage from
            sploders and smashers. However, their Achilles' heel is the array of
            lobbers. In these cases, we turn to a hybrid solution: anti-air
            traps. A few of them, strategically placed above your base, can be
            the difference between successful ceiling traps and a broken base.
          </Text>
          <Text fontSize="lg">
            &nbsp;&nbsp;&nbsp;&nbsp; Completing a variety of missions will also
            allow you to massively gather all the types of materials needed to
            power up your heroes, schematics, and survivors. Specifically,
            Ventures provide vouchers to select any one hero and schematic from
            the collection book before completing seasonal quests that unlock
            those schematics, with the exception of MSK weapons, which are only
            attainable upon completing the MSK.
          </Text>
          <Text fontSize="lg">
            &nbsp;&nbsp;&nbsp;&nbsp; While some players rely on just three
            traps, this quick overview highlights five essential ones that'll
            set you up for success in any mission, including Endurance. Each one
            comes with its own ideal use case, expanding your toolbox for any
            situation.
          </Text>
        </Flex>

        <Flex direction="column" gap="6" mt="40px" mb="25px">
          <Flex
            width="800px"
            gap="2"
            p="2"
            borderWidth="2px"
            borderRadius="5"
            borderColor="black"
            _dark={{ borderColor: 'white' }}
          >
            <Image
              src="https://www.bing.com/th?id=OIP.26_fK2YxFhHzY8yAY5DmhQAAAA&w=172&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              width="250px"
            />
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="semibold">
                Wall Darts
              </Text>
              <Text fontSize="lg" mt="2">
                These darts pack a heavy punch, and they are able to shoot
                through walls that have certain types of openings. I typically
                rely on just a center window opening. And, on that opening, I
                place a Sound Wall. Make sure to place your wall dart between
                1-3 tiles distance.
              </Text>
            </Flex>
          </Flex>
          <Flex
            width="800px"
            gap="2"
            p="2"
            borderWidth="2px"
            borderRadius="5"
            borderColor="black"
            _dark={{ borderColor: 'white' }}
          >
            <Image
              src="https://th.bing.com/th/id/OIP.nqGv1HCpL6cw0x5UPTtBhQHaHa?rs=1&pid=ImgDetMain"
              width="250px"
            />
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="semibold">
                Sound Walls
              </Text>
              <Text fontSize="lg" mt="2">
                These are key in preventing sploders from wrecking your base
                with explosive propane tanks. Place these at entry points, but
                not spawn points since doing so will cause spawn points to
                automatically destory your trap.
              </Text>
            </Flex>
          </Flex>
          <Flex
            width="800px"
            gap="2"
            p="2"
            borderWidth="2px"
            borderRadius="5"
            borderColor="black"
            _dark={{ borderColor: 'white' }}
          >
            <Image
              src="https://th.bing.com/th/id/OIP.2E-s_C3MFpYnbiJnnT8PmAHaHa?rs=1&pid=ImgDetMain"
              width="250px"
            />
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="semibold">
                Ceiling Drop Trap
              </Text>
              <Text fontSize="lg" mt="2">
                These traps must be place at three walls length vertically, of
                course. Also, you must lay the trap facing the base, so that
                they propel the husk backwards. Accompanying these traps with
                floor freeze traps, can stall many husks from progressing.
              </Text>
            </Flex>
          </Flex>
          <Flex
            width="800px"
            gap="2"
            p="2"
            borderWidth="2px"
            borderRadius="5"
            borderColor="black"
            _dark={{ borderColor: 'white' }}
          >
            <Image
              src="https://th.bing.com/th/id/OIP.6w9_UtqeiGiXXEoRphQqCQAAAA?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              width="250px"
            />
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="semibold">
                Electric Ceiling Trap
              </Text>
              <Text fontSize="lg" mt="2">
                These should be place two tiles high.
              </Text>
            </Flex>
          </Flex>
          <Flex
            width="800px"
            gap="2"
            p="2"
            borderWidth="2px"
            borderRadius="5"
            borderColor="black"
            _dark={{ borderColor: 'white' }}
          >
            <Image
              src="https://th.bing.com/th/id/OIP.G7r4VXn2IImFMX4k5SbEKwHaHa?rs=1&pid=ImgDetMain"
              width="250px"
            />
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="semibold">
                Anti-Air Traps
              </Text>
              <Text fontSize="lg" mt="2">
                Simply put, these protect your base from aerial assault. Lobbers
                can lob projectiles as far as nine tiles away from your base.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default DStwTrap;
