import {
  Box,
  Flex,
  Heading,
  Progress,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { ChartBarOutline } from 'heroicons-react';
import React from 'react';
import { CustomLink } from '../components/helpers/CustomLink';
import { Layout } from '../components/helpers/Layout';
import { useFindScoresQuery } from '../generated/graphql';

const MotionBox = motion.custom(Box);

const Scores: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { data: scores, loading: scoresLoading } = useFindScoresQuery();
  return (
    <Layout>
      <Box py="6vh" px={[5, 10]}>
        <Flex align="center">
          <ChartBarOutline size={20} />
          <Heading
            fontWeight="semibold"
            color={isDark ? 'gray.200' : 'gray.600'}
            fontSize="2xl"
            lineHeight={0}
            ml={2}
          >
            Past Scores
          </Heading>
        </Flex>
        <Text fontWeight="medium" color="gray.400" mt={2} fontSize="lg">
          Scores and statistics
        </Text>
        <StatGroup mt={5}>
          <Stat>
            <StatLabel>Average Score</StatLabel>
            <StatNumber>100%</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              100%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Contest Taken</StatLabel>
            <StatNumber>{scores?.findScores.length} taken</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {scores?.findScores.length === 0
                ? '0%'
                : scores?.findScores.length === 1
                ? '100%'
                : `${
                    +(1 / (scores?.findScores.length! - 1)).toPrecision(2) * 100
                  }%`}
            </StatHelpText>
          </Stat>
        </StatGroup>
        <Flex>
          {scores?.findScores.length! > 0 && !scoresLoading ? (
            <MotionBox
              bg={isDark ? 'gray.700' : 'white'}
              shadow="xl"
              minW="md"
              h="sm"
              mt={5}
              rounded="lg"
              p={5}
              mr={5}
              pos="relative"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
            >
              <Heading size="lg">
                Latest Contest
                <br />
                <Text mb={1} color={isDark ? 'primary.300' : 'primary.600'}>
                  {scores?.findScores[0].contest.name}
                </Text>
              </Heading>
              <Text
                color={isDark ? 'gray.300' : 'gray.600'}
                fontSize="md"
                mb={8}
              >
                Congrats on your great work!
              </Text>
              <Box mt={5}>
                <Heading size="sm" ml={1}>
                  Scored
                </Heading>
                <Flex
                  align="center"
                  direction="row-reverse"
                  justify="space-between"
                >
                  <Flex>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 4v3m-4 -3v6m8 -6v6" />
                      <path d="M12 18.5l-3 1.5l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2 .5 3.5z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <line x1="7" y1="4" x2="17" y2="4" />
                      <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                      <circle cx="5" cy="9" r="2" />
                      <circle cx="19" cy="9" r="2" />
                    </svg>
                  </Flex>
                  <Flex align="center">
                    {scores?.findScores[0].scored} /{' '}
                    {scores?.findScores[0].total} points
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
                </Flex>
                <Progress
                  value={
                    (scores?.findScores[0].scored! /
                      scores?.findScores[0].total!) *
                    100
                  }
                  my={3}
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
                <CustomLink
                  pos="absolute"
                  bottom={0}
                  href={`/contest/${scores?.findScores[0].contest.id}`}
                  color="blue.400"
                  text="View Contest"
                  mb={5}
                />
              </Box>
            </MotionBox>
          ) : null}

          <Flex direction="column">
            {scores?.findScores.map((score, index) => {
              if (index > 0) {
                return (
                  <MotionBox
                    bg={isDark ? 'gray.700' : 'white'}
                    rounded="lg"
                    shadow="xl"
                    w="sm"
                    h="7.3rem"
                    mt={5}
                    p={5}
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.975 }}
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
                        (
                        {score.total === 0
                          ? '100'
                          : parseInt(
                              (score.scored / score.total).toPrecision(2),
                              10
                            ) * 100}
                        %)
                      </Text>
                    </Flex>
                    <CustomLink
                      href={`/contest/${score.contest.id}`}
                      color="blue.400"
                      text="View Contest"
                    />
                  </MotionBox>
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
