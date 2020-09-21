import { Box, Stack } from '@chakra-ui/core';
import { Chat, DesktopComputer, Sparkles } from 'heroicons-react';
import React from 'react';
import { CTACard } from '../components/landing-page/CTACard';
import { Header } from '../components/landing-page/Header';
import { Navbar } from '../components/navigation/Navbar';

const Index: React.FC<{}> = () => (
  <Box>
    <Navbar />
    <Header />
    <Stack
      isInline
      flexWrap="wrap"
      justify="center"
      mx={[5, 'auto']}
      maxW="1440px"
    >
      <CTACard
        heading="Easy to Connect"
        icon={<DesktopComputer size={18} color="white" />}
      />
      <CTACard
        heading="Advertise your Contest"
        icon={<Sparkles size={18} color="white" />}
      />
      <CTACard
        heading="Discuss with Others"
        icon={<Chat size={18} color="white" />}
      />
    </Stack>
  </Box>
);

export default Index;
