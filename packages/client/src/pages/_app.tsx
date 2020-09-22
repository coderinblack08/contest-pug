import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import cookies from 'next-cookies';
import React from 'react';
import Head from 'next/head';
import theme from '../theme';

const App = ({ Component, pageProps, initialColorMode }: any) => (
  <div>
    <Head>
      <title>Contest Pug</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
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
