import { FieldError } from '../types/graphql/FieldError';
import { ValidationError } from 'yup';

export const parseYupErrors = (errors: ValidationError): FieldError => {
  return {
    field: errors.path,
    message: errors.errors[0],
  };
};
