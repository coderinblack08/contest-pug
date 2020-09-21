import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { Menu as MenuIcon } from 'heroicons-react';
import NextLink from 'next/link';
import React from 'react';
import { DarkModeSwitch } from '../DarkModeSwitch';
import { Container } from '../helpers/Container';
import { LogoComponent } from '../static/LogoComponent';

export const Navbar: React.FC<{}> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const TextColor = colorMode === 'dark' ? 'gray.200' : 'gray.700';
  return (
    <Box color={TextColor as any}>
      <Flex justify="center">
        <Container>
          <Flex
            mx="auto"
            p={4}
            align="center"
            justify="space-between"
            direction={['column', 'column', 'row', 'row']}
          >
            <Flex
              justify="space-between"
              align="center"
              w={['100%', '100%', 'auto', 'auto']}
            >
              <LogoComponent />
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="menu"
                  icon={MenuIcon}
                  bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                  size="lg"
                  display={['flex', 'flex', 'none', 'none']}
                ></MenuButton>
                <MenuList>
                  <MenuItem>Our Message</MenuItem>
                  <MenuItem>Our Team</MenuItem>
                  <MenuItem>Login</MenuItem>
                  <MenuItem>Register</MenuItem>
                  <MenuItem onClick={toggleColorMode}>
                    Toggle{' '}
                    {`${colorMode[0].toUpperCase()}${colorMode.slice(1)}`} Mode
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Flex
              align="center"
              justify="items-center"
              display={['none', 'none', 'flex', 'flex']}
            >
              <NextLink href="/">
                <Menu>
                  <MenuButton
                    as={Text}
                    bg="transparent"
                    color={TextColor as any}
                    mr={8}
                  >
                    Our Message
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Landing Page</MenuItem>
                    <MenuItem>Our Goals</MenuItem>
                    <MenuItem>Open Source</MenuItem>
                  </MenuList>
                </Menu>
              </NextLink>
              <NextLink href="/team">
                <Link mr={8}>Our Team</Link>
              </NextLink>
              <NextLink href="/login">
                <Link mr={8}>Login</Link>
              </NextLink>
              <Button variantColor="primary" fontWeight="normal" mr={6}>
                Get Started
              </Button>
              <DarkModeSwitch />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};
