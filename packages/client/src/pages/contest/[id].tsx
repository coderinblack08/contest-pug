import {
  Box,
  Flex,
  Heading,
  Link,
  PseudoBox,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import {
  LinkOutline,
  MailOutline,
  PencilOutline,
  StarOutline,
} from 'heroicons-react';
import { NextPage } from 'next';
import React from 'react';
import { CustomLink } from '../../components/helpers/CustomLink';
import { Layout } from '../../components/helpers/Layout';
import {
  useGetContestQuery,
  useStarContestMutation,
} from '../../generated/graphql';
import { useIsCreator } from '../../utils/useIsCreator';

const Contest: NextPage<{ id: string }> = ({ id }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [starContest] = useStarContestMutation();
  const isAuthor = useIsCreator(id);
  const { data: contest, refetch } = useGetContestQuery({
    variables: { contestId: id },
  });

  if (contest?.getContest) {
    return (
      <Layout>
        <Flex
          px={8}
          h={20}
          w="100%"
          align="center"
          justify="space-between"
          bg={isDark ? 'gray.700' : 'white'}
          borderBottomColor={isDark ? 'gray.700' : 'gray.100'}
          borderBottomStyle="solid"
          borderBottomWidth={1}
        >
          <Flex>
            <CustomLink
              rounded="md"
              fontSize="lg"
              text="Homepage"
              color={isDark ? 'gray.300' : 'gray.600'}
              bg={isDark ? 'gray.600' : undefined}
              fontWeight="medium"
              href="/contest/[id]"
              hrefAs={`/contest/${contest.getContest.id}`}
              _hover={{
                textDecor: 'none',
              }}
              mr={5}
              px={5}
              py={2}
              shadow="sm"
            />
            <CustomLink
              fontSize="lg"
              text="Leaderboard"
              color={isDark ? 'gray.400' : 'gray.500'}
              fontWeight="medium"
              href="/contest/[id]"
              hrefAs={`/leaderboard/${contest.getContest.id}`}
              _hover={{
                textDecor: 'none',
              }}
              mr={5}
              px={5}
              py={2}
            />
            {isAuthor ? (
              <CustomLink
                fontSize="lg"
                text="Problems"
                color={isDark ? 'gray.400' : 'gray.500'}
                fontWeight="medium"
                href="/problems/[id]"
                hrefAs={`/problems/${contest.getContest.id}`}
                _hover={{
                  textDecor: 'none',
                }}
                mr={5}
                px={5}
                py={2}
              />
            ) : null}
          </Flex>
          <Flex>
            <PseudoBox
              tabIndex={0}
              shadow="sm"
              _focus={{
                shadow: 'outline',
                outline: 'none',
              }}
              rounded="sm"
              as="button"
              onClick={async () => {
                await starContest({
                  variables: { contestId: id },
                });
                await refetch();
              }}
            >
              <Flex align="center" color={isDark ? 'gray.400' : 'gray.500'}>
                <Flex
                  px={3}
                  py={2}
                  h="100%"
                  align="center"
                  roundedLeft="sm"
                  borderRightWidth={1}
                  borderRightStyle="solid"
                  bg={isDark ? 'gray.600' : 'gray.50'}
                  borderRightColor={isDark ? 'gray.800' : 'gray.200'}
                >
                  <StarOutline size={18} />
                  <Text ml={2} fontWeight="medium">
                    {contest.getContest.points}
                  </Text>
                </Flex>
                <Text
                  px={4}
                  py={2}
                  roundedRight="sm"
                  fontWeight="medium"
                  bg={isDark ? 'gray.800' : undefined}
                >
                  Star
                </Text>
              </Flex>
            </PseudoBox>
          </Flex>
        </Flex>
        <Flex
          p={8}
          align="flex-start"
          direction={['column-reverse', 'column-reverse', 'row', 'row']}
        >
          <Box
            w="100%"
            mr={8}
            bg={isDark ? 'gray.700' : 'white'}
            p={5}
            shadow="sm"
            rounded="md"
          >
            <Flex
              justify="space-between"
              color={isDark ? 'gray.200' : 'gray.700'}
            >
              <Heading fontSize="lg" mb={2}>
                Description
              </Heading>
              <Box color={isDark ? 'gray.400' : 'gray.500'}>
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
          </Box>
          <Box
            maxW="340px"
            bg={isDark ? 'gray.700' : 'white'}
            p={6}
            mb={[5, 5, 0, 0]}
            shadow="sm"
            rounded="md"
          >
            <Heading as="h6" fontSize="xl" fontWeight="semibold">
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
