import { Box, Button, Flex, Link } from '@chakra-ui/core';
import NextLink from 'next/link';
import React from 'react';
import { LogoComponent } from '../static/LogoComponent';
import { Container } from '../helpers/Container';

export const Navbar: React.FC<{}> = ({}) => {
  return (
    <Box bg="white" color="gray.700">
      <Flex justify="center">
        <Container>
          <Flex mx="auto" p={4} align="center">
            <LogoComponent />
            <Flex align="center" justify="items-center" ml="auto">
              <NextLink href="/">
                <Link mr={8}>Our Message</Link>
              </NextLink>
              <NextLink href="/team">
                <Link mr={8}>Our Team</Link>
              </NextLink>
              <NextLink href="/login">
                <Link mr={8}>Login</Link>
              </NextLink>
              <Button variantColor="primary" fontWeight="normal">
                Get Started
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};
