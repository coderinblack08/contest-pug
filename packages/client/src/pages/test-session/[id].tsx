/* eslint-disable indent */
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Tag,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { ClockOutline, PaperAirplaneOutline } from 'heroicons-react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ContestNavbar } from '../../components/dashboard/shared/ContestNavbar';
import { Layout } from '../../components/helpers/Layout';
import {
  AnswerInput,
  useFetchSessionQuery,
  useFindProblemsQuery,
  useGetContestQuery,
  useHasSubmittedQuery,
  useMeQuery,
  useStartSessionMutation,
  useSubmitAnswersMutation,
} from '../../generated/graphql';
import { dateDiff } from '../../utils/dateDiff';
import { formatTime } from '../../utils/formatTime';
import { useIsMember } from '../../utils/useIsMember';

const Compete: NextPage<{ id: string }> = ({ id }) => {
  const [, setElapsed] = useState(0);
  const isMember = useIsMember(id);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const {
    data: hasSubmitted,
    loading: submittedLoading,
  } = useHasSubmittedQuery({
    variables: { contestId: id },
  });
  const { data: contest, loading: contestLoading } = useGetContestQuery({
    variables: { contestId: id },
  });
  const { data: problems, refetch: refetchProblems } = useFindProblemsQuery({
    variables: { contestId: id },
    errorPolicy: 'ignore',
  });
  const { data: me, loading: meLoading } = useMeQuery();
  const [startSession] = useStartSessionMutation();
  const {
    data: fetchSession,
    refetch: refetchSession,
    loading: sessionLoading,
  } = useFetchSessionQuery({
    variables: { contestId: id },
  });
  const [submitAnswers] = useSubmitAnswersMutation();
  const router = useRouter();

  useEffect(() => {
    if (!me?.me && !meLoading) {
      router.push(`/contest/${id}`);
    } else if (
      !isMember &&
      !contestLoading &&
      !meLoading &&
      contest?.getContest?.inSession &&
      !hasSubmitted?.hasSubmitted
    ) {
      router.push(`/contest/${id}`);
    }
  }, [isMember, contestLoading, contest, meLoading, me, hasSubmitted]);

  useEffect(() => {
    if (hasSubmitted?.hasSubmitted && !submittedLoading) {
      router.push(`/contest/${id}`);
    }
  }, [submittedLoading, hasSubmitted]);

  useEffect(() => {
    (async () => {
      if (!fetchSession?.fetchSession && !sessionLoading) {
        try {
          await startSession({ variables: { contestId: id } });
        } catch (error) {
          console.error(error);
        }
        await refetchProblems();
        await refetchSession();
      }
    })();
  }, [refetchSession, sessionLoading, contestLoading]);

  useEffect(() => {
    const interval = setInterval(async () => {
      setElapsed((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const [form, setForm] = useState<{ [key: string]: string }>({});

  const submit = async () => {
    await submitAnswers({
      variables: {
        options: {
          contestId: id,
          answers: problems?.findProblems.map(
            (problem): AnswerInput => ({
              problemId: problem.id,
              answer:
                `answer${problem.id}` in form
                  ? form[`answer${problem.id}`]
                  : '',
            })
          ) as AnswerInput[],
        },
      },
      update: (cache) => {
        cache.evict({ fieldName: 'findScores' });
        cache.evict({ fieldName: 'leaderboard' });
        cache.evict({ fieldName: 'findProblems' });
        cache.evict({ fieldName: 'hasSubmitted' });
      },
    });
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      setElapsed((time) => time + 1);
      if (
        contest?.getContest?.length! * 60 -
          Math.floor(
            dateDiff(new Date(fetchSession?.fetchSession!), new Date())
          ) <=
          0 &&
        !contestLoading
      ) {
        await submit();

        router.push(`/contest/${id}`);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [contest, contestLoading, fetchSession, problems, form]);

  if (contest?.getContest) {
    return (
      <Layout>
        <ContestNavbar id={id} />
        <Stack p={[5, 8]} my="4vh" spacing={2}>
          <Flex justify="space-between">
            <Box>
              <Heading
                fontWeight="semibold"
                color={isDark ? 'gray.200' : 'gray.600'}
                fontSize="2xl"
                lineHeight={0}
              >
                {contest.getContest.name}
              </Heading>
              <Text fontWeight="medium" color="gray.400" mt={4} fontSize="lg">
                <span aria-label="tada" role="img">
                  {'🎉 '}
                </span>
                Good luck on your contest!
              </Text>
            </Box>

            <Flex
              color={isDark ? 'gray.300' : 'gray.600'}
              fontWeight="medium"
              fontSize="lg"
              align="center"
            >
              <ClockOutline size={18} />
              {!sessionLoading && !contestLoading ? (
                <Text ml={1}>
                  {fetchSession?.fetchSession
                    ? formatTime(
                        contest.getContest.length * 60 -
                          Math.floor(
                            dateDiff(
                              new Date(fetchSession?.fetchSession!),
                              new Date()
                            )
                            // dont need to minus elapsed because new Date re-renders
                          )
                      )
                    : 'Loading...'}
                </Text>
              ) : null}
            </Flex>
          </Flex>
          <Box w="100%">
            <form
              onSubmit={async (e) => {
                console.log(form);
                e.preventDefault();
                await submit();
                router.push(`/contest/${id}`);
              }}
            >
              <Box py={2}>
                {problems?.findProblems.map((problem, index) => (
                  <Box mb={6} key={problem.id}>
                    <Flex
                      justify="flex-end"
                      mb={3}
                      color={isDark ? 'gray.300' : 'gray.600'}
                    >
                      <Tag variantColor="primary" size="md">
                        {`${problem.points} points`}
                      </Tag>
                    </Flex>
                    <Box
                      key={problem.id}
                      bg={isDark ? 'gray.700' : 'white'}
                      rounded="md"
                      shadow="sm"
                      w="100%"
                      p={5}
                    >
                      <Text>
                        {`${index + 1}. `}
                        {problem.shortAnswerId
                          ? problem.shortAnswer?.question
                          : null}
                      </Text>
                      <Input
                        id={`answer${problem.id}`}
                        mt={3}
                        placeholder="Answer"
                        maxW="sm"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newForm = { ...form };
                          newForm[`answer${problem.id}`] = e.target.value;
                          setForm(newForm);
                        }}
                        _focus={{
                          shadow: 'outline',
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
              <Button variantColor="primary" type="submit" p={5}>
                <Flex align="center">
                  <PaperAirplaneOutline size={16} />
                  <Text ml={2}>Submit</Text>
                </Flex>
              </Button>
            </form>
          </Box>
        </Stack>
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
