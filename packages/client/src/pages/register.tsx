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
import InputField from '../components/forms/InputField';
import { useRegisterMutation, MeQuery, MeDocument } from '../generated/graphql';

const Register: React.FC<{}> = () => {
  const router = useRouter();
  const [register] = useRegisterMutation();
  return (
    <Box px={5}>
      <Navbar />
      <Wrapper variant="small">
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={async (values, { setErrors }) => {
            const response = await register({
              variables: { options: values },
              update: (cache, { data }) => {
                cache.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: {
                    __typename: 'Query',
                    me: data?.register.user,
                  },
                });
              },
            });
            if (response.data?.register.errors) {
              setErrors(toErrorMap(response.data.register.errors));
            } else {
              router.push('/');
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack py="8vh" justify="center">
                <Heading as="h4" fontWeight="extrabold">
                  Register Account
                </Heading>
                <Text color="gray.500">
                  <NextLink href="/login">
                    <Link color="blue.400" as="span">
                      Already have an account?&nbsp;
                    </Link>
                  </NextLink>
                </Text>
                <Box mt={4}>
                  <InputField
                    name="name"
                    placeholder="Name"
                    label="Full Name"
                  />
                </Box>
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
                  <Checkbox>Agree to the Terms of Service</Checkbox>
                </Box>
                <Box mt={4}>
                  <Button
                    variantColor="primary"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Register
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
