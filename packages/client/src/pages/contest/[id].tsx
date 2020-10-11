import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { LinkOutline, MailOutline, PencilOutline } from 'heroicons-react';
import { NextPage } from 'next';
import React from 'react';
import { ContestNavbar } from '../../components/dashboard/shared/ContestNavbar';
import { Layout } from '../../components/helpers/Layout';
import { useGetContestQuery } from '../../generated/graphql';

const Contest: NextPage<{ id: string }> = ({ id }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { data: contest } = useGetContestQuery({
    variables: { contestId: id },
  });

  if (contest?.getContest) {
    return (
      <Layout>
        <ContestNavbar id={id} />
        <Flex
          p={[5, 8]}
          align="flex-start"
          direction={['column-reverse', 'column-reverse', 'row', 'row']}
        >
          <Box
            w="100%"
            mr={6}
            bg={isDark ? 'gray.700' : 'white'}
            p={5}
            shadow="sm"
            rounded="md"
          >
            <Flex
              justify="space-between"
              color={isDark ? 'gray.200' : 'gray.700'}
              mb={2}
            >
              <Heading fontSize="lg" mr={1}>
                Description
              </Heading>
              <Box color={isDark ? 'gray.400' : 'gray.500'} ml={4}>
                <PencilOutline size={18} cursor="pointer" />
              </Box>
            </Flex>
            <Text
              color={isDark ? 'gray.300' : 'gray.600'}
              lineHeight="tall"
              fontSize="md"
            >
              {contest.getContest.description}
            </Text>
            <Flex
              mt={5}
              align="center"
              color={isDark ? 'gray.400' : 'gray.500'}
            >
              <Avatar
                size="sm"
                rounded="full"
                name={contest.getContest.creator.name}
                src={`http://localhost:4000/images/${contest.getContest.creator.profilePicture}`}
              />
              <Text ml={3} fontWeight="medium">
                Created by
                {` ${contest.getContest.creator.name}`}
              </Text>
            </Flex>
          </Box>
          <Box
            bg={isDark ? 'gray.700' : 'white'}
            mb={[5, 5, 0, 0]}
            rounded="md"
            maxW="340px"
            shadow="sm"
            p={6}
          >
            <Heading as="h6" fontSize="xl" fontWeight="semibold" mr={1}>
              {contest.getContest.name}
            </Heading>
            <Text color={isDark ? 'gray.300' : 'gray.600'} my={1}>
              {contest.getContest.thumbnail.substring(0, 100)}
              {contest.getContest.thumbnail.length > 100 ? '...' : null}
            </Text>
            {contest.getContest.website ? (
              <Flex
                align="center"
                mt={2}
                color={isDark ? 'gray.300' : 'gray.600'}
              >
                <LinkOutline size={20} />
                <Link
                  href={contest.getContest.website}
                  fontWeight="medium"
                  target="_blank"
                  color="#3F83F8"
                  ml={2}
                >
                  {contest.getContest.website}
                </Link>
              </Flex>
            ) : null}
            {contest.getContest.email ? (
              <Flex
                align="center"
                mt={2}
                color={isDark ? 'gray.300' : 'gray.600'}
              >
                <MailOutline size={20} />
                <Link href={`mailto:${contest.getContest.email}`} ml={2}>
                  {contest.getContest.email}
                </Link>
              </Flex>
            ) : null}
          </Box>
        </Flex>
        {/* <Flex align="center" justify="center" h="100vh">
          <CircularProgress isIndeterminate color="primary" />
        </Flex> */}
      </Layout>
    );
  }
  return null;
};

Contest.getInitialProps = ({ query }) => {
  return {
    id: query.id as string,
  };
};

export default Contest;
