import { Box } from '@chakra-ui/core';
import React from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Header } from '../components/landing-page/Header';

const Index: React.FC<{}> = () => (
  <Box>
    <Navbar />
    <Header />
  </Box>
);

export default Index;
