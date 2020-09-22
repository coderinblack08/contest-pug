import { Flex, Image, Tag, Text } from '@chakra-ui/core';
import NextLink from 'next/link';
import React from 'react';

export const LogoComponent: React.FC<{}> = () => (
  <NextLink href="/">
    <Flex align="center" cursor="pointer" userSelect="none">
      <Image src={require('../../static/logo.svg')} w={10} />
      <Text fontWeight="semibold" fontSize="xl" mx={3}>
        Contest Pug
      </Text>
      <Tag
        fontSize="sm"
        py={1}
        variantColor="primary"
        display={['none', 'block']}
      >
        Alpha 0.1.x
      </Tag>
    </Flex>
  </NextLink>
);
