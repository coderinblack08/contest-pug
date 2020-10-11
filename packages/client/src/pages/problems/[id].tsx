import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Tag,
  Text,
} from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { DotsVertical } from 'heroicons-react';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import omitDeep from 'omit-deep';
import cloneDeep from 'clone-deep';
import { useRouter } from 'next/router';
import { ContestNavbar } from '../../components/dashboard/shared/ContestNavbar';
import InputField from '../../components/forms/InputField';
import { Layout } from '../../components/helpers/Layout';
import {
  FindProblemsDocument,
  FindProblemsQuery,
  Problem,
  useCreateShortAnswerMutation,
  useDeleteProblemMutation,
  useFindProblemsQuery,
  useGetContestQuery,
  useMeQuery,
  useUpdateShortAnswerMutation,
} from '../../generated/graphql';

const Contest: NextPage<{ id: string }> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  // const { colorMode } = useColorMode();
  const router = useRouter();
  const { data: me, loading: meLoading } = useMeQuery();

  // const isDark = colorMode === 'dark';
  const [updateShortAnswer] = useUpdateShortAnswerMutation();
  const [deleteProblem] = useDeleteProblemMutation();
  const { data: problems, variables, refetch } = useFindProblemsQuery({
    variables: { contestId: id },
  });
  const [createShortAnswer] = useCreateShortAnswerMutation();
  const { data: contest, loading: contestLoading } = useGetContestQuery({
    variables: { contestId: id },
  });

  useEffect(() => {
    if (!meLoading && !me?.me) {
      router.push(`/contest/${id}`);
    } else if (
      !contestLoading &&
      contest?.getContest?.creator.id !== me?.me!.id
    ) {
      router.push(`/contest/${id}`);
    }
  }, [meLoading, me, contestLoading, contest]);

  const initialValues = () => {
    if (problems?.findProblems) {
      const map: any = {};
      for (let i = 0; i < problems?.findProblems.length; i += 1) {
        map[`problem${i}`] =
          problems.findProblems[i].shortAnswer?.question || '';
        map[`answer${i}`] = problems.findProblems[i].shortAnswer?.answer || '';
        map[`points${i}`] = problems.findProblems[i].points;
      }
      return map;
    }
    return null;
  };

  if (contest?.getContest) {
    return (
      <>
        {problems?.findProblems ? (
          <Formik
            initialValues={initialValues()}
            enableReinitialize
            onSubmit={() => {}}
          >
            {({ values }) => (
              <Layout>
                <ContestNavbar id={id} />
                <Box p={8}>
                  <Form>
                    {problems.findProblems.map((problem, index) => (
                      <Box m={5} key={problem.id}>
                        <Flex justify="space-between" align="center" mb={5}>
                          <Flex align="center">
                            <Text ml={2}>{`Problem ${index + 1}`}</Text>
                            {problem.shortAnswer ? (
                              <Tag variantColor="green" size="sm" ml={4}>
                                Short Answer
                              </Tag>
                            ) : (
                              <Tag variantColor="primary" size="sm" ml={4}>
                                Free Response
                              </Tag>
                            )}
                          </Flex>
                          <Flex align="center">
                            <Flex align="center">
                              <InputField
                                name={`points${index}`}
                                {...{ w: '45px', textAlign: 'center' }}
                                type="number"
                              />
                              <Text fontWeight="medium" ml={4}>
                                points
                              </Text>
                            </Flex>
                            <Box ml={5} cursor="pointer">
                              <Popover placement="bottom" closeOnBlur={false}>
                                <PopoverTrigger>
                                  <DotsVertical size={20} />
                                </PopoverTrigger>
                                <PopoverContent zIndex={4} shadow="md">
                                  <PopoverHeader
                                    pt={4}
                                    fontWeight="bold"
                                    border="0"
                                  >
                                    Problem Options
                                  </PopoverHeader>

                                  <PopoverArrow />
                                  <PopoverCloseButton />
                                  <PopoverFooter
                                    border="0"
                                    d="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    pb={4}
                                  >
                                    <ButtonGroup size="sm">
                                      <Button
                                        variantColor="red"
                                        leftIcon="delete"
                                        onClick={async () => {
                                          await deleteProblem({
                                            variables: { id: problem.id },
                                            update: (cache) => {
                                              cache.evict({
                                                id: `Problem:${problem.id}`,
                                              });
                                            },
                                          });
                                        }}
                                      >
                                        Delete Problem
                                      </Button>
                                    </ButtonGroup>
                                  </PopoverFooter>
                                </PopoverContent>
                              </Popover>
                            </Box>
                          </Flex>
                        </Flex>
                        <InputField
                          name={`problem${index}`}
                          placeholder="Question"
                          textarea
                        />
                        <InputField
                          name={`answer${index}`}
                          placeholder="Answer"
                          {...{ maxW: 'xs', mt: 5 }}
                        />
                      </Box>
                    ))}
                  </Form>
                  <Flex align="center" justify="center">
                    <Popover
                      placement="bottom"
                      closeOnBlur={false}
                      isOpen={isOpen}
                      onOpen={open}
                      onClose={close}
                    >
                      <PopoverTrigger>
                        <IconButton icon="add" aria-label="Add Problem">
                          Add Problem
                        </IconButton>
                      </PopoverTrigger>
                      <PopoverContent zIndex={4} shadow="md">
                        <PopoverHeader pt={4} fontWeight="bold" border="0">
                          Add Problem
                        </PopoverHeader>
                        <PopoverBody>
                          Choose from the following types
                        </PopoverBody>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverFooter
                          border="0"
                          d="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          pb={4}
                        >
                          <ButtonGroup size="sm">
                            <Button
                              variantColor="green"
                              leftIcon="info-outline"
                              onClick={async () => {
                                await createShortAnswer({
                                  variables: { options: { contestId: id } },
                                  update: (cache, { data }) => {
                                    cache.writeQuery<FindProblemsQuery>({
                                      query: FindProblemsDocument,
                                      variables,
                                      data: {
                                        __typename: 'Query',
                                        findProblems: [
                                          ...(problems?.findProblems || []),
                                          data!.createShortAnswer,
                                        ] as Problem[],
                                      },
                                    });
                                  },
                                });
                                close();
                              }}
                            >
                              Short Answer
                            </Button>
                            <Button
                              variantColor="primary"
                              leftIcon="question-outline"
                            >
                              Free Response
                            </Button>
                          </ButtonGroup>
                        </PopoverFooter>
                      </PopoverContent>
                    </Popover>
                    <Button
                      ml={2}
                      leftIcon="download"
                      onClick={async () => {
                        const newProblems = problems.findProblems.map(
                          (problem, index) => {
                            const newProblem = JSON.parse(
                              JSON.stringify(problem)
                            );
                            newProblem.points = values[`points${index}`];
                            if (newProblem.shortAnswer) {
                              newProblem.shortAnswer.question =
                                values[`problem${index}`];
                              newProblem.shortAnswer.answer =
                                values[`answer${index}`];
                            }
                            return newProblem;
                          }
                        );

                        const shortAnswers = newProblems.filter(
                          (problem) => problem.shortAnswer
                        );

                        await updateShortAnswer({
                          variables: {
                            problems: omitDeep(
                              cloneDeep(shortAnswers),
                              '__typename'
                            ),
                          },
                        });

                        refetch();
                      }}
                    >
                      Save
                    </Button>
                  </Flex>
                </Box>
              </Layout>
            )}
          </Formik>
        ) : null}
      </>
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
