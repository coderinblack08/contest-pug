import { Box } from '@chakra-ui/core';
import React from 'react';

export const Container: React.FC<{}> = ({ children }: any) => (
  <Box w={['650px', '768px', '1024px', '1280px']}>{children}</Box>
);
