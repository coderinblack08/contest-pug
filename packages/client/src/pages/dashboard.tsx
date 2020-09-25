import { Box, Flex, Heading, useColorMode, Skeleton } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Sidenav } from '../components/navigation/Sidenav';
import { useMeQuery } from '../generated/graphql';

const Dashboard: React.FC<{}> = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [loading, setLoading] = useState(true);
  const { data } = useMeQuery();

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <Flex>
      <Sidenav />
      <Box
        bg={!isDark ? 'gray.50' : null}
        w={['calc(100vw - 280px)', 'calc(100vw - 320px)']}
      >
        <Flex
          px={8}
          align="center"
          h={20}
          bg={isDark ? 'gray.700' : 'white'}
          borderBottomColor={isDark ? 'gray.800' : 'gray.100'}
          borderBottomStyle="solid"
          borderBottomWidth={1}
        >
          <Flex align="center">
            <Flex
              w="1.5rem"
              fill="none"
              stroke="currentColor"
              {...{
                viewBox: '0 0 24 24',
              }}
              size={[10, 10]}
              p={2}
              align="center"
              justify="center"
              rounded="full"
              bg={isDark ? 'gray.600' : 'gray.100'}
              color={isDark ? 'gray.400' : 'gray.500'}
              as="svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </Flex>
            <Box ml={4}>
              <Heading as="h6" fontSize="xl" fontWeight="medium">
                {loading || !data?.me ? (
                  <Skeleton w={32} h={6} />
                ) : (
                  data?.me?.name
                )}
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Dashboard;
