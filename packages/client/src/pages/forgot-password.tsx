import { Box, Button, Heading, Stack, useToast } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import React from 'react';
import Wrapper from '../components/helpers/Wrapper';
import { Navbar } from '../components/navigation/Navbar';
import { useForgotPasswordMutation } from '../generated/graphql';

import InputField from '../components/register/InputField';

const ForgotPassword: React.FC<{}> = () => {
  const sentEmail = useToast();
  const [forgotPassword] = useForgotPasswordMutation();
  return (
    <Box px={5}>
      <Navbar />
      <Wrapper variant="small">
        <Formik
          initialValues={{ email: '' }}
          onSubmit={async (values) => {
            sentEmail({
              title: 'Update Password',
              description: 'An email was been sent to your inbox!',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
            return forgotPassword({
              variables: values,
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack py="10vh" justify="center">
                <Heading as="h4" fontWeight="extrabold">
                  Forgot Password
                </Heading>
                <Box mt={4}>
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    label="Email Address"
                  />
                </Box>
                <Box mt={4}>
                  <Button
                    variantColor="primary"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Send Email
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

export default ForgotPassword;
