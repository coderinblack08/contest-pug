import { Flex, PseudoBox, useColorMode, Text } from '@chakra-ui/core';
import { StarOutline } from 'heroicons-react';
import { useRouter } from 'next/router';
import React from 'react';
import {
  useStarContestMutation,
  useGetContestQuery,
} from '../../../generated/graphql';
import { useIsCreator } from '../../../utils/useIsCreator';
import { CustomLink } from '../../helpers/CustomLink';

export const ContestNavbar: React.FC<{ id: string }> = ({ id }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [starContest] = useStarContestMutation();
  const isAuthor = useIsCreator(id);
  const { data: contest, refetch } = useGetContestQuery({
    variables: { contestId: id },
  });
  const router = useRouter();

  const pathName = router.pathname.split('/')[1];

  if (contest?.getContest) {
    return (
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
            color={
              isDark
                ? pathName === 'contest'
                  ? 'gray.300'
                  : 'gray.400'
                : 'gray.600'
            }
            bg={isDark && pathName === 'contest' ? 'gray.600' : undefined}
            shadow={pathName === 'contest' ? 'sm' : undefined}
            fontWeight="medium"
            href="/contest/[id]"
            hrefAs={`/contest/${contest.getContest.id}`}
            _hover={{
              textDecor: 'none',
            }}
            mr={5}
            px={5}
            py={2}
          />
          <CustomLink
            rounded="md"
            fontSize="lg"
            text="Leaderboard"
            color={
              isDark
                ? pathName === 'leaderboard'
                  ? 'gray.300'
                  : 'gray.400'
                : 'gray.500'
            }
            bg={isDark && pathName === 'leaderboard' ? 'gray.600' : undefined}
            shadow={pathName === 'leaderboard' ? 'sm' : undefined}
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
              rounded="md"
              fontSize="lg"
              text="Problems"
              color={
                isDark
                  ? pathName === 'problems'
                    ? 'gray.300'
                    : 'gray.400'
                  : 'gray.500'
              }
              bg={isDark && pathName === 'problems' ? 'gray.600' : undefined}
              shadow={pathName === 'problems' ? 'sm' : undefined}
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
    );
  }
  return null;
};