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
import React, { useEffect, useState } from 'react';
import { Layout } from '../components/helpers/Layout';
import { useMeQuery } from '../generated/graphql';

const Dashboard: React.FC<{}> = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [loading, setLoading] = useState(true);
  const { data: me } = useMeQuery();
  const [openBanner, setOpenBanner] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Contest Pug | Dashboard</title>
      </Head>
      <Flex
        px={8}
        align="center"
        justify="space-between"
        h={20}
        bg={isDark ? 'gray.700' : 'white'}
        borderBottomColor={isDark ? 'gray.800' : 'gray.100'}
        borderBottomStyle="solid"
        borderBottomWidth={1}
      >
        <Flex align="center">
          <Avatar
            w="10"
            h="10"
            rounded="full"
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
                Reminder! Your next contest Trivia Pug is in 2 days!
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
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi
            nemo nam. Suscipit saepe ipsam deserunt soluta cumque in sapiente et
            fuga excepturi accusamus id, aliquid quas cum doloribus eligendi!
          </ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box p={8}>
        <Flex justify="space-between">
          <Heading fontSize="xl" fontWeight="semibold">
            Upcoming
          </Heading>
          <Flex align="center" onClick={() => setModalOpen(true)}>
            <Adjustments size={20} />
            <Link ml={2}>Customize Search</Link>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Dashboard;
