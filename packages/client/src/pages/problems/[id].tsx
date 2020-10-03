import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  useColorMode,
} from '@chakra-ui/core';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { ContestNavbar } from '../../components/dashboard/shared/ContestNavbar';
import { Layout } from '../../components/helpers/Layout';
import {
  useCreateShortAnswerMutation,
  useFindProblemsQuery,
  useGetContestQuery,
} from '../../generated/graphql';

const Contest: NextPage<{ id: string }> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { data: problems } = useFindProblemsQuery({
    variables: { contestId: id },
  });
  const [createShortAnswer] = useCreateShortAnswerMutation();
  const { data: contest } = useGetContestQuery({
    variables: { contestId: id },
  });

  if (contest?.getContest) {
    return (
      <Layout>
        <ContestNavbar id={id} />
        <Box p={8}>
          <Stack spacing={8} align="flex-start">
            {problems?.findProblems.map((problem, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={index} bg="white" p={4} shadow="sm" w="100%">
                <Heading fontSize="lg">{problem.index}</Heading>
                {problem.shortAnswer?.question}
              </Box>
            ))}
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
              <PopoverContent
                zIndex={4}
                color="gray.900"
                bg="white"
                shadow="md"
              >
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                  Add Problem
                </PopoverHeader>
                <PopoverBody>Choose from the following types</PopoverBody>
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
                        });
                        close();
                      }}
                    >
                      Short Answer
                    </Button>
                    <Button variantColor="primary" leftIcon="question-outline">
                      Free Response
                    </Button>
                  </ButtonGroup>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          </Stack>
        </Box>
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
