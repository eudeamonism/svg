import { MdChevronRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
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
} from '@chakra-ui/react';
import NavBar from '../Navigation/NavBar';
import { HashLink } from 'react-router-hash-link';

const DStw = () => {
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
              as={MdChevronRight}
              color="gray.400"
              _dark={{ color: 'gray.600' }}
              fontSize={['xs', 'xm', 'md']}
            />
            <Text
              color="gray.400"
              _dark={{ color: 'gray.600' }}
              fontSize={['xs', 'xm', 'md']}
            >
              FORTNITE
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
              Save the World
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" mt={[2, 5]} align="center">
          <Flex align="baseline">
            <Text fontWeight="bold" fontSize={[15, 30]} mr="2">
              FORTNITE
            </Text>
            <Text fontWeight="semibold" fontSize={[14, 25]}>
              Save the World
            </Text>
          </Flex>
          <Text as="i" fontSize={['x-small', 'sm']} mt="-1" mb="1">
            Here's a minimal guide to give you what you need to grind STW.
          </Text>
          <Flex direction="column">
            <Image
              src="/assets/stwCover.jpg"
              width={[300, 600]}
              alt="Three characters from STW w/ purple gradient background"
              mt={[1, 2]}
            />
            <Text
              fontSize={['x-small', 'sm']}
              as="i"
              color="gray.400"
              _dark={{ color: 'gray.600' }}
            >
              Image of Fortnite Save the World.
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Text fontWeight="bold" fontSize={[18, 24, 30]} mt={[2, 5]} mb="2">
            LOADOUTS FAQs
          </Text>

          <Flex border="2px" direction="column" p={[1, 3]} m={{ base: 2 }}>
            <HashLink to="/stw#constructor" smooth>
              <Text
                borderBottom="1px"
                p="2"
                fontSize={[13, 'lg']}
                fontWeight="semibold"
                _hover={{ fontSize: 'x-large' }}
                cursor="pointer"
              >
                What Constructor loadouts are best for BASE defense?
              </Text>
            </HashLink>
            <HashLink to="/stw#outlander" smooth>
              <Text
                borderBottom="1px"
                p="2"
                fontSize={['sm', 'lg']}
                fontWeight="semibold"
                _hover={{ fontSize: 'x-large' }}
                cursor="pointer"
              >
                What Outlander loadout is best for harvesting?
              </Text>
            </HashLink>
            <HashLink to="/stw#soldier">
              <Text
                borderBottom="1px"
                p="2"
                fontSize={['sm', 'lg']}
                fontWeight="semibold"
                _hover={{ fontSize: 'x-large' }}
                cursor="pointer"
              >
                What Soldier loadouts are best for Ability damage?
              </Text>
            </HashLink>

            <HashLink to="/stw#ninja" smooth>
              <Text
                borderBottom="1px"
                p="2"
                fontSize={['sm', 'lg']}
                fontWeight="semibold"
                _hover={{ fontSize: 'x-large' }}
                cursor="pointer"
              >
                What Ninja loadout is best for Melee damage?
              </Text>
            </HashLink>

            <HashLink to="/stw#fun">
              <Text
                p="2"
                fontSize={['sm', 'lg']}
                fontWeight="semibold"
                _hover={{ fontSize: 'x-large' }}
                cursor="pointer"
              >
                What are some FUN loadouts?
              </Text>
            </HashLink>
          </Flex>
        </Flex>
      </Flex>
      <Divider mt={[5, 10]} />

      <Flex direction="column" justify="center">
        <Flex direction="column" px={[5, 10]}>
          <Text
            fontSize={['lg', 'xx-large']}
            mt={[5, 20]}
            fontWeight="bold"
            id="constructor"
          >
            What Constructor loadouts are best for BASE defense?
          </Text>
          <Text fontSize={['md', 'lg']} mt="1" as="i">
            A great loadout for defending your base in missions --for example,
            Fight the Storm, Ride the Lightning, Retrieve the Data, Repair the
            Shelter, and Evacuate the Shelther -- would add defense to your
            base, for example:
          </Text>
          <Text
            fontSize={['lg', 'xx-large']}
            fontWeight="semibold"
            mt={[5, 10]}
            mb="2"
          >
            Double Tank Loadout
          </Text>
          <Text mb={[2, 5]} fontSize={['md', 'lg']}>
            This loadout ensure that your base has the most health and that it
            quickly heals itself. Also, you massively have lots of defense which
            comes in handy in higher level missions where the miniboss or takers
            can one shot you.
          </Text>
        </Flex>

        <Flex width={[350, 1200]} overflow="auto">
          <Flex
            direction="column"
            border={['1px', '2px']}
            p={[2, 4]}
            borderRadius="25"
            w="1200px"
            ml={[5, 10]}
          >
            <Flex gap={[2, 4]} fontSize="lg" align="center" mb="3">
              <Text fontWeight="semibold" fontSize={['sm', 'md']}>
                Blast from the Past
              </Text>
              <Text fontSize={['x-small', 'sm']}>
                Shields are gone but your health increases by two-hundred
                percent!
              </Text>
            </Flex>

            <Flex>
              <Flex
                direction="column"
                width={[100, 170]}
                align="center"
                gap="1"
                mr={[10, 20]}
              >
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Commander
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  B.A.S.E Kyle
                </Text>
                <Image
                  src="/assets/BaseKyle.png"
                  boxSize={[75, 100]}
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>84% added base health</Text>
              </Flex>
              <Flex direction="column" width="170px" align="center" gap="1">
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Perk Support
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Prehistoric Izza
                </Text>
                <Image
                  src="/assets/PreHistoricIzza.webp"
                  boxSize={[75, 100]}
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>Armor increases by 33.</Text>
              </Flex>
              <Flex direction="column" width="170px" align="center" gap="1">
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Perk Support
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Rex Jonesy
                </Text>
                <Image
                  src="/assets/RexJonesy.webp"
                  boxSize={[75, 100]}
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>
                  Every sec adds 3% of health to next Ranged weapon hit.
                </Text>
              </Flex>
              <Flex direction="column" width="170px" align="center" gap="1">
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Support
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Bombsquad Kyle
                </Text>
                <Image
                  src="/assets/BombSquadKyle.png"
                  boxSize={[75, 100]}
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>Armor increases by 22.</Text>
              </Flex>
              <Flex direction="column" width="170px" align="center" gap="1">
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Support
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Hotfixer Hazard
                </Text>
                <Image
                  src="/assets/HotFixerHazard.png"
                  boxSize={[75, 100]}
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>
                  Increases building repair by 10%
                </Text>
              </Flex>
              <Flex direction="column" width="170px" align="center" gap="1">
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Support
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Power B.A.S.E Knox
                </Text>
                <Image
                  src="/assets/PowerBaseKnox.png"
                  boxSize={[75, 100]}
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>
                  BASE (activated) heals 4% of max health every 10 seconds
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Text pl="10" fontSize={['sm', 'lg']} mt={[2, 5]}>
          Tip: Have your BASE's range low. This increases the overal health of
          your walls. This is the difference of having Smashers or Sploders
          destory your walls or not.
        </Text>
      </Flex>

      <Flex direction="column" justify="center">
        <Flex direction="column" px={[5, 10]} id="loadouts">
          <Text
            fontSize={['lg', 'x-large']}
            fontWeight="semibold"
            mt={[5, 10]}
            mb="2"
          >
            Frozen Base
          </Text>
          <Text mb={[2, 5]}>
            This loadout offers protection every few seconds or so, causing
            those who attack your walls to freeze. Just change your commander to
            Ice King. Swap out Hotfix Hazard for B.A.S.E Kyle. IMO this loadout
            is not as good as the Double Tank loadout because your walls are a
            lot weaker. Though Smashers can freeze, not all of them are caught;
            also, sploders can throw propane tanks at your base...
          </Text>
        </Flex>
      </Flex>

      <Divider mt={[50, 100]} />
      <Flex direction="column" justify="center">
        <Flex direction="column" px={[5, 10]} id="loadouts">
          <Text
            fontSize={['lg', 'x-large']}
            mt={[10, 20]}
            fontWeight="bold"
            id="outlander"
          >
            What Outlander loadout is best for harvesting?
          </Text>
          <Text fontSize={['sm', 'lg']} mt="1" as="i">
            This is the best farming loadout due to the amounts of anti-material
            charges you can use before waiting for it to regenerate.
          </Text>
          <Text
            fontSize={['lg', 'x-large']}
            fontWeight="semibold"
            mt={[5, 10]}
            mb="2"
          >
            Southie's Spam
          </Text>
          <Text mb={[2, 5]}>
            With depleted shields, Southie regens energy all the time to be able
            to spam anti-material charge and farm all sorts of stuff. Plus,
            having Clip in support, 33% of the time you get double materials!
            Overall, with Southie in the lead, you are spamming more than other
            loadouts, harvesting quicker!
          </Text>
        </Flex>
        <Flex w={[350, 1200]} overflow="auto" overflowX="auto">
          <Flex
            direction="column"
            border="2px"
            p="4"
            borderRadius="25"
            w="1200px"
            ml="10"
          >
            <Flex gap="4" fontSize={['sm', 'lg']} align="center" mb="3">
              <Text fontWeight="semibold">Blast from the Past</Text>
              <Text fontSize={['x-small', 'sm']}>
                Shields are gone but your health increases by two-hundred
                percent!
              </Text>
            </Flex>

            <Flex gap="5">
              <Flex
                direction="column"
                width="170px"
                align="center"
                gap="1"
                mr="20"
              >
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Commander
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Fossil Southie
                </Text>
                <Image
                  src="/assets/FossilSouthie.webp"
                  boxSize="100px"
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>
                  Regenerate 12 Energy per second!
                </Text>
              </Flex>
              <Flex direction="column" width="170px" align="center" gap="1">
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Perk Support
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Prehistoric Izza
                </Text>
                <Image
                  src="/assets/PreHistoricIzza.webp"
                  boxSize="100px"
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>Armor increases by 33.</Text>
              </Flex>
              <Flex direction="column" width="170px" align="center" gap="1">
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Perk Support
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Rex Jonesy
                </Text>
                <Image
                  src="/assets/RexJonesy.webp"
                  boxSize="100px"
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>
                  Every sec adds 3% of health to next Ranged weapon hit.
                </Text>
              </Flex>
              <Flex direction="column" width="170px" align="center" gap="1">
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Support
                </Text>
                <Text fontSize="md" fontWeight="semibold">
                  Cassie "Clip" Lipman
                </Text>
                <Image
                  src="/assets/Clip.webp"
                  boxSize="100px"
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>
                  Every third anti-material charge, harvest more.
                </Text>
              </Flex>
              <Flex direction="column" width="170px" align="center" gap="1">
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Support
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Archaeolo-Jess
                </Text>
                <Image
                  src="/assets/Jess.webp"
                  boxSize="100px"
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>
                  Anti-Material Charge 28% more efficient
                </Text>
              </Flex>
              <Flex direction="column" width="170px" align="center" gap="1">
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Support
                </Text>
                <Text fontSize={['sm', 'lg']} fontWeight="semibold">
                  Pathfinder Jess
                </Text>
                <Image
                  src="/assets/Pathfinder.webp"
                  boxSize="100px"
                  borderRadius="full"
                  bg="orange"
                />
                <Text fontSize={['x-small', 'sm']}>
                  Increase pickaxe damage by 17%
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Text pl="10" fontSize={['sm', 'lg']} mt="5">
          Tip: Consider using Cassie "Clip" Lipman as commander if your aim is
          to get more rarer items like quartz. You will be guaranteed double
          materials every time you antimaterial charge, but you must wait a lot
          more for it to regen. For the Southie build, swap Pathfinder Jess for
          Piercing Lotus Edge and your Earsplitter heavy attack will last a lot
          longer!
        </Text>
        <Divider mt={[50, 100]} />
        <Flex direction="column" justify="center">
          <Flex direction="column" px={[5, 10]} id="loadouts">
            <Text
              fontSize={['lg', 'x-large']}
              mt={[10, 20]}
              fontWeight="bold"
              id="soldier"
            >
              What Solider loadouts are best for Ability damage?
            </Text>
            <Text fontSize={['sm', 'lg']} mt="1" as="i">
              There are three soldier loadouts that have great ability damage.
              Preferably, the best one will have Diecast Jonesy in the lead.
            </Text>
            <Text
              fontSize={['lg', 'x-large']}
              fontWeight="semibold"
              mt={[5, 10]}
              mb="2"
            >
              Energy Minigun
            </Text>
            <Text mb={[2, 5]}>
              This is most powerful yet reload times are longer.
            </Text>
            <TableContainer>
              <Table variant="simple" size="sm">
                <TableCaption>
                  Team Perk: Happy Holidays (reduces cooldowns)
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Commander</Th>
                    <Th>Support 1</Th>
                    <Th>Support 2</Th>
                    <Th>Support 3</Th>
                    <Th>Support 4</Th>
                    <Th>Support 5</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Diecast Jonesy</Td>
                    <Td>Ted</Td>
                    <Td>Commando Spitfire</Td>
                    <Td>Your choice</Td>
                    <Td>Your choice</Td>
                    <Td>Your choice</Td>
                  </Tr>
                  <Tr>
                    <Td>Energy Minigun and damage increases by 50%</Td>
                    <Td>Crit Rating (10) & Crit Damage (100%) Minigun boost</Td>
                    <Td>Decreases Minigun cooldown by 30%</Td>
                    <Td>...</Td>
                    <Td>...</Td>
                    <Td>...</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Text
              fontSize={['lg', 'x-large']}
              fontWeight="semibold"
              mt={[5, 10]}
              mb="2"
            >
              Quick Reload Minigun
            </Text>
            <Text mb={[2, 5]}>
              Cooldown for minigun drastically reduced. Just swap Commando
              Spitfire for Diecast Jonesy in the chart above.
            </Text>
            <Text
              fontSize={['lg', 'x-large']}
              fontWeight="semibold"
              mt={[5, 10]}
              mb="2"
            >
              Explosion Lefty and Righty
            </Text>
            <Text mb={[2, 5]}>Powerful alternative to miniguns.</Text>
            <TableContainer>
              <Table variant="simple" size="sm">
                <TableCaption>
                  Team Perk: Happy Holidays (reduces cooldowns)
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Commander</Th>
                    <Th>Support 1</Th>
                    <Th>Support 2</Th>
                    <Th>Support 3</Th>
                    <Th>Support 4</Th>
                    <Th>Support 5</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Raven</Td>
                    <Td>Noir</Td>
                    <Td>Buccaneer Ramirez</Td>
                    <Td>Double Agent Evelynn</Td>
                    <Td>Your choice</Td>
                    <Td>Your choice</Td>
                  </Tr>
                  <Tr>
                    <Td>Energy L&R w/ 50% damage w/ explosions</Td>
                    <Td>Increases L&R up to ten seconds...</Td>
                    <Td>10% of L&R deal Cannon Ball damage</Td>
                    <Td>Every pistol kill coolsdown L&R by 1 sec</Td>
                    <Td>...</Td>
                    <Td>...</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Text
              fontSize={['lg', 'x-large']}
              fontWeight="semibold"
              mt={[5, 10]}
              mb="2"
            >
              Bouncy Lasers+
            </Text>
            <Text mb={[2, 5]}>
              This will cause energy lasers to reflect off walls. Just put
              Carbide in the lead and Raven in support.
            </Text>
          </Flex>
          <Text pl="10" fontSize={['sm', 'lg']} mt="5">
            Tip: Bouncy Lasers+ is great for Dungeons, while the rest of these
            loadouts is great for missions like Encampments and Eliminate and
            Collect.
          </Text>
        </Flex>
      </Flex>
      <Divider mt="100" />

      <Flex direction="column" justify="center">
        <Flex direction="column" px={[5, 10]} id="loadouts">
          <Text
            fontSize={['lg', 'x-large']}
            mt={[10, 20]}
            fontWeight="bold"
            id="ninja"
          >
            What Ninja loadout is best for Melee damage?
          </Text>
          <Text fontSize={['sm', 'lg']} mt="1" as="i">
            Overall, you are using Blast from the Past as a team perk and having
            Paleo Luna as the commander.
          </Text>
          <Text
            fontSize={['lg', 'x-large']}
            fontWeight="semibold"
            mt={[5, 10]}
            mb="2"
          >
            Paleo Luna Build
          </Text>
          <Text mb={[2, 5]}>
            This is most powerful yet reload times are longer.
          </Text>
          <TableContainer>
            <Table variant="simple" size="sm">
              <TableCaption>
                Team Perk: Blast from the Past (No shields, but 200% health)
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Commander</Th>
                  <Th>Perk 1</Th>
                  <Th>Perk 2</Th>
                  <Th>Support 3</Th>
                  <Th>Support 4</Th>
                  <Th>Support 5</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Paleo Luna</Td>
                  <Td>Prehistoric Izza</Td>
                  <Td>Your Choice</Td>
                  <Td>Lotus Assassin Sarah</Td>
                  <Td>Deadly Blade Crash</Td>
                  <Td>Swordmaster Ken</Td>
                </Tr>
                <Tr>
                  <Td>Adds 16.5% of Current Health to Melee Weapon Damage</Td>
                  <Td>Armor increases by 33</Td>
                  <Td>...</Td>
                  <Td>Boost attack damage up to 22.5%, triggered by elims.</Td>
                  <Td>
                    Critical hits cause affliction damage (37%) and snare.
                  </Td>
                  <Td>Shadow Stance increases sword damage by 25%.</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
        <Text pl="10" fontSize={['sm', 'lg']} mt="5">
          Tip: Use sword melees with double attack speed perks!
        </Text>
      </Flex>
      <Divider mt="100" />
      <Flex direction="column" justify="center">
        <Flex direction="column" px={[5, 10]} id="loadouts">
          <Text
            fontSize={['lg', 'x-large']}
            mt={[10, 20]}
            fontWeight="bold"
            id="fun"
          >
            What are some FUN loadouts?
          </Text>
          <Text fontSize={['sm', 'lg']} mt="1" as="i">
            The following loadouts will have you zipping across the map,
            spamming tons of abilities, and ...
          </Text>
          <Text
            fontSize={['lg', 'x-large']}
            fontWeight="semibold"
            mt={[5, 10]}
            mb="2"
          >
            Real Ninja Action
          </Text>
          <Text mb={[2, 5]}>
            You must have unlocked Wukong, though ironically, you do not use him
            in support, for he unlocks the team perk Soaring Mantis. This hero
            is unlockable in the shop sometime after the Winter Season.
            Considering adding Sniper Soldier supports to overpower your bow:
            JoneSee Bot, Redline Ramirez, and Rabbit Raider Jonesy.
          </Text>
          <TableContainer>
            <Table variant="simple" size="sm">
              <TableCaption>
                Team Perk: Soaring Mantis (Tripple Jump) and requires three
                ninjas.
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Commander</Th>
                  <Th>Perk 1</Th>
                  <Th>Perk 2</Th>
                  <Th>Perk 3</Th>
                  <Th>Support 4</Th>
                  <Th>Support 5</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Fleetwood Ken</Td>
                  <Td>Stoneheart Farrah</Td>
                  <Td>Dire</Td>
                  <Td>Your Ninja Choice</Td>
                  <Td>Your Choice</Td>
                  <Td>Your Choice</Td>
                </Tr>
                <Tr>
                  <Td>Increases movement speed by 37.5%</Td>
                  <Td>
                    Bow hits splinter arrows to three targets for some damage.
                  </Td>
                  <Td>
                    During evening and night, increases movement speed by 25%
                  </Td>
                  <Td>...</Td>
                  <Td>...</Td>
                  <Td>...</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Text
            fontSize={['lg', 'x-large']}
            fontWeight="semibold"
            mt={[5, 10]}
            mb="2"
          >
            Kunai Junk Spam
          </Text>
          <Text mb={[2, 5]}>
            Your throwing everything and the kitchen sink with this spam
            loadout!
          </Text>
          <TableContainer>
            <Table variant="simple" size="sm">
              <TableCaption>Team Perk: Happy Holidays</TableCaption>
              <Thead>
                <Tr>
                  <Th>Commander</Th>
                  <Th>Support 1</Th>
                  <Th>Support 2</Th>
                  <Th>Support 3</Th>
                  <Th>Support 4</Th>
                  <Th>Support 5</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Overtaker Hiro</Td>
                  <Td>Monks</Td>
                  <Td>Razor</Td>
                  <Td>Dashing Hare Ken</Td>
                  <Td>Bladestorm Enforcer</Td>
                  <Td>Lynx Kassandra</Td>
                </Tr>
                <Tr>
                  <Td>
                    Kunai Storm eliminations decrease Kunai Storm cooldown by
                    4.5 second(s)
                  </Td>
                  <Td>
                    Kunai Storm throws 6 Banana Peels that last for 8 seconds
                    and knock down and stun enemies for 2.3 seconds.
                  </Td>
                  <Td>
                    Kunai Storm unleashes 12 Crystal Daggers, which seek targets
                    and deal 32 base damage.
                  </Td>
                  <Td>
                    Kunai Storm throws 3 egg bombs, which each deal 37 base
                    damage to nearby enemies.
                  </Td>
                  <Td>
                    Daggers from Kunai storm explode shortly after impact,
                    dealing 4 base energy damage in 0.25 tile radius
                  </Td>
                  <Td>
                    Using Kunai Storm grants hover for 4 seconds. Increases
                    damage by 40% during hover
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
      <Divider mt="100" mb="50" />
    </>
  );
};

export default DStw;
