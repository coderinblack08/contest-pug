import { Flex } from '@chakra-ui/core';
import React from 'react';
import { Sidenav } from '../components/navigation/Sidenav';

const Dashboard: React.FC<{}> = () => {
  return (
    <Flex>
      <Sidenav />
    </Flex>
  );
};

export default Dashboard;
