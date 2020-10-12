import { Box, Heading, useColorMode } from '@chakra-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ContestNavbar } from '../../components/dashboard/shared/ContestNavbar';
import { Layout } from '../../components/helpers/Layout';
import {
  useFindProblemsQuery,
  useGetContestQuery,
  useHasSubmittedQuery,
  useMeQuery,
} from '../../generated/graphql';
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
  const { data: problems } = useFindProblemsQuery({
    variables: { contestId: id },
  });
  const { loading: meLoading } = useMeQuery();

  const router = useRouter();

  useEffect(() => {
    if (!isMember && !contestLoading && !meLoading) {
      router.push(`/contest/${id}`);
    }
  }, [isMember, contestLoading, meLoading]);

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
            <Heading fontSize="lg">{contest.getContest.name}</Heading>
            Testing starts now mother fuckers
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
