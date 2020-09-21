import { IconButton, useColorMode } from '@chakra-ui/core';
import React from 'react';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <IconButton
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      icon={isDark ? 'sun' : 'moon'}
      onClick={toggleColorMode}
      p={3}
      bg={!isDark ? 'white' : 'gray.800'}
      size={8 as any}
    />
  );
};
