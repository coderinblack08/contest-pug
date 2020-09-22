import { Box, Flex, Heading, Stack, Text, useColorMode } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  heading: string;
  text: string;
  icon: any;
}

const MotionBox = motion.custom(Box);

export const FeatureCard: React.FC<CardProps> = ({ heading, icon, text }) => {
  const { colorMode } = useColorMode();
  return (
    <MotionBox
      p={8}
      mx={4}
      mb={4}
      w={['100%', '100%', '100%', '30%']}
      rounded="lg"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.700'}
      shadow="sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Stack align="center" isInline spacing={3}>
        <Flex
          align="center"
          justify="center"
          size={[8, 8]}
          bg="primary.500"
          rounded="full"
        >
          {icon}
        </Flex>
        <Heading as="h6" fontSize="lg" fontWeight="medium">
          {heading}
        </Heading>
      </Stack>
      <Text my={3} color={colorMode === 'light' ? 'gray.500' : 'gray.400'}>
        {text}
      </Text>
    </MotionBox>
  );
};
