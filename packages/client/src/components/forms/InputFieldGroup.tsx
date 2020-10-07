import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
} from '@chakra-ui/core';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
};

const InputFieldGroup: React.FC<InputFieldProps> = ({
  label,
  size: _,
  placeholder,
  children,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.value}>{label}</FormLabel>
      <InputGroup mt={1}>
        {children}
        <Input
          {...field}
          {...props}
          id={field.name}
          placeholder={placeholder}
          _focus={{
            shadow: 'outline',
          }}
        />
      </InputGroup>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputFieldGroup;
