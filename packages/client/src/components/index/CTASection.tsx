/* eslint-disable max-len */
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/core';
import React from 'react';

export const CTASection: React.FC<{}> = () => (
  <Box w="100%" my={32} pos="relative">
    <Flex
      justify="center"
      align="center"
      pos="relative"
      direction={['column', 'column', 'column', 'row']}
    >
      <Flex justify="center">
        <Image
          src={require('../../static/images/godd-doggy.svg')}
          w={['70%', '50%', '40%', '80%']}
          zIndex={2}
          maxW="680px"
          mb={10}
        />
      </Flex>
      <Box maxW="680px" px={5}>
        <Text fontWeight="bold" fontSize="xl" color="primary.300">
          {'Award winning support'.toUpperCase()}
        </Text>
        <Heading fontSize="4xl" fontWeight="black" as="h4">
          We're here to help
        </Heading>
        <Text color="gray.400" fontSize="xl" my={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate
          aspernatur beatae dignissimos fugit repudiandae quo totam porro
          laborum delectus.
        </Text>
        <Button rightIcon="external-link" py={6} px={8}>
          Get Started
        </Button>
      </Box>
    </Flex>
  </Box>
);
