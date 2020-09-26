import { Alert, AlertIcon, Box, Button, Heading, Stack } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { NextPage } from 'next';
import React, { useState } from 'react';
import Wrapper from '../../components/helpers/Wrapper';
import { Navbar } from '../../components/navigation/Navbar';
import { useChangePasswordMutation } from '../../generated/graphql';
import InputField from '../../components/register/InputField';
import { toErrorMap } from '../../utils/toErrorMap';

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const [changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState('');
  return (
    <Box px={5}>
      <Navbar />
      <Wrapper variant="small">
        <Formik
          initialValues={{ newPassword: '', token }}
          onSubmit={async (values, { setErrors }) => {
            const response = await changePassword({
              variables: values,
            });
            if (response.data?.changePassword.errors) {
              const errors = toErrorMap(response.data?.changePassword.errors);
              if ('token' in errors) {
                setTokenError(errors.token);
              }
              setErrors(toErrorMap(response.data?.changePassword.errors));
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack py="10vh" justify="center">
                <Heading as="h4" fontWeight="extrabold">
                  Forgot Password
                </Heading>
                {tokenError ? (
                  <Alert status="error">
                    <AlertIcon />
                    Your token is invalid, please try again
                  </Alert>
                ) : null}
                <Box mt={4}>
                  <InputField
                    type="password"
                    name="newPassword"
                    placeholder="Password"
                    label="New Password"
                  />
                </Box>
                <Box mt={4}>
                  <Button
                    variantColor="primary"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Change Password
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

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default ChangePassword;
