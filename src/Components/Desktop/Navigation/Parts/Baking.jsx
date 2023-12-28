import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Flex, Text, Center, Divider } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';

const Baking = () => {
  const [bakingButton, setBakingButton] = useState(false);

  const navigate = useNavigate();

  return (
    <Flex fontSize={['sm', 'md', 'lg']} mt={2} cursor="pointer">
      <Flex gap="2">
        <Flex>
          <Text
            onClick={() => {
              setBakingButton(!bakingButton);
            }}
            textDecoration={bakingButton === false ? null : 'underline'}
            w={[75,150]}
          >
            Baking
          </Text>
        </Flex>
      </Flex>
      <Flex gap="2">
        {bakingButton === true ? (
          <Flex direction="column">
            <Text
              onClick={() => {
                navigate('/cookies');
              }}
            >
              Cookies
            </Text>
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default Baking;
