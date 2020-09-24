import { Flex, Image, Tag, Text } from '@chakra-ui/core';
import NextLink from 'next/link';
import React from 'react';

export const LogoComponent: React.FC<{ tag?: boolean; size?: number }> = ({
  tag = true,
  size = 10,
}) => (
  <NextLink href="/">
    <Flex align="center" cursor="pointer" userSelect="none">
      <Image src={require('../../static/logo.svg')} w={size} />
      <Text fontWeight="semibold" fontSize="xl" mx={3}>
        Contest Pug
      </Text>
      {tag ? (
        <Tag
          fontSize="sm"
          py={1}
          variantColor="primary"
          display={['none', 'block']}
        >
          Alpha 0.1.x
        </Tag>
      ) : null}
    </Flex>
  </NextLink>
);
