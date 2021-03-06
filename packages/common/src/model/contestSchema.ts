import * as Yup from 'yup';

export const errors = {
  min: (field: string, limit = 2) =>
    `Your ${field} is under the ${limit} limit`,
  max: (field: string, limit = 128) =>
    `Your ${field} is over the ${limit} limit`,
  required: (field: string) => `Your ${field} is required`,
};

export const contestObject = {
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
  description: Yup.string()
    .min(8, errors.min('description', 8))
    .max(5000, errors.max('description', 5000))
    .required(errors.required('description')),
  tags: Yup.array().of(Yup.string().required()).notRequired(),
  length: Yup.number()
    .min(0, errors.min('length', 0))
    .max(60 * 60 * 24 * 365, errors.max('length', 60 * 60 * 24 * 365))
    .required(errors.required('length')),
  startDate: Yup.date().required(errors.required('start date')),
  endDate: Yup.date().required(errors.required('end date')),
  private: Yup.boolean().required(errors.required('private')),
  leaderboard: Yup.boolean().required(errors.required('leaderboard')),
};

export const contestSchema = Yup.object().shape(contestObject);
