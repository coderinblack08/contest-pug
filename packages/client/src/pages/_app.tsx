import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import cookies from 'next-cookies';
import theme from '../theme';
import Head from 'next/head';

const App = ({ Component, pageProps, initialColorMode }: any) => {
  return (
    <div>
      <Head>
        <title>Contest Pug</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Contest Pug, your solution to hosting online competitions and tests"
        />
        <meta
          name="keywords"
          content="contest pug, competitions, contests, tests"
        />
        <link rel="icon" href={require('../static/favicon/favicon.ico')} />
      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value={initialColorMode}>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
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
