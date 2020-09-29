import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Box,
} from '@chakra-ui/core';
import DatePicker from 'react-datepicker';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  date?: boolean;
  textarea?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  date,
  textarea,
  size: _,
  children,
  ...props
}) => {
  let InputOrTextarea = Input;
  if (textarea) {
    InputOrTextarea = Textarea;
  }
  const [field, { error }, helpers] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      {date ? (
        <Box mr={2}>
          <FormLabel htmlFor="startDate" mb={1}>
            Submission Start Date
          </FormLabel>
          <Input
            p={2}
            w="xs"
            id={field.name}
            {...field}
            {...props}
            {...{ selected: field.value }}
            onChange={(value: any) => {
              helpers.setValue(value);
            }}
            as={DatePicker}
          />
        </Box>
      ) : (
        <>
          <FormLabel htmlFor={field.name} mb={1}>
            {label}
          </FormLabel>
          <InputOrTextarea
            {...field}
            {...props}
            id={field.name}
            _focus={{
              shadow: 'outline',
            }}
          />
        </>
      )}
      {children}
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;
