/* eslint-disable indent */
import {
  Box,
  Button,
  Flex,
  Heading,
  InputLeftElement,
  PseudoBox,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Layout } from '../components/helpers/Layout';
import InputField from '../components/register/InputField';
import InputFieldGroup from '../components/register/InputFieldGroup';

const CreateContest: React.FC<{}> = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [tab, setTab] = useState(1);

  return (
    <Layout>
      <Box px={[5, 10, 12]}>
        <Formik initialValues={{}} onSubmit={async () => {}} enableReinitialize>
          {({ isSubmitting }) => (
            <Form>
              <Stack py="10vh" justify="center">
                <Flex justify="space-between">
                  <Box>
                    <Heading
                      fontWeight="semibold"
                      color={isDark ? 'gray.200' : 'gray.600'}
                      fontSize="2xl"
                    >
                      {tab === 1
                        ? 'General Information'
                        : 'Technical Information'}
                    </Heading>
                    <Text fontWeight="medium" color="gray.400" fontSize="lg">
                      Basic settings for your contest
                    </Text>
                  </Box>
                  <Stack spacing={4} isInline fontWeight="medium">
                    <PseudoBox
                      rounded="md"
                      cursor="pointer"
                      {...{
                        bg: tab === 1 ? 'primary.500' : 'transparent',
                        shadow: tab === 1 ? 'lg' : null,
                        size: [10, 10],
                        align: 'center',
                        justify: 'center',
                        color:
                          tab === 1
                            ? 'white'
                            : isDark
                            ? 'primary.100'
                            : 'primary.500',
                      }}
                      _hover={{
                        bg:
                          tab === 1
                            ? null
                            : isDark
                            ? 'gray.700'
                            : 'primary.100',
                      }}
                    >
                      <Flex
                        onClick={() => setTab(1)}
                        size={[10, 10]}
                        align="center"
                        justify="center"
                      >
                        1
                      </Flex>
                    </PseudoBox>
                    <PseudoBox
                      rounded="md"
                      cursor="pointer"
                      {...{
                        bg: tab === 2 ? 'primary.500' : 'transparent',
                        shadow: tab === 2 ? 'lg' : null,
                        size: [10, 10],
                        align: 'center',
                        justify: 'center',
                        color:
                          tab === 2
                            ? 'white'
                            : isDark
                            ? 'primary.100'
                            : 'primary.500',
                      }}
                      _hover={{
                        bg:
                          tab === 2
                            ? null
                            : isDark
                            ? 'gray.700'
                            : 'primary.100',
                      }}
                    >
                      <Flex
                        onClick={() => setTab(2)}
                        size={[10, 10]}
                        align="center"
                        justify="center"
                      >
                        2
                      </Flex>
                    </PseudoBox>
                    <PseudoBox
                      _hover={{
                        bg: isDark ? 'gray.700' : 'primary.100',
                      }}
                      size={[10, 10]}
                      rounded="md"
                      cursor="pointer"
                      onClick={() => setTab(tab === 1 ? 2 : 1)}
                    >
                      <Flex
                        size={[10, 10]}
                        align="center"
                        justify="center"
                        bg="transparent"
                        color={isDark ? 'primary.200' : 'primary.500'}
                      >
                        <svg
                          width="1rem"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Flex>
                    </PseudoBox>
                  </Stack>
                </Flex>
                <Box
                  px={6}
                  py={8}
                  bg={isDark ? 'gray.700' : 'white'}
                  shadow="sm"
                  my={5}
                  rounded="md"
                >
                  <Box mb={5}>
                    <InputField
                      name="name"
                      placeholder="Example"
                      label="Contest Name"
                      {...{ maxW: 'lg' }}
                    />
                  </Box>
                  <Box>
                    <InputFieldGroup
                      name="website"
                      placeholder="https://example.com"
                      label="Website"
                      {...{ maxW: 'lg' }}
                    >
                      <InputLeftElement
                        color={isDark ? 'gray.500' : 'gray.300'}
                      >
                        <svg
                          width="1.25rem"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </InputLeftElement>
                    </InputFieldGroup>
                  </Box>
                </Box>
                <Box my={5}>
                  <Button
                    variantColor="primary"
                    p={6}
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Create Contest
                  </Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  );
};

export default CreateContest;
