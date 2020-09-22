import React from 'react';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/core';

export const Header: React.FC<{}> = () => (
  <Flex justify="center" align="center" my={[10, 20]}>
    <Box mx="auto" maxW="1280px" mt={[10, 12, 16, 28]} px={[4, 6, 8]}>
      <Flex>
        <Box textAlign="center">
          <Heading
            as="h1"
            fontWeight="black"
            fontSize={['4xl', '6xl']}
            lineHeight="none"
          >
            Insipring Contests
            <br />
            <Text
              style={{
                background: 'linear-gradient(145deg,#12c2e9,#c471ed,#f64f59)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Minus the Hassle
            </Text>
          </Heading>
          <Text
            color="gray.400"
            fontSize={['md', 'lg']}
            maxW={['lg', 'xl']}
            my={[3, 5]}
          >
            Contest Pug delivers a platform for both educators and students to
            easily create and take contests while practicing social distancing.
          </Text>
          <Stack isInline justify="center">
            <Button variantColor="primary" shadow="md" px={8} py={6}>
              Get Started
            </Button>
            <Button
              variantColor="white"
              color="primary.500"
              shadow="md"
              px={8}
              py={6}
            >
              Dashboard
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  </Flex>
);
