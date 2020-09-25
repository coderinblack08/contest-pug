import { IconButton, useColorMode } from '@chakra-ui/core';
import React from 'react';

export const DarkModeSwitch = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const toggleColorModeCookie = () => {
    toggleColorMode();
    document.cookie = `isDarkMode=${colorMode === 'light'}`;
  };
  return (
    <IconButton
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      icon={isDark ? 'sun' : 'moon'}
      onClick={toggleColorModeCookie}
      p={3}
      bg={!isDark ? 'white' : 'gray.800'}
      size={8 as any}
      {...props}
    />
  );
};
