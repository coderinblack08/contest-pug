import {
  Progress,
  Box,
  Flex,
  Text,
  Heading,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorMode,
  Link,
} from '@chakra-ui/core';
import { ChartBarOutline } from 'heroicons-react';
import React from 'react';
import { Layout } from '../components/helpers/Layout';
import { useFindScoresQuery } from '../generated/graphql';

const Scores: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { data: scores, loading: scoresLoading } = useFindScoresQuery();
  return (
    <Layout>
      <Box py="6vh" px={[5, 10]}>
        <Flex align="center">
          <ChartBarOutline size={20} />
          <Heading size="lg" ml={1}>
            Past Scores
          </Heading>
        </Flex>
        <StatGroup mt={5}>
          <Stat>
            <StatLabel>Average Score</StatLabel>
            <StatNumber>87.50%</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              15.46%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Contest Taken</StatLabel>
            <StatNumber>7 taken</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              16.67%
            </StatHelpText>
          </Stat>
        </StatGroup>
        <Flex>
          {scores?.findScores.length! > 0 && !scoresLoading ? (
            <Box
              bg={isDark ? 'gray.700' : 'white'}
              shadow="xl"
              minW="md"
              h="sm"
              mt={5}
              rounded="lg"
              p={5}
              mr={5}
              pos="relative"
            >
              <Heading size="lg">
                Latest Contest
                <br />
                <Text mb={2} color={isDark ? 'primary.300' : 'primary.600'}>
                  {scores?.findScores[0].contest.name}
                </Text>
              </Heading>
              <Text color={isDark ? 'gray.300' : 'gray.600'} mb={8}>
                <span role="img">{'🥳 '}</span>
                Congrats on your great work!
              </Text>
              <Box mt={5}>
                <Heading size="sm">Scored</Heading>
                <Flex align="center">
                  {scores?.findScores[0].scored} / {scores?.findScores[0].total}{' '}
                  points
                  <Text color={isDark ? 'gray.300' : 'gray.500'} ml={2}>
                    (
                    {scores?.findScores[0].total === 0
                      ? '100'
                      : parseInt(
                          (
                            scores?.findScores[0].scored! /
                            scores?.findScores[0].total!
                          ).toPrecision(2),
                          10
                        ) * 100}
                    %)
                  </Text>
                </Flex>
                <Progress
                  value={
                    (scores?.findScores[0].scored! /
                      scores?.findScores[0].total!) *
                    100
                  }
                  my={2}
                  color={(() => {
                    const score =
                      scores?.findScores[0].total === 0
                        ? '100'
                        : parseInt(
                            (
                              scores?.findScores[0].scored! /
                              scores?.findScores[0].total!
                            ).toPrecision(2),
                            10
                          ) * 100;
                    if (score > 80) {
                      return 'green';
                    }
                    if (score > 60) {
                      return 'orange';
                    }
                    return 'red';
                  })()}
                  isAnimated
                  hasStripe
                />
                <Link
                  href="#"
                  color="blue.400"
                  pos="absolute"
                  bottom="0"
                  pb={5}
                >
                  View Contest
                </Link>
              </Box>
            </Box>
          ) : null}

          <Flex dir="column">
            {scores?.findScores.map((score, index) => {
              if (index > 0) {
                return (
                  <Box
                    bg={isDark ? 'gray.700' : 'white'}
                    rounded="lg"
                    shadow="xl"
                    w="sm"
                    h="7.3rem"
                    mt={5}
                    p={5}
                  >
                    <Heading
                      size="md"
                      color={isDark ? 'primary.300' : 'primary.600'}
                    >
                      {score.contest.name}
                    </Heading>
                    <Flex align="center" mb={1}>
                      {score.scored} / {score.total} points
                      <Text color={isDark ? 'gray.300' : 'gray.500'} ml={2}>
                        {score.total === 0
                          ? '100'
                          : parseInt(
                              (score.scored / score.total).toPrecision(2),
                              10
                            ) * 100}
                        %) %)
                      </Text>
                    </Flex>
                    <Link href="#" color="blue.400">
                      View Contest
                    </Link>
                  </Box>
                );
              }
              return null;
            })}
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Scores;
