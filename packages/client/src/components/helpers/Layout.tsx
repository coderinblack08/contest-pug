import { Box, Flex, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { Sidenav } from '../navigation/Sidenav';

export const Layout: React.FC<{}> = ({ children }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Flex>
      <Sidenav />
      <Box
        h="100vh"
        bg={isDark ? 'gray.800' : 'gray.50'}
        w={['100%', '100%', '100%', 'calc(100vw - 320px)']}
      >
        {children}
      </Box>
    </Flex>
  );
};
