import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import cookies from 'next-cookies';
import React from 'react';
import theme from '../theme';

const App = ({ Component, pageProps, initialColorMode }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value={initialColorMode}>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  const { isDarkMode = 'false' } = cookies(ctx);
  return {
    pageProps,
    initialColorMode: isDarkMode === 'true' ? 'dark' : 'light',
  };
};

export default App;
