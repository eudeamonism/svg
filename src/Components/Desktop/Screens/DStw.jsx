import { useState } from 'react';
import { MdChevronRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, Image, Divider } from '@chakra-ui/react';
import NavBar from '../Navigation/NavBar';

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
            mt="4"
            p="2"
            borderRadius="5"
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
            >
              HOME
            </Text>
            <Text
              as={MdChevronRight}
              color="gray.400"
              _dark={{ color: 'gray.600' }}
            />
            <Text color="gray.400" _dark={{ color: 'gray.600' }}>
              FORTNITE
            </Text>
            <Text
              as={MdChevronRight}
              color="gray.400"
              _dark={{ color: 'gray.600' }}
            />
            <Text color="gray.400" _dark={{ color: 'gray.600' }}>
              Save the World
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" mt="5" align="center">
          <Flex align="baseline">
            <Text fontWeight="bold" fontSize="30" mr="2">
              FORTNITE
            </Text>
            <Text fontWeight="semibold" fontSize="25">
              Save the World
            </Text>
          </Flex>
          <Text as="i" fontSize="sm" mt="-1" mb="1">
            Here's a minimal guide to give you what you need to grind STW.
          </Text>
          <Flex direction="column">
            <Image
              src="/assets/stwCover.jpg"
              width="600px"
              alt="Three characters from STW w/ purple gradient background"
              mt="2"
            />
            <Text
              fontSize="sm"
              as="i"
              color="gray.400"
              _dark={{ color: 'gray.600' }}
            >
              Image of Fortnite Save the World.
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="center">
          <Text fontWeight="bold" fontSize="x-large" mt="5" mb="2">
            LOADOUTS FAQs
          </Text>
          <Flex border="2px" direction="column" w="700px">
            <Text
              borderBottom="1px"
              p="2"
              fontSize="lg"
              fontWeight="semibold"
              _hover={{ fontSize: 'x-large' }}
              cursor="pointer"
              onClick={() => {
                navigate('/stw#loadouts');
              }}
            >
              What Constructor loadouts are best for BASE defense?
            </Text>
            <Text
              borderBottom="1px"
              p="2"
              fontSize="lg"
              fontWeight="semibold"
              _hover={{ fontSize: 'x-large' }}
              cursor="pointer"
              onClick={() => {
                alert('navlink goes here');
              }}
            >
              What Outlander loadouts are best for harvesting?
            </Text>
            <Text
              borderBottom="1px"
              p="2"
              fontSize="lg"
              fontWeight="semibold"
              _hover={{ fontSize: 'x-large' }}
              cursor="pointer"
              onClick={() => {
                alert('navlink goes here');
              }}
            >
              What Soldier loadouts are best for Ability damage?
            </Text>
            <Text
              borderBottom="1px"
              p="2"
              fontSize="lg"
              fontWeight="semibold"
              _hover={{ fontSize: 'x-large' }}
              cursor="pointer"
              onClick={() => {
                alert('navlink goes here');
              }}
            >
              What Ninja loadouts are best for Melee damage?
            </Text>
            <Text
              p="2"
              fontSize="lg"
              fontWeight="semibold"
              _hover={{ fontSize: 'x-large' }}
              cursor="pointer"
              onClick={() => {
                alert('navlink goes here');
              }}
            >
              What are some FUN loadouts?
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider mt="10" />

      <Flex direction="column" justify="center">
        <Flex direction="column" px="10" id="loadouts">
          <Text fontSize="xx-large" mt="20" fontWeight="bold">
            What Constructor loadouts are best for BASE defense?
          </Text>
          <Text fontSize="lg" mt="1" as="i">
            A great loadout for defending your base in missions --for example,
            Fight the Storm, Ride the Lightning, Retrieve the Data, Repair the
            Shelter, and Evacuate the Shelther -- would add defense to your
            base, for example:
          </Text>
          <Text fontSize="x-large" fontWeight="semibold" mt="10" mb="2">
            Double Tank Loadout
          </Text>
          <Text mb="5">
            This loadout boosts your base's strength by 84%. Every 10 seconds,
            your base's max defense replenishes four percent of its health, and
            repair speeds increase by ten percent. With Blast from the Past
            being your Team Perk, your armor increases by fifty-five, making you
            particularly effective against PL 160 missions with their
            potentially lethal minibosses. For added protection, try wielding an
            all armor perked Baron.
          </Text>
        </Flex>

        <Flex
          direction="column"
          border="2px"
          p="4"
          borderRadius="25"
          w="1200px"
          ml="10"
        >
          <Flex gap="4" fontSize="lg" align="center" mb="3">
            <Text fontWeight="semibold">Blast from the Past</Text>
            <Text fontSize="sm">
              Shields are gone but your health increases by two-hundred percent!
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
              <Text fontSize="lg" fontWeight="semibold">
                Commander
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                B.A.S.E Kyle
              </Text>
              <Image
                src="/assets/BaseKyle.png"
                boxSize="100px"
                borderRadius="full"
                bg="orange"
              />
              <Text fontSize="sm">84% added base health</Text>
            </Flex>
            <Flex direction="column" width="170px" align="center" gap="1">
              <Text fontSize="lg" fontWeight="semibold">
                Perk Support
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                Prehistoric Izza
              </Text>
              <Image
                src="/assets/PreHistoricIzza.webp"
                boxSize="100px"
                borderRadius="full"
                bg="orange"
              />
              <Text fontSize="sm">Armor increases by 33.</Text>
            </Flex>
            <Flex direction="column" width="170px" align="center" gap="1">
              <Text fontSize="lg" fontWeight="semibold">
                Perk Support
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                Rex Jonesy
              </Text>
              <Image
                src="/assets/RexJonesy.webp"
                boxSize="100px"
                borderRadius="full"
                bg="orange"
              />
              <Text fontSize="sm">
                Every sec adds 3% of health to next Ranged weapon hit.
              </Text>
            </Flex>
            <Flex direction="column" width="170px" align="center" gap="1">
              <Text fontSize="lg" fontWeight="semibold">
                Support
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                Bombsquad Kyle
              </Text>
              <Image
                src="/assets/BombSquadKyle.png"
                boxSize="100px"
                borderRadius="full"
                bg="orange"
              />
              <Text fontSize="sm">Armor increases by 22.</Text>
            </Flex>
            <Flex direction="column" width="170px" align="center" gap="1">
              <Text fontSize="lg" fontWeight="semibold">
                Support
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                Hotfixer Hazard
              </Text>
              <Image
                src="/assets/HotFixerHazard.png"
                boxSize="100px"
                borderRadius="full"
                bg="orange"
              />
              <Text fontSize="sm">Increases building repair by 10%</Text>
            </Flex>
            <Flex direction="column" width="170px" align="center" gap="1">
              <Text fontSize="lg" fontWeight="semibold">
                Support
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                Power B.A.S.E Knox
              </Text>
              <Image
                src="/assets/PowerBaseKnox.png"
                boxSize="100px"
                borderRadius="full"
                bg="orange"
              />
              <Text fontSize="sm">
                BASE (activated) heals 4% of max health every 10 seconds
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Text pl="10" fontSize="lg" mt="5">
          Tip: Minimize the area your BASE covers. There is a reason we are not
          using MEGA B.A.S.E Kyle, who increases the BASE connectivity range by
          1 in support and 3 as commander. The less your BASE covers, the more
          health it has.{' '}
        </Text>
      </Flex>

      <Divider mb="50px" mt="100px" />
    </>
  );
};

export default DStw;
