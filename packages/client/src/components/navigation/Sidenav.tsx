import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  MeDocument,
  MeQuery,
  useLogoutMutation,
  useMeQuery,
} from '../../generated/graphql';
import { DarkModeSwitch } from '../DarkModeSwitch';
import { CustomLink } from '../helpers/CustomLink';
import { LogoComponent } from '../static/LogoComponent';

export const Sidenav: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [logout] = useLogoutMutation();
  const { data } = useMeQuery();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <Box
      w={['280px', '320px']}
      display={['none', 'none', 'none', 'block']}
      h="100vh"
      bg={isDark ? 'gray.700' : 'white'}
      borderRightColor={isDark ? 'gray.700' : 'gray.100'}
      borderRightStyle="solid"
      borderRightWidth={1}
      p={6}
    >
      <Flex px={2} pb={5} mt={-2}>
        <LogoComponent tag={false} />
      </Flex>
      <Flex
        align="center"
        p={4}
        onClick={() => router.push('/dashboard')}
        cursor="pointer"
      >
        <Image
          w="1.5rem"
          fill="none"
          stroke="currentColor"
          {...{
            viewBox: '0 0 24 24',
          }}
          color={isDark ? 'gray.400' : 'gray.500'}
          as="svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </Image>
        <Text
          fontSize="xl"
          color={isDark ? 'gray.400' : 'gray.500'}
          ml={3}
          fontWeight="medium"
        >
          Dashboard
        </Text>
      </Flex>
      <Flex
        align="center"
        p={4}
        onClick={() => router.push('/search')}
        cursor="pointer"
      >
        <Image
          w="1.5rem"
          fill="none"
          stroke="currentColor"
          {...{
            viewBox: '0 0 24 24',
          }}
          color={isDark ? 'gray.400' : 'gray.500'}
          as="svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </Image>
        <Text
          fontSize="xl"
          color={isDark ? 'gray.400' : 'gray.500'}
          ml={3}
          fontWeight="medium"
        >
          Search
        </Text>
      </Flex>
      <Flex
        align="center"
        p={4}
        onClick={() => router.push('/contests')}
        cursor="pointer"
      >
        <Image
          w="1.5rem"
          fill="none"
          stroke="currentColor"
          {...{
            viewBox: '0 0 24 24',
          }}
          color={isDark ? 'gray.400' : 'gray.500'}
          as="svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </Image>
        <Text
          fontSize="xl"
          color={isDark ? 'gray.400' : 'gray.500'}
          ml={3}
          fontWeight="medium"
        >
          Contests
        </Text>
      </Flex>
      <Flex
        align="center"
        p={4}
        onClick={() => router.push('/scores')}
        cursor="pointer"
      >
        <Image
          w="1.5rem"
          fill="none"
          stroke="currentColor"
          {...{
            viewBox: '0 0 24 24',
          }}
          color={isDark ? 'gray.400' : 'gray.500'}
          as="svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </Image>
        <Text
          fontSize="xl"
          color={isDark ? 'gray.400' : 'gray.500'}
          ml={3}
          fontWeight="medium"
        >
          Scores
        </Text>
      </Flex>
      <Flex
        justify="space-between"
        w={['280px', '320px']}
        bg={isDark ? 'gray.800' : 'gray.50'}
        borderRightColor={isDark ? 'gray.800' : 'gray.100'}
        borderTopColor={isDark ? 'gray.800' : 'gray.100'}
        borderRightStyle="solid"
        borderTopStyle="solid"
        borderRightWidth={1}
        borderTopWidth={1}
        pos="absolute"
        bottom="0"
        left="0"
        px={4}
        py={5}
      >
        <Flex>
          <Avatar
            w="10"
            h="10"
            rounded="full"
            src={
              loading
                ? undefined
                : `http://localhost:4000/images/${data?.me?.profilePicture}`
            }
          />
          <Box ml={4}>
            <Heading as="h6" fontSize="lg" fontWeight="medium">
              {loading || !data?.me ? (
                <Skeleton w={32} h={4} />
              ) : (
                data?.me?.name
              )}
            </Heading>
            <Text color={isDark ? 'gray.400' : 'gray.500'}>
              {loading || !data?.me ? (
                <Skeleton w={40} h={4} mt={2} />
              ) : (
                `@${data?.me?.name.toLowerCase().replace(/\s/, '')}`
              )}
            </Text>
          </Box>
        </Flex>
        <Flex>
          <DarkModeSwitch
            color={isDark ? 'gray.500' : 'gray.400'}
            bg="transparent"
          />
          <Menu>
            <MenuButton
              _focus={{ outline: 'none' }}
              {...{ variantColor: 'transparent' }}
              color={isDark ? 'gray.500' : 'gray.400'}
            >
              <svg
                width="1.5rem"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </MenuButton>
            <MenuList mb={3}>
              <MenuItem>
                <CustomLink text="Settings" href="/settings" />
              </MenuItem>
              <MenuItem>Upgrade</MenuItem>
              <MenuItem
                onClick={async () => {
                  await logout({
                    update: (cache) => {
                      cache.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                          __typename: 'Query',
                          me: null,
                        },
                      });
                    },
                  });
                  router.push('/login');
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};
