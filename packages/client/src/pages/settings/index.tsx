import {
  Box,
  Stack,
  Heading,
  Button,
  Text,
  Flex,
  Icon,
  Tooltip,
  Avatar,
  useColorMode,
} from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import React from 'react';
import { CustomLink } from '../../components/helpers/CustomLink';
import { Layout } from '../../components/helpers/Layout';
import InputField from '../../components/register/InputField';
import { useMeQuery } from '../../generated/graphql';

const Settings: React.FC<{}> = () => {
  const { data: me } = useMeQuery();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Layout>
      <Box px={[5, 10, 12]}>
        <Formik
          initialValues={{ name: me?.me?.name }}
          onSubmit={async () => {}}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack py="10vh" justify="center">
                <Heading
                  fontWeight="semibold"
                  color={isDark ? 'gray.200' : 'gray.600'}
                  fontSize="2xl"
                  lineHeight={0}
                >
                  User Settings
                </Heading>
                <Text fontWeight="medium" color="gray.400" mt={2} fontSize="lg">
                  Update your user settings
                </Text>
                <Box
                  px={6}
                  py={8}
                  bg={isDark ? 'gray.700' : 'white'}
                  shadow="sm"
                  my={5}
                  rounded="md"
                >
                  <Box mb={5}>
                    <Flex align="center">
                      <Text fontWeight="medium">Email Address</Text>
                      <Tooltip
                        aria-label="Not Editable"
                        label="Not Editable"
                        placement="bottom"
                        hasArrow
                      >
                        <Icon name="info" w={3} ml={1} />
                      </Tooltip>
                    </Flex>
                    <Text color={isDark ? 'gray.400' : 'gray.500'}>
                      {me?.me?.email}
                    </Text>
                  </Box>
                  <Box my={5}>
                    <InputField
                      name="name"
                      placeholder="Name"
                      label="Full Name"
                      {...{ maxW: 'xl' }}
                    />
                  </Box>
                  <Box my={5}>
                    <Text fontWeight="medium">Profile Picture</Text>
                    <Flex align="center" mt={1}>
                      <Avatar size="sm" />
                      <Text
                        fontWeight="medium"
                        ml={2}
                        fontSize="md"
                        cursor="pointer"
                        color={isDark ? 'gray.300' : 'gray.600'}
                      >
                        Change Picture
                      </Text>
                    </Flex>
                  </Box>
                  <CustomLink
                    text="Change Password"
                    href="forgot-password"
                    color="blue.400"
                  />
                </Box>
                <Box my={5}>
                  <Button
                    variantColor="primary"
                    isLoading={isSubmitting}
                    type="submit"
                    p={6}
                  >
                    Save Settings
                  </Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  );
};

export default Settings;
