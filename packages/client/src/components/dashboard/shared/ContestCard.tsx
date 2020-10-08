import {
  Box,
  Flex,
  Heading,
  Skeleton,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';
import { Contest } from '../../../generated/graphql';

interface ContestCardProps {
  contest: Contest;
  loading: boolean;
}

export const ContestCard: React.FC<ContestCardProps> = ({
  contest,
  loading = false,
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Link href="/contest/[id]" as={`/contest/${contest.id}`}>
      <Flex
        m={2}
        direction="column"
        justify="space-between"
        bg={isDark ? 'gray.700' : 'white'}
        maxW={['xl', 'xl', 'xl', 'md']}
        w="100%"
        rounded="md"
        shadow="sm"
        cursor="pointer"
      >
        <Box p={5}>
          {loading ? (
            <>
              <Skeleton h={4} w={32} />
              <Skeleton h={6} w={56} mt={2} />
              <Skeleton h={4} w="xs" mt={4} />
              <Skeleton h={4} w="xs" mt={2} />
            </>
          ) : (
            <>
              <Text color={isDark ? 'gray.400' : 'gray.500'}>
                {new Date(parseInt(contest.startDate, 10)).toLocaleDateString(
                  'en',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </Text>
              <Heading fontSize="xl" my={2}>
                {contest.name}
              </Heading>
              <Text color={isDark ? 'gray.300' : 'gray.500'}>
                {contest.thumbnail.substring(0, 100)}
                {contest.thumbnail.length > 100 ? '...' : null}
              </Text>
            </>
          )}
        </Box>
        <Flex
          bg={isDark ? '#3b475b' : 'gray.50'}
          py={3}
          px={5}
          mt="auto"
          roundedBottom="md"
        >
          <Flex color={isDark ? 'gray.300' : 'gray.500'} align="center">
            <svg
              width="1rem"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            {loading ? (
              <Skeleton h={4} w={32} ml={4} />
            ) : (
              <Text ml={2}>{contest.tags.join(', ')}</Text>
            )}
          </Flex>
          <Flex ml={5} color={isDark ? 'gray.300' : 'gray.500'} align="center">
            <svg
              width="1rem"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {loading ? (
              <Skeleton h={4} w={20} ml={4} />
            ) : (
              <Text ml={2}>120 Participants</Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};
