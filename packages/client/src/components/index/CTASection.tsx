/* eslint-disable max-len */
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/core';
import React from 'react';

export const CTASection: React.FC<{}> = () => (
  <Box w="100%" my={32} pos="relative">
    <Flex
      justify="center"
      align="flex-start"
      pos="relative"
      direction={['column', 'column', 'column', 'row']}
    >
      <Flex justify="center">
        <Image
          src={require('../../static/images/contestpug.svg')}
          w={['20rem', '20rem', '20rem', '35rem']}
          zIndex={2}
          maxW="680px"
          mb={10}
          mr={12}
        />
      </Flex>
      <Box maxW="680px" px={5} mt={20}>
        <Text fontWeight="semibold" fontSize="xl" color="primary.300">
          {'Award winning support'.toUpperCase()}
        </Text>
        <Heading fontSize="4xl" fontWeight="black" as="h4">
          We're here to help
        </Heading>
        <Text color="gray.400" fontSize="xl" my={5}>
          Contest Pug has around the clock support with unique cutting edge
          features. If you have any questions or concerns, please "paws" and
          send us your questions. We're here to help!
        </Text>
        <Button rightIcon="external-link" py={6} px={8}>
          Get Started
        </Button>
      </Box>
    </Flex>
  </Box>
);
