import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, Spacer, useMediaQuery } from '@chakra-ui/react';
import DDash from './Desktop/Screens/DDash';
import MobileDash from './Mobile/Screens/MobileDash';


const Dashboard = () => {
  const navigate = useNavigate();

  const [isMobile] = useMediaQuery('(width < 600px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const [isTablet] = useMediaQuery(
    '(min-width: 600px) and (max-width: 1200px)',
    {
      ssr: true,
      fallback: false, // return false on the server, and re-evaluate on the client side
    }
  );

  const [isDesktop] = useMediaQuery('(min-width: 1201px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <Flex direction="column">
      {(isMobile && <MobileDash />) ||
        (isTablet && <DDash />) ||
        (isDesktop && <DDash />)}
    </Flex>
  );
};

export default Dashboard;
