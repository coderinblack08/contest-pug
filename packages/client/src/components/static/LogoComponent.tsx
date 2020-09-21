import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/core';
import NextLink from 'next/link';

export const LogoComponent: React.FC<{}> = () => (
  <NextLink href="/">
    <Flex align="center" cursor="pointer" userSelect="none">
      <Image src={require('../../static/logo.svg')} w={10} mr={3} />
      <Text fontWeight="semibold" fontSize="xl">
        Contest Pug
      </Text>
    </Flex>
  </NextLink>
);
