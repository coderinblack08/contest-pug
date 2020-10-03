import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import cookies from 'next-cookies';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../static/styles/react-datepicker.css';
import React from 'react';
import Head from 'next/head';
import theme from '../theme';

const link = createUploadLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps, initialColorMode }: any) => (
  <ApolloProvider client={client}>
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
  </ApolloProvider>
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
