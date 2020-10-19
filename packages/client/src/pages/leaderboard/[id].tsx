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
import { CustomLink } from '../../components/helpers/CustomLink';
import { Layout } from '../../components/helpers/Layout';
import {
  useGetContestQuery,
  useLeaderBoardQuery,
  useMeQuery,
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

  const { data: me } = useMeQuery();

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
                <Text
                  mr={5}
                  fontSize="lg"
                  color={isDark ? 'gray.300' : 'gray.600'}
                >
                  {/* {['🥇', '🥈', '🥉'][index]} */}
                  {index + 1}.
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
                  <Box ml={2} mr={5}>
                    <Heading as="h6" fontSize="lg" fontWeight="medium">
                      {user?.user?.name}
                    </Heading>
                    <Text color={isDark ? 'gray.400' : 'gray.500'}>
                      {`@${user?.user?.name.toLowerCase().replace(/\s/, '')}`}
                    </Text>
                  </Box>
                  <Text color={isDark ? 'gray.100' : 'gray.800'} ml={2}>
                    {user.scored} / {user.total}
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
                  w="50%"
                  ml="auto"
                  mr={5}
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
                {user.user.id === me?.me?.id! ? (
                  <CustomLink href="#" text="Show Report" color="blue.400" />
                ) : (
                  <Text color="transparent" userSelect="none">
                    Show Report
                  </Text>
                )}
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
