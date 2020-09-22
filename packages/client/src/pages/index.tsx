import { Box, Stack, useColorMode } from '@chakra-ui/core';
import { Chat, DesktopComputer, Sparkles } from 'heroicons-react';
import React from 'react';
import { CTASection } from '../components/landing-page/CTASection';
import { FeatureCard } from '../components/landing-page/FeatureCard';
import { Header } from '../components/landing-page/Header';
import { Navbar } from '../components/navigation/Navbar';

const Index: React.FC<{}> = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Navbar />
      <Header />
      <Stack
        isInline
        flexWrap="wrap"
        justify="center"
        mx={[0, 5, 'auto']}
        maxW="1440px"
      >
        <FeatureCard
          heading="Easy to Connect"
          icon={<DesktopComputer size={18} color="white" />}
        />
        <FeatureCard
          heading="Advertise your Contest"
          icon={<Sparkles size={18} color="white" />}
        />
        <FeatureCard
          heading="Discuss with Others"
          icon={<Chat size={18} color="white" />}
        />
      </Stack>
      <CTASection />
      <Box
        w="100vw"
        h={1}
        bg={colorMode === 'dark' ? 'gray.700' : 'primary.500'}
      />
    </Box>
  );
};

export default Index;
