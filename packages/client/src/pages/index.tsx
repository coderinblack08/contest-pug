import { Box, Stack } from '@chakra-ui/core';
import { Chat, DesktopComputer, Sparkles } from 'heroicons-react';
import React from 'react';
import { CTASection } from '../components/index/CTASection';
import { FeatureCard } from '../components/index/FeatureCard';
import { Header } from '../components/index/Header';
import { Navbar } from '../components/navigation/Navbar';

const Index: React.FC<{}> = () => {
  return (
    <Box>
      <Navbar />
      <Header />
      <Stack
        isInline
        flexWrap="wrap"
        justify="center"
        mx={['auto']}
        maxW="1440px"
      >
        <FeatureCard
          heading="Easy to Connect"
          text="Contest Pug is a convenient, hassle-free platform. All you have to do is create an account to solve problems and win prizes!"
          icon={<DesktopComputer size={18} color="white" />}
        />
        <FeatureCard
          heading="Advertise your Contest"
          text="As a host, Contest Pug allows you to create private contests for classroom formats and public contests to reach broader audiences."
          icon={<Sparkles size={18} color="white" />}
        />
        <FeatureCard
          heading="Discuss with Others"
          text="After contests have ended, contestants will be able to join community discussion forums and engage with fellow learners."
          icon={<Chat size={18} color="white" />}
        />
      </Stack>
      <CTASection />
    </Box>
  );
};

export default Index;
