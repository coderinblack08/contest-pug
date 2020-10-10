import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  useColorMode,
} from '@chakra-ui/core';
import { Adjustments, FireOutline } from 'heroicons-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ContestCard } from '../components/dashboard/shared/ContestCard';
import { Layout } from '../components/helpers/Layout';
import {
  Contest,
  FindContestDocument,
  useFindContestQuery,
  useMeQuery,
} from '../generated/graphql';
import { client } from './_app';

const Contests: React.FC<{}> = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [loading, setLoading] = useState(true);
  const [query] = useState({ options: { limit: 10, cursor: null } });
  const { data: me } = useMeQuery();
  const { data: contests } = useFindContestQuery({
    variables: query,
  });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const contest = await client.readQuery({
          query: FindContestDocument,
          variables: query,
        });
        if (!contest) {
          setTimeout(() => setLoading(false), 800);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setTimeout(() => setLoading(false), 800);
      }
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Contest Pug | Contests</title>
      </Head>
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
        <Flex align="center">
          <Avatar
            w="10"
            h="10"
            rounded="full"
            name={loading ? undefined : me?.me?.name}
            src={
              loading
                ? undefined
                : `http://localhost:4000/images/${me?.me?.profilePicture}`
            }
          />
          <Box ml={4}>
            <Heading as="h6" fontSize="xl" fontWeight="medium">
              {loading || !me?.me ? <Skeleton w={32} h={6} /> : me?.me?.name}
            </Heading>
          </Box>
        </Flex>
        <ButtonGroup spacing={4}>
          <Button leftIcon="search" variantColor="primary" variant="solid">
            Search
          </Button>
          <Button
            rightIcon="arrow-forward"
            variantColor="primary"
            variant="outline"
            onClick={() => router.push('/create-contest')}
          >
            Create
          </Button>
        </ButtonGroup>
      </Flex>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalOverlay />
        <ModalContent rounded="md">
          <ModalHeader>Customize Search</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Comming Soon in Beta!</ModalBody>
          <ModalFooter>
            <Button
              variantColor="primary"
              mr={3}
              onClick={() => setModalOpen(false)}
            >
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box p={8}>
        <Flex
          justify="space-between"
          mb={[10, 10, 10, 5]}
          color={isDark ? 'gray.200' : 'gray.700'}
        >
          <Flex align="center">
            <FireOutline />
            <Heading fontSize="xl" fontWeight="semibold" ml={1}>
              Trending Contests
            </Heading>
          </Flex>
          <Flex align="center" onClick={() => setModalOpen(true)}>
            <Adjustments size={20} />
            <Link ml={2}>Customize Search</Link>
          </Flex>
        </Flex>
        <Flex
          wrap="wrap"
          justify={['center', 'center', 'center', 'flex-start']}
        >
          {contests?.findContests.map((contest, key) => (
            <ContestCard
              contest={contest as Contest}
              loading={loading}
              // eslint-disable-next-line react/no-array-index-key
              key={key}
            />
          ))}
        </Flex>
        {/* <Button
          onClick={() => {
            fetchMore({
              variables: {
                options: {
                  limit: variables?.options.limit,
                  cursor:
                    contests?.findContests[contests.findContests.length - 1]
                      .createdAt,
                },
              },
              updateQuery: (prev, { fetchMoreResult }) => {},
            });
          }}
        >
          Load More
        </Button> */}
      </Box>
    </Layout>
  );
};

export default Contests;
