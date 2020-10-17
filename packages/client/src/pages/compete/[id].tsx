import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import {
  BadgeCheckOutline,
  CalendarOutline,
  ClockOutline,
  SparklesOutline,
} from 'heroicons-react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ContestNavbar } from '../../components/dashboard/shared/ContestNavbar';
import { Layout } from '../../components/helpers/Layout';
import {
  useGetContestQuery,
  useHasSubmittedQuery,
  useMeQuery,
} from '../../generated/graphql';
import { timestampToDate } from '../../utils/timestampToDate';
import { useIsMember } from '../../utils/useIsMember';

const Compete: NextPage<{ id: string }> = ({ id }) => {
  const isMember = useIsMember(id);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { data: hasSubmitted } = useHasSubmittedQuery({
    variables: { contestId: id },
  });
  const { data: contest, loading: contestLoading } = useGetContestQuery({
    variables: { contestId: id },
  });

  const { data: me, loading: meLoading } = useMeQuery();

  const router = useRouter();

  useEffect(() => {
    if (!me?.me && !meLoading) {
      router.push(`/contest/${id}`);
    } else if (!isMember && !contestLoading && !meLoading) {
      router.push(`/contest/${id}`);
    }
  }, [isMember, contestLoading, meLoading, me]);

  console.log(hasSubmitted?.hasSubmitted);

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
            <Heading fontSize="lg">Contest Rules</Heading>
            <Box pb={4} pt={2}>
              <Box py={2}>
                <Flex align="center" mb={1}>
                  <ClockOutline size={18} />
                  <Heading
                    color={isDark ? 'gray.200' : 'gray.700'}
                    ml={1}
                    as="h6"
                    fontSize="md"
                    fontWeight="semibold"
                  >
                    Contest Length:
                  </Heading>
                </Flex>
                <Text color={isDark ? 'gray.300' : 'gray.600'}>
                  {` ${contest.getContest.length} minutes max`}
                </Text>
              </Box>
              <Flex>
                <Box py={2}>
                  <Flex align="center" mb={1}>
                    <CalendarOutline size={18} />
                    <Heading
                      color={isDark ? 'gray.200' : 'gray.700'}
                      ml={1}
                      as="h6"
                      fontSize="md"
                      fontWeight="semibold"
                    >
                      Submissions Start:
                    </Heading>
                  </Flex>
                  <Text color={isDark ? 'gray.300' : 'gray.600'}>
                    {timestampToDate(contest.getContest.startDate)}
                  </Text>
                </Box>
                <Box py={2} ml={8}>
                  <Flex align="center" mb={1}>
                    <CalendarOutline size={18} />
                    <Heading
                      color={isDark ? 'gray.200' : 'gray.700'}
                      ml={1}
                      as="h6"
                      fontSize="md"
                      fontWeight="semibold"
                    >
                      Submissions End:
                    </Heading>
                  </Flex>
                  <Text color={isDark ? 'gray.300' : 'gray.600'}>
                    {timestampToDate(contest.getContest.endDate)}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box pb={2}>
              <Flex align="center" mb={1}>
                <BadgeCheckOutline size={18} />
                <Heading
                  color={isDark ? 'gray.200' : 'gray.700'}
                  ml={1}
                  as="h6"
                  fontSize="md"
                  fontWeight="semibold"
                >
                  Contest Open
                  <Text
                    ml={2}
                    display="inline"
                    color={isDark ? 'gray.300' : 'gray.600'}
                    fontWeight="normal"
                  >
                    (overrides submission dates)
                  </Text>
                </Heading>
              </Flex>
              <Text color={isDark ? 'gray.300' : 'gray.600'}>
                {contest.getContest.open ? 'Yes' : 'No'}
              </Text>
            </Box>
            <Alert
              status="info"
              alignItems="flex-start"
              my={2}
              maxW="lg"
              rounded="md"
              color={isDark ? 'blue.100' : 'blue.600'}
            >
              <AlertIcon mt={1} />
              You can checkout the leaderboard and your individual report after
              the contest
            </Alert>
            <Box py={4}>
              <Button
                variantColor="primary"
                isDisabled={
                  !contest.getContest.inSession! || hasSubmitted?.hasSubmitted
                }
                onClick={() => router.push(`/test-session/${id}`)}
              >
                <Flex>
                  <SparklesOutline size={18} />
                  <Text ml={1}>Start Session</Text>
                </Flex>
              </Button>
            </Box>
          </Box>
        </Box>
      </Layout>
    );
  }
  return null;
};

Compete.getInitialProps = ({ query }) => {
  return {
    id: query.id as string,
  };
};

export default Compete;
