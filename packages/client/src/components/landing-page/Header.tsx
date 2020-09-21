import { Box, Flex } from '@chakra-ui/core';
import React from 'react';

export const Header: React.FC<{}> = () => (
  <Flex justify="center" align="center">
    <Box maxW="xl" mt={[10, 12, 16, 28]} px={[4, 6, 8]} />
  </Flex>
);
