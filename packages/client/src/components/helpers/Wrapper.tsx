import { Box } from '@chakra-ui/core';
import * as React from 'react';

interface Props {
  variant?: 'small' | 'regular';
}

const Wrapper: React.FC<Props> = ({ children, variant = 'regular' }) => (
  <Box
    mt={8}
    mx="auto"
    maxW={variant === 'regular' ? '880px' : '460px'}
    w="100%"
  >
    {children}
  </Box>
);

export default Wrapper;
