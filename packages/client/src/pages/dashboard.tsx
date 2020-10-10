import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import { Adjustments } from 'heroicons-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ContestCard } from '../components/dashboard/shared/ContestCard';
import { Layout } from '../components/helpers/Layout';
import {
  Contest,
  JoinedContestsDocument,
  useJoinedContestsQuery,
  useMeQuery,
} from '../generated/graphql';
import { client } from './_app';

const Dashboard: React.FC<{}> = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [loading, setLoading] = useState(true);
  const [query] = useState({ options: { limit: 10, cursor: null } });
  const { data: me } = useMeQuery();
  const { data: contests } = useJoinedContestsQuery({
    variables: query,
  });
  const [openBanner, setOpenBanner] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const contest = await client.readQuery({
          query: JoinedContestsDocument,
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
        <title>Contest Pug | Dashboard</title>
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
      <AnimatePresence>
        {openBanner ? (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Flex bg="primary.500" py={4} px={6} align="center" color="white">
              <Box p={2} bg="primary.600" mr={5} rounded="md">
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </Box>
              <Text fontWeight="medium" fontSize="lg">
                Reminder! Your next contest
                {` ${
                  !loading
                    ? contests?.joinedContests[0]?.name || '...'
                    : 'loading'
                } `}
                is in 2 days!
              </Text>
              <Button ml="auto" variantColor="primary">
                Learn More
              </Button>
              <Icon
                name="close"
                aria-label="close"
                ml={5}
                w={3}
                cursor="pointer"
                onClick={() => setOpenBanner(false)}
              />
            </Flex>
          </motion.div>
        ) : null}
      </AnimatePresence>
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
        <Flex justify="space-between" mb={[10, 10, 10, 5]}>
          <Heading fontSize="xl" fontWeight="semibold">
            Upcoming Contests
          </Heading>
          <Flex align="center" onClick={() => setModalOpen(true)}>
            <Adjustments size={20} />
            <Link ml={2}>Customize Search</Link>
          </Flex>
        </Flex>
        <Flex
          wrap="wrap"
          justify={['center', 'center', 'center', 'flex-start']}
        >
          {contests?.joinedContests.map((contest, key) => (
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

export default Dashboard;
