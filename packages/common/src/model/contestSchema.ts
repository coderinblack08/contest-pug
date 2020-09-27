import * as Yup from 'yup';

export const errors = {
  min: (field: string, limit = 2) =>
    `Your ${field} is under the ${limit} character limit`,
  max: (field: string, limit = 128) =>
    `Your ${field} is over the ${limit} character limit`,
  required: (field: string) => `Your ${field} is required`,
};

export const contestSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, errors.min('name'))
    .max(128, errors.max('name'))
    .required(errors.required('name')),
  website: Yup.string()
    .url()
    .max(256, errors.min('website', 256))
    .required(errors.required('website')),
  email: Yup.string()
    .email()
    .max(256, errors.min('email', 256))
    .required(errors.required('email')),
  thumbnail: Yup.string()
    .min(8, errors.min('thumbnail', 8))
    .max(150, errors.max('thumbnail', 150))
    .required(errors.required('thumbnail')),
});
