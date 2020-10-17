import {
  Avatar,
  Box,
  Flex,
  Heading,
  Progress,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { NextPage } from 'next';
import React from 'react';
import { ContestNavbar } from '../../components/dashboard/shared/ContestNavbar';
import { Layout } from '../../components/helpers/Layout';
import {
  useGetContestQuery,
  useLeaderBoardQuery,
} from '../../generated/graphql';

const Leaderboard: NextPage<{ id: string }> = ({ id }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { data: contest } = useGetContestQuery({
    variables: { contestId: id },
  });

  const { data: leaderboard } = useLeaderBoardQuery({
    variables: { contestId: id },
  });

  if (contest?.getContest) {
    return (
      <Layout>
        <ContestNavbar id={id} />
        <Box p={[5, 8]}>
          <Box
            w="100%"
            mr={6}
            bg={isDark ? 'gray.700' : 'white'}
            p={5}
            shadow="sm"
            rounded="md"
          >
            {leaderboard?.leaderboard.length === 0 ? (
              <Text color={isDark ? 'gray.300' : 'gray.600'}>
                No Submissions
              </Text>
            ) : (
              <Heading size="md" mb={5}>
                Leaderboard
              </Heading>
            )}
            {leaderboard?.leaderboard.map((user, index) => (
              <Flex
                align="center"
                mb={index !== leaderboard.leaderboard.length - 1 ? 6 : 0}
              >
                <Text mr={5} fontWeight="bold" fontSize="lg">
                  {['🥇', '🥈', '🥉'][index]} {index + 1}.
                </Text>
                <Flex align="center">
                  <Avatar
                    w="10"
                    h="10"
                    rounded="full"
                    name={user.user.name}
                    src={`http://localhost:4000/images/${user.user.profilePicture}`}
                    mr={3}
                  />
                  <Text fontWeight="semibold" fontSize="lg">
                    {user.user.name}
                  </Text>
                  <Text color={isDark ? 'gray.300' : 'gray.500'} ml={2}>
                    (
                    {user.total === 0
                      ? '100'
                      : (user.scored / user.total).toPrecision(2) * 100}
                    %)
                  </Text>
                </Flex>
                <Progress
                  w="60%"
                  ml="auto"
                  value={(user.scored / user.total) * 100}
                  my={2}
                  color={(() => {
                    const score =
                      user.total === 0
                        ? '100'
                        : (user.scored / user.total).toPrecision(2) * 100;
                    if (score > 80) {
                      return 'green';
                    }
                    if (score > 60) {
                      return 'orange';
                    }
                    return 'red';
                  })()}
                  isAnimated
                  hasStripe
                />
              </Flex>
            ))}
          </Box>
        </Box>
      </Layout>
    );
  }
  return null;
};

Leaderboard.getInitialProps = ({ query }) => {
  return {
    id: query.id as string,
  };
};

export default Leaderboard;
