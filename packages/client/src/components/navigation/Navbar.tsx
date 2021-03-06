import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { Menu as MenuIcon } from 'heroicons-react';
import NextLink from 'next/link';
import React from 'react';
import { DarkModeSwitch } from '../DarkModeSwitch';
import { Container } from '../helpers/Container';
import { LogoComponent } from '../static/LogoComponent';
import { CustomLink } from '../helpers/CustomLink';

export const Navbar: React.FC<{}> = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const TextColor = colorMode === 'dark' ? 'gray.200' : 'gray.700';
  const toggleColorModeCookie = () => {
    toggleColorMode();
    document.cookie = `isDarkMode=${colorMode === 'light'}`;
  };
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
                  {...{
                    icon: MenuIcon,
                  }}
                  bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                  size="lg"
                  display={['flex', 'flex', 'none', 'none']}
                />
                <MenuList>
                  <MenuGroup title="Our Message">
                    <MenuItem>
                      <CustomLink href="/" text="Landing Page" />
                    </MenuItem>
                    <MenuItem>
                      <CustomLink href="/" text="Our Goals" />
                    </MenuItem>
                    <MenuItem>
                      <CustomLink href="/" text="Open Source" />
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuItem>
                    <CustomLink href="/team" text="Our Team" />
                  </MenuItem>
                  <MenuItem>
                    <CustomLink href="/login" text="Login" />
                  </MenuItem>
                  <MenuItem>
                    <CustomLink href="/register" text="Register" />
                  </MenuItem>
                  <MenuItem onClick={toggleColorModeCookie}>
                    Toggle
                    {` ${colorMode[0].toUpperCase()}${colorMode.slice(1)}`}
                    Mode
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Flex
              align="center"
              justify="items-center"
              display={['none', 'none', 'flex', 'flex']}
            >
              <Menu>
                <MenuButton
                  _focus={{
                    shadow: 'outline',
                  }}
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
              <CustomLink href="/team" text="Our Team" mr={8} tabIndex={0} />
              <NextLink href="/login">
                <Link mr={8} tabIndex={0}>
                  Login
                </Link>
              </NextLink>
              <Button
                variantColor="primary"
                fontWeight="normal"
                mr={6}
                onClick={() => router.push('/register')}
              >
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
