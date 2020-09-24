import {
  Box,
  Button,
  Checkbox,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/core';
import React from 'react';
import NextLink from 'next/link';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import { toErrorMap } from '../utils/toErrorMap';
import Wrapper from '../components/helpers/Wrapper';
import { Navbar } from '../components/navigation/Navbar';
import InputField from '../components/register/InputField';
import { MeDocument, MeQuery, useLoginMutation } from '../generated/graphql';

const Register: React.FC<{}> = () => {
  const [login] = useLoginMutation();
  const router = useRouter();
  return (
    <Box px={5}>
      <Navbar />
      <Wrapper variant="small">
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values, { setErrors }) => {
            const response = await login({
              variables: { options: values },
              update: (cache, { data }) => {
                cache.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: {
                    __typename: 'Query',
                    me: data?.login.user,
                  },
                });
              },
            });
            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else {
              router.push('/');
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack height="70vh" justify="center">
                <Heading as="h4" fontWeight="extrabold">
                  Account Login
                </Heading>
                <Text color="gray.500">
                  <NextLink href="/forgot-password">
                    <Link color="blue.400" as="span">
                      Don't remember your password?&nbsp;
                    </Link>
                  </NextLink>
                </Text>
                <Box mt={4}>
                  <InputField
                    name="email"
                    placeholder="Email"
                    label="Email Address"
                  />
                </Box>
                <Box mt={4}>
                  <InputField
                    name="password"
                    placeholder="Password"
                    label="Password"
                    type="password"
                  />
                </Box>
                <Box mt={5}>
                  <Checkbox>Stay logged in</Checkbox>
                </Box>
                <Box mt={4}>
                  <Button
                    variantColor="primary"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Login
                  </Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Box>
  );
};

export default Register;
