import * as Yup from 'yup';

const errors = {
  min: (field: string, limit = 2) =>
    `Your ${field} is under the ${limit} character limit`,
  max: (field: string) => `Your ${field} is over the 128 character limit`,
  required: (field: string) => `Your ${field} is required`,
  email: 'Your email address is invalid',
};

export const registerObject = {
  name: Yup.string()
    .min(2, errors.min('name'))
    .max(128, errors.max('name'))
    .required(errors.required('name')),
  email: Yup.string()
    .email(errors.email)
    .max(128, errors.max('email address'))
    .required(errors.required('email address')),
  password: Yup.string()
    .min(8, errors.min('password', 8))
    .max(128, errors.max('password'))
    .required(errors.required('password')),
};

const loginObject = {
  email: Yup.string()
    .email(errors.email)
    .max(128, errors.max('email address'))
    .required(errors.required('email address')),
  password: Yup.string()
    .min(8, errors.min('password', 8))
    .max(128, errors.max('password'))
    .required(errors.required('password')),
};

export const registerSchema = Yup.object().shape(registerObject);

export const loginSchema = Yup.object().shape(loginObject);
