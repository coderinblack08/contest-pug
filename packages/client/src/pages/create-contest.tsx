/* eslint-disable indent */
import {
  Box,
  Flex,
  FormLabel,
  Button,
  Heading,
  InputLeftElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PseudoBox,
  Stack,
  Tag,
  Text,
  useColorMode,
  Checkbox,
} from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../components/helpers/Layout';
import InputField from '../components/forms/InputField';
import InputFieldGroup from '../components/forms/InputFieldGroup';
import { useCreateContestMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';

const CreateContest: React.FC<{}> = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const isDark = colorMode === 'dark';
  const [tab, setTab] = useState(1);
  const [createContest] = useCreateContestMutation();
  const [tags, setTags] = useState<string[]>([]);

  const onKeyDown = (keyEvent: any) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  return (
    <Layout>
      <Box px={[5, 10, 12]}>
        <Formik
          initialValues={{
            name: '',
            website: '',
            email: '',
            thumbnail: '',
            description: '',
            tags: '',
            length: 0,
            startDate: '',
            endDate: '',
            private: false,
            leaderboard: false,
          }}
          onSubmit={async (values, { setErrors }) => {
            const contest = {
              ...values,
              tags,
            };
            const response = await createContest({
              variables: { options: contest },
            });
            if (response.data?.createContest.errors) {
              const errorMap = toErrorMap(response.data.createContest.errors);
              if (errorMap.endDate?.includes('must be a `date` type')) {
                errorMap.endDate = 'Please enter an end date';
              } else if (
                errorMap.startDate?.includes('must be a `date` type')
              ) {
                errorMap.startDate = 'Please enter an start date';
              }
              setErrors(errorMap);
            } else {
              router.push('/dashboard');
            }
          }}
          enableReinitialize
        >
          {({
            isSubmitting,
            handleChange,
            values,
            handleBlur,
            setFieldValue,
          }) => (
            <Form onKeyDown={onKeyDown}>
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
                      transition="ease 0.3s"
                      tabIndex={0}
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
                      transition="ease 0.3s"
                      tabIndex={0}
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
                      transition="ease 0.3s"
                      size={[10, 10]}
                      rounded="md"
                      cursor="pointer"
                      onClick={() => setTab(tab === 1 ? 2 : 1)}
                      tabIndex={0}
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
                  py={4}
                  bg={isDark ? 'gray.700' : 'white'}
                  shadow="sm"
                  my={5}
                  rounded="md"
                >
                  {tab === 1 ? (
                    <>
                      <Box my={5}>
                        <InputField
                          name="name"
                          placeholder="Example"
                          label="Contest Name"
                          {...{ maxW: 'lg' }}
                        />
                      </Box>
                      <Box my={5}>
                        <InputFieldGroup
                          name="website"
                          placeholder="https://example.com"
                          label="Contest Website"
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
                      <Box my={5}>
                        <InputFieldGroup
                          name="email"
                          placeholder="contact@example.com"
                          label="Contest Email"
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
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </InputLeftElement>
                        </InputFieldGroup>
                      </Box>
                      <Box my={5}>
                        <InputField
                          textarea
                          name="thumbnail"
                          placeholder="Contest Thumbnail"
                          label="Contest Thumbnail"
                          {...{ maxW: 'xl', h: 32 }}
                        />
                      </Box>
                      <Box my={5} maxW="xl">
                        <InputField
                          textarea
                          name="description"
                          placeholder="Contest Description"
                          label="Contest Description"
                          {...{ maxW: 'xl', h: 40 }}
                        >
                          <Flex
                            borderStyle="solid"
                            borderWidth={1}
                            borderColor={isDark ? 'gray.600' : 'gray.200'}
                            bg={isDark ? 'gray.600' : 'gray.50'}
                            fontWeight="medium"
                            roundedBottom="md"
                            fontSize="sm"
                            py={2}
                            px={5}
                            color={isDark ? 'gray.400' : 'gray.500'}
                          >
                            <svg
                              width="1.25rem"
                              aria-hidden="true"
                              focusable="false"
                              role="img"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"
                              />
                            </svg>
                            <Text ml={2}>Markdown supported</Text>
                          </Flex>
                        </InputField>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box my={5}>
                        <InputField
                          name="tags"
                          placeholder="Mathematics"
                          label="Contest Tags"
                          {...{ maxW: 'lg', mb: 4 }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && values.tags.trim()) {
                              setTags([...tags, values.tags]);
                              setFieldValue('tags', '');
                            }
                          }}
                        />
                        {tags.map((tag, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <Tag mr={2} mb={2} key={index} variantColor="primary">
                            {tag}
                          </Tag>
                        ))}
                      </Box>
                      <Box my={5}>
                        <FormLabel htmlFor="name" mb={1}>
                          Contest Length (minutes)
                        </FormLabel>
                        <NumberInput
                          maxW="lg"
                          min={0}
                          onChange={(value) => setFieldValue('length', value)}
                        >
                          <NumberInputField
                            name="length"
                            value={values.length}
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Box>
                      <Flex my={5}>
                        <InputField
                          name="startDate"
                          label="Contest Start Date"
                          date
                        />
                        <InputField
                          name="endDate"
                          label="Contest End Date"
                          date
                        />
                      </Flex>
                      <Box my={5}>
                        <Checkbox
                          name="private"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.private as any}
                        >
                          Private Contest
                        </Checkbox>
                      </Box>
                      <Box my={5}>
                        <Checkbox
                          name="leaderboard"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.leaderboard as any}
                        >
                          Enable leaderboard
                        </Checkbox>
                      </Box>
                    </>
                  )}
                </Box>
                {tab === 2 ? (
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
                ) : null}
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  );
};

export default CreateContest;
