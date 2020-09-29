import {
  Box,
  Stack,
  Heading,
  Button,
  Text,
  Flex,
  Tooltip,
  Avatar,
  useColorMode,
} from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import React from 'react';
import Dropzone from 'react-dropzone';
import { CustomLink } from '../../components/helpers/CustomLink';
import { Layout } from '../../components/helpers/Layout';
import InputField from '../../components/forms/InputField';
import {
  useMeQuery,
  useUpdateUserMutation,
  useUploadProfilePictureMutation,
} from '../../generated/graphql';

const Settings: React.FC<{}> = () => {
  const [updateUser] = useUpdateUserMutation();
  const { data: me, refetch } = useMeQuery();
  const { colorMode } = useColorMode();
  const [uploadProfilePicture] = useUploadProfilePictureMutation();
  const isDark = colorMode === 'dark';
  return (
    <Layout>
      <Box px={[5, 10, 12]}>
        <Formik
          initialValues={{ name: me?.me?.name }}
          onSubmit={async (values) => {
            await updateUser({ variables: { name: values.name! } });
            await refetch();
          }}
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
                      <Text fontWeight="medium" mr={1}>
                        Email Address
                      </Text>
                      <Tooltip
                        aria-label="Not Editable"
                        label="Not Editable"
                        placement="bottom"
                        hasArrow
                      >
                        <svg
                          width="1rem"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
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
                    <Dropzone
                      accept="image/*"
                      onDrop={async ([file]) => {
                        await uploadProfilePicture({
                          variables: { picture: file },
                        });
                        await refetch();
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <Box>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Flex align="center" mt={1}>
                              <Avatar
                                size="sm"
                                src={`http://localhost:4000/images/${me?.me?.profilePicture}`}
                              />
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
                          </div>
                        </Box>
                      )}
                    </Dropzone>
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
