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
          text="Contest Pug allows you to create public contests, meaning that your competition will be exposed to a whole new host of contestants!"
          icon={<DesktopComputer size={18} color="white" />}
        />
        <FeatureCard
          heading="Advertise your Contest"
          text="Contest Pug allows you to create public contests, meaning that your competition will be exposed to a whole new host of contestants!"
          icon={<Sparkles size={18} color="white" />}
        />
        <FeatureCard
          heading="Discuss with Others"
          text="Contest Pug allows contestants to discuss problems after the contest is over, bringing contestants together as a community."
          icon={<Chat size={18} color="white" />}
        />
      </Stack>
      <CTASection />
    </Box>
  );
};

export default Index;
