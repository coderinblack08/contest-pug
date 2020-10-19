import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me?: Maybe<User>;
  getContest?: Maybe<Contest>;
  findContests: Array<Contest>;
  joinedContests: Array<Contest>;
  findProblems: Array<Problem>;
  leaderboard: Array<LeaderboardResponse>;
  findScores: Array<ScoreResponse>;
  hasSubmitted: Scalars['Boolean'];
  fetchSession?: Maybe<Scalars['String']>;
};


export type QueryGetContestArgs = {
  contestId: Scalars['String'];
};


export type QueryFindContestsArgs = {
  options: PaginationArgs;
};


export type QueryJoinedContestsArgs = {
  options: PaginationArgs;
};


export type QueryFindProblemsArgs = {
  contestId: Scalars['String'];
};


export type QueryLeaderboardArgs = {
  contestId: Scalars['String'];
};


export type QueryHasSubmittedArgs = {
  contestId: Scalars['String'];
};


export type QueryFetchSessionArgs = {
  contestId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  profilePicture?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Contest = {
  __typename?: 'Contest';
  id: Scalars['ID'];
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  thumbnail: Scalars['String'];
  description: Scalars['String'];
  length: Scalars['Int'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  tags: Array<Scalars['String']>;
  leaderboard: Scalars['Boolean'];
  private: Scalars['Boolean'];
  open: Scalars['Boolean'];
  creatorId: Scalars['Int'];
  points: Scalars['Int'];
  isContestant?: Maybe<Scalars['Boolean']>;
  isStarred?: Maybe<Scalars['Boolean']>;
  inSession?: Maybe<Scalars['Boolean']>;
  creator: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginationArgs = {
  limit: Scalars['Float'];
  cursor?: Maybe<Scalars['String']>;
};

export type Problem = {
  __typename?: 'Problem';
  id: Scalars['Float'];
  contestId: Scalars['String'];
  points: Scalars['Float'];
  shortAnswerId?: Maybe<Scalars['Float']>;
  shortAnswer?: Maybe<ShortAnswer>;
};

export type ShortAnswer = {
  __typename?: 'ShortAnswer';
  id: Scalars['Float'];
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
  solution?: Maybe<Scalars['String']>;
  contestId: Scalars['String'];
  problem: Problem;
};

export type LeaderboardResponse = {
  __typename?: 'LeaderboardResponse';
  total: Scalars['Float'];
  scored: Scalars['Float'];
  user: User;
};

export type ScoreResponse = {
  __typename?: 'ScoreResponse';
  total: Scalars['Float'];
  scored: Scalars['Float'];
  contest: Contest;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  updateUser: Scalars['Boolean'];
  uploadProfilePicture: Scalars['Boolean'];
  starContest: Scalars['Boolean'];
  createContest: ContestResponse;
  toggleContestant: Scalars['Boolean'];
  createShortAnswer: Problem;
  updateShortAnswer: Scalars['Boolean'];
  deleteProblem: Scalars['Boolean'];
  removeSession: Scalars['Boolean'];
  startSession: Scalars['Boolean'];
  submitAnswers: Scalars['Int'];
};


export type MutationRegisterArgs = {
  options: RegisterArgs;
};


export type MutationLoginArgs = {
  options: LoginArgs;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  name: Scalars['String'];
};


export type MutationUploadProfilePictureArgs = {
  picture: Scalars['Upload'];
};


export type MutationStarContestArgs = {
  contestId: Scalars['String'];
};


export type MutationCreateContestArgs = {
  options: ContestArgs;
};


export type MutationToggleContestantArgs = {
  contestId: Scalars['String'];
};


export type MutationCreateShortAnswerArgs = {
  options: ProblemsArgs;
};


export type MutationUpdateShortAnswerArgs = {
  problems: Array<ProblemQuery>;
};


export type MutationDeleteProblemArgs = {
  id: Scalars['Float'];
};


export type MutationRemoveSessionArgs = {
  contestId: Scalars['String'];
};


export type MutationStartSessionArgs = {
  contestId: Scalars['String'];
};


export type MutationSubmitAnswersArgs = {
  options: AnswerArgs;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type RegisterArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type ContestResponse = {
  __typename?: 'ContestResponse';
  errors?: Maybe<Array<FieldError>>;
  contest?: Maybe<Contest>;
};

export type ContestArgs = {
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  thumbnail: Scalars['String'];
  description: Scalars['String'];
  length: Scalars['Int'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  tags: Array<Scalars['String']>;
  leaderboard: Scalars['Boolean'];
  private: Scalars['Boolean'];
};

export type ProblemsArgs = {
  contestId: Scalars['String'];
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
  solution?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Float']>;
};

export type ProblemQuery = {
  id: Scalars['Float'];
  contestId: Scalars['String'];
  points: Scalars['Float'];
  shortAnswerId?: Maybe<Scalars['Float']>;
  shortAnswer?: Maybe<ShortAnswerQuery>;
};

export type ShortAnswerQuery = {
  id: Scalars['Float'];
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
  solution?: Maybe<Scalars['String']>;
};

export type AnswerArgs = {
  contestId: Scalars['String'];
  answers: Array<AnswerInput>;
};

export type AnswerInput = {
  problemId: Scalars['Float'];
  answer: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'profilePicture'>
);

export type UserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & UserResponseFragment
  ) }
);

export type CreateContestMutationVariables = Exact<{
  options: ContestArgs;
}>;


export type CreateContestMutation = (
  { __typename?: 'Mutation' }
  & { createContest: (
    { __typename?: 'ContestResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, contest?: Maybe<(
      { __typename?: 'Contest' }
      & Pick<Contest, 'id' | 'name'>
    )> }
  ) }
);

export type CreateShortAnswerMutationVariables = Exact<{
  options: ProblemsArgs;
}>;


export type CreateShortAnswerMutation = (
  { __typename?: 'Mutation' }
  & { createShortAnswer: (
    { __typename?: 'Problem' }
    & Pick<Problem, 'id' | 'points' | 'contestId' | 'shortAnswerId'>
    & { shortAnswer?: Maybe<(
      { __typename?: 'ShortAnswer' }
      & Pick<ShortAnswer, 'id' | 'question' | 'answer' | 'solution'>
    )> }
  ) }
);

export type DeleteProblemMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteProblemMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProblem'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  options: LoginArgs;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & UserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: RegisterArgs;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & UserResponseFragment
  ) }
);

export type StarContestMutationVariables = Exact<{
  contestId: Scalars['String'];
}>;


export type StarContestMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'starContest'>
);

export type StartSessionMutationVariables = Exact<{
  contestId: Scalars['String'];
}>;


export type StartSessionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'startSession'>
);

export type SubmitAnswersMutationVariables = Exact<{
  options: AnswerArgs;
}>;


export type SubmitAnswersMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'submitAnswers'>
);

export type ToggleContestantMutationVariables = Exact<{
  contestId: Scalars['String'];
}>;


export type ToggleContestantMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'toggleContestant'>
);

export type UpdateShortAnswerMutationVariables = Exact<{
  problems: Array<ProblemQuery>;
}>;


export type UpdateShortAnswerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateShortAnswer'>
);

export type UpdateUserMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateUser'>
);

export type UploadProfilePictureMutationVariables = Exact<{
  picture: Scalars['Upload'];
}>;


export type UploadProfilePictureMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadProfilePicture'>
);

export type GetContestQueryVariables = Exact<{
  contestId: Scalars['String'];
}>;


export type GetContestQuery = (
  { __typename?: 'Query' }
  & { getContest?: Maybe<(
    { __typename?: 'Contest' }
    & Pick<Contest, 'id' | 'name' | 'email' | 'website' | 'thumbnail' | 'description' | 'open' | 'tags' | 'length' | 'points' | 'startDate' | 'endDate' | 'private' | 'isContestant' | 'isStarred' | 'inSession' | 'leaderboard'>
    & { creator: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'profilePicture'>
    ) }
  )> }
);

export type FindContestQueryVariables = Exact<{
  options: PaginationArgs;
}>;


export type FindContestQuery = (
  { __typename?: 'Query' }
  & { findContests: Array<(
    { __typename?: 'Contest' }
    & Pick<Contest, 'id' | 'name' | 'email' | 'website' | 'thumbnail' | 'description' | 'tags' | 'length' | 'startDate' | 'endDate' | 'private' | 'leaderboard'>
  )> }
);

export type FetchSessionQueryVariables = Exact<{
  contestId: Scalars['String'];
}>;


export type FetchSessionQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'fetchSession'>
);

export type FindScoresQueryVariables = Exact<{ [key: string]: never; }>;


export type FindScoresQuery = (
  { __typename?: 'Query' }
  & { findScores: Array<(
    { __typename?: 'ScoreResponse' }
    & Pick<ScoreResponse, 'total' | 'scored'>
    & { contest: (
      { __typename?: 'Contest' }
      & Pick<Contest, 'id' | 'name'>
    ) }
  )> }
);

export type HasSubmittedQueryVariables = Exact<{
  contestId: Scalars['String'];
}>;


export type HasSubmittedQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hasSubmitted'>
);

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type JoinedContestsQueryVariables = Exact<{
  options: PaginationArgs;
}>;


export type JoinedContestsQuery = (
  { __typename?: 'Query' }
  & { joinedContests: Array<(
    { __typename?: 'Contest' }
    & Pick<Contest, 'id' | 'name' | 'email' | 'website' | 'thumbnail' | 'description' | 'tags' | 'length' | 'startDate' | 'endDate' | 'private' | 'leaderboard'>
  )> }
);

export type LeaderBoardQueryVariables = Exact<{
  contestId: Scalars['String'];
}>;


export type LeaderBoardQuery = (
  { __typename?: 'Query' }
  & { leaderboard: Array<(
    { __typename?: 'LeaderboardResponse' }
    & Pick<LeaderboardResponse, 'scored' | 'total'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'profilePicture'>
    ) }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type FindProblemsQueryVariables = Exact<{
  contestId: Scalars['String'];
}>;


export type FindProblemsQuery = (
  { __typename?: 'Query' }
  & { findProblems: Array<(
    { __typename?: 'Problem' }
    & Pick<Problem, 'id' | 'points' | 'contestId' | 'shortAnswerId'>
    & { shortAnswer?: Maybe<(
      { __typename?: 'ShortAnswer' }
      & Pick<ShortAnswer, 'id' | 'question' | 'answer' | 'solution'>
    )> }
  )> }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  email
  profilePicture
}
    `;
export const UserResponseFragmentDoc = gql`
    fragment UserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateContestDocument = gql`
    mutation CreateContest($options: ContestArgs!) {
  createContest(options: $options) {
    errors {
      ...RegularError
    }
    contest {
      id
      name
    }
  }
}
    ${RegularErrorFragmentDoc}`;
export type CreateContestMutationFn = Apollo.MutationFunction<CreateContestMutation, CreateContestMutationVariables>;

/**
 * __useCreateContestMutation__
 *
 * To run a mutation, you first call `useCreateContestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContestMutation, { data, loading, error }] = useCreateContestMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateContestMutation(baseOptions?: Apollo.MutationHookOptions<CreateContestMutation, CreateContestMutationVariables>) {
        return Apollo.useMutation<CreateContestMutation, CreateContestMutationVariables>(CreateContestDocument, baseOptions);
      }
export type CreateContestMutationHookResult = ReturnType<typeof useCreateContestMutation>;
export type CreateContestMutationResult = Apollo.MutationResult<CreateContestMutation>;
export type CreateContestMutationOptions = Apollo.BaseMutationOptions<CreateContestMutation, CreateContestMutationVariables>;
export const CreateShortAnswerDocument = gql`
    mutation CreateShortAnswer($options: ProblemsArgs!) {
  createShortAnswer(options: $options) {
    id
    points
    contestId
    shortAnswerId
    shortAnswer {
      id
      question
      answer
      solution
    }
  }
}
    `;
export type CreateShortAnswerMutationFn = Apollo.MutationFunction<CreateShortAnswerMutation, CreateShortAnswerMutationVariables>;

/**
 * __useCreateShortAnswerMutation__
 *
 * To run a mutation, you first call `useCreateShortAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShortAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShortAnswerMutation, { data, loading, error }] = useCreateShortAnswerMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateShortAnswerMutation(baseOptions?: Apollo.MutationHookOptions<CreateShortAnswerMutation, CreateShortAnswerMutationVariables>) {
        return Apollo.useMutation<CreateShortAnswerMutation, CreateShortAnswerMutationVariables>(CreateShortAnswerDocument, baseOptions);
      }
export type CreateShortAnswerMutationHookResult = ReturnType<typeof useCreateShortAnswerMutation>;
export type CreateShortAnswerMutationResult = Apollo.MutationResult<CreateShortAnswerMutation>;
export type CreateShortAnswerMutationOptions = Apollo.BaseMutationOptions<CreateShortAnswerMutation, CreateShortAnswerMutationVariables>;
export const DeleteProblemDocument = gql`
    mutation DeleteProblem($id: Float!) {
  deleteProblem(id: $id)
}
    `;
export type DeleteProblemMutationFn = Apollo.MutationFunction<DeleteProblemMutation, DeleteProblemMutationVariables>;

/**
 * __useDeleteProblemMutation__
 *
 * To run a mutation, you first call `useDeleteProblemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProblemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProblemMutation, { data, loading, error }] = useDeleteProblemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProblemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProblemMutation, DeleteProblemMutationVariables>) {
        return Apollo.useMutation<DeleteProblemMutation, DeleteProblemMutationVariables>(DeleteProblemDocument, baseOptions);
      }
export type DeleteProblemMutationHookResult = ReturnType<typeof useDeleteProblemMutation>;
export type DeleteProblemMutationResult = Apollo.MutationResult<DeleteProblemMutation>;
export type DeleteProblemMutationOptions = Apollo.BaseMutationOptions<DeleteProblemMutation, DeleteProblemMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($options: LoginArgs!) {
  login(options: $options) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: RegisterArgs!) {
  register(options: $options) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const StarContestDocument = gql`
    mutation StarContest($contestId: String!) {
  starContest(contestId: $contestId)
}
    `;
export type StarContestMutationFn = Apollo.MutationFunction<StarContestMutation, StarContestMutationVariables>;

/**
 * __useStarContestMutation__
 *
 * To run a mutation, you first call `useStarContestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStarContestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [starContestMutation, { data, loading, error }] = useStarContestMutation({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useStarContestMutation(baseOptions?: Apollo.MutationHookOptions<StarContestMutation, StarContestMutationVariables>) {
        return Apollo.useMutation<StarContestMutation, StarContestMutationVariables>(StarContestDocument, baseOptions);
      }
export type StarContestMutationHookResult = ReturnType<typeof useStarContestMutation>;
export type StarContestMutationResult = Apollo.MutationResult<StarContestMutation>;
export type StarContestMutationOptions = Apollo.BaseMutationOptions<StarContestMutation, StarContestMutationVariables>;
export const StartSessionDocument = gql`
    mutation StartSession($contestId: String!) {
  startSession(contestId: $contestId)
}
    `;
export type StartSessionMutationFn = Apollo.MutationFunction<StartSessionMutation, StartSessionMutationVariables>;

/**
 * __useStartSessionMutation__
 *
 * To run a mutation, you first call `useStartSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startSessionMutation, { data, loading, error }] = useStartSessionMutation({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useStartSessionMutation(baseOptions?: Apollo.MutationHookOptions<StartSessionMutation, StartSessionMutationVariables>) {
        return Apollo.useMutation<StartSessionMutation, StartSessionMutationVariables>(StartSessionDocument, baseOptions);
      }
export type StartSessionMutationHookResult = ReturnType<typeof useStartSessionMutation>;
export type StartSessionMutationResult = Apollo.MutationResult<StartSessionMutation>;
export type StartSessionMutationOptions = Apollo.BaseMutationOptions<StartSessionMutation, StartSessionMutationVariables>;
export const SubmitAnswersDocument = gql`
    mutation SubmitAnswers($options: AnswerArgs!) {
  submitAnswers(options: $options)
}
    `;
export type SubmitAnswersMutationFn = Apollo.MutationFunction<SubmitAnswersMutation, SubmitAnswersMutationVariables>;

/**
 * __useSubmitAnswersMutation__
 *
 * To run a mutation, you first call `useSubmitAnswersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitAnswersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitAnswersMutation, { data, loading, error }] = useSubmitAnswersMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useSubmitAnswersMutation(baseOptions?: Apollo.MutationHookOptions<SubmitAnswersMutation, SubmitAnswersMutationVariables>) {
        return Apollo.useMutation<SubmitAnswersMutation, SubmitAnswersMutationVariables>(SubmitAnswersDocument, baseOptions);
      }
export type SubmitAnswersMutationHookResult = ReturnType<typeof useSubmitAnswersMutation>;
export type SubmitAnswersMutationResult = Apollo.MutationResult<SubmitAnswersMutation>;
export type SubmitAnswersMutationOptions = Apollo.BaseMutationOptions<SubmitAnswersMutation, SubmitAnswersMutationVariables>;
export const ToggleContestantDocument = gql`
    mutation ToggleContestant($contestId: String!) {
  toggleContestant(contestId: $contestId)
}
    `;
export type ToggleContestantMutationFn = Apollo.MutationFunction<ToggleContestantMutation, ToggleContestantMutationVariables>;

/**
 * __useToggleContestantMutation__
 *
 * To run a mutation, you first call `useToggleContestantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleContestantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleContestantMutation, { data, loading, error }] = useToggleContestantMutation({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useToggleContestantMutation(baseOptions?: Apollo.MutationHookOptions<ToggleContestantMutation, ToggleContestantMutationVariables>) {
        return Apollo.useMutation<ToggleContestantMutation, ToggleContestantMutationVariables>(ToggleContestantDocument, baseOptions);
      }
export type ToggleContestantMutationHookResult = ReturnType<typeof useToggleContestantMutation>;
export type ToggleContestantMutationResult = Apollo.MutationResult<ToggleContestantMutation>;
export type ToggleContestantMutationOptions = Apollo.BaseMutationOptions<ToggleContestantMutation, ToggleContestantMutationVariables>;
export const UpdateShortAnswerDocument = gql`
    mutation UpdateShortAnswer($problems: [ProblemQuery!]!) {
  updateShortAnswer(problems: $problems)
}
    `;
export type UpdateShortAnswerMutationFn = Apollo.MutationFunction<UpdateShortAnswerMutation, UpdateShortAnswerMutationVariables>;

/**
 * __useUpdateShortAnswerMutation__
 *
 * To run a mutation, you first call `useUpdateShortAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShortAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShortAnswerMutation, { data, loading, error }] = useUpdateShortAnswerMutation({
 *   variables: {
 *      problems: // value for 'problems'
 *   },
 * });
 */
export function useUpdateShortAnswerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShortAnswerMutation, UpdateShortAnswerMutationVariables>) {
        return Apollo.useMutation<UpdateShortAnswerMutation, UpdateShortAnswerMutationVariables>(UpdateShortAnswerDocument, baseOptions);
      }
export type UpdateShortAnswerMutationHookResult = ReturnType<typeof useUpdateShortAnswerMutation>;
export type UpdateShortAnswerMutationResult = Apollo.MutationResult<UpdateShortAnswerMutation>;
export type UpdateShortAnswerMutationOptions = Apollo.BaseMutationOptions<UpdateShortAnswerMutation, UpdateShortAnswerMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($name: String!) {
  updateUser(name: $name)
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UploadProfilePictureDocument = gql`
    mutation UploadProfilePicture($picture: Upload!) {
  uploadProfilePicture(picture: $picture)
}
    `;
export type UploadProfilePictureMutationFn = Apollo.MutationFunction<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>;

/**
 * __useUploadProfilePictureMutation__
 *
 * To run a mutation, you first call `useUploadProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadProfilePictureMutation, { data, loading, error }] = useUploadProfilePictureMutation({
 *   variables: {
 *      picture: // value for 'picture'
 *   },
 * });
 */
export function useUploadProfilePictureMutation(baseOptions?: Apollo.MutationHookOptions<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>) {
        return Apollo.useMutation<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>(UploadProfilePictureDocument, baseOptions);
      }
export type UploadProfilePictureMutationHookResult = ReturnType<typeof useUploadProfilePictureMutation>;
export type UploadProfilePictureMutationResult = Apollo.MutationResult<UploadProfilePictureMutation>;
export type UploadProfilePictureMutationOptions = Apollo.BaseMutationOptions<UploadProfilePictureMutation, UploadProfilePictureMutationVariables>;
export const GetContestDocument = gql`
    query GetContest($contestId: String!) {
  getContest(contestId: $contestId) {
    id
    name
    email
    website
    thumbnail
    description
    open
    tags
    length
    points
    startDate
    endDate
    private
    isContestant
    isStarred
    inSession
    leaderboard
    creator {
      id
      name
      profilePicture
    }
  }
}
    `;

/**
 * __useGetContestQuery__
 *
 * To run a query within a React component, call `useGetContestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContestQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useGetContestQuery(baseOptions?: Apollo.QueryHookOptions<GetContestQuery, GetContestQueryVariables>) {
        return Apollo.useQuery<GetContestQuery, GetContestQueryVariables>(GetContestDocument, baseOptions);
      }
export function useGetContestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContestQuery, GetContestQueryVariables>) {
          return Apollo.useLazyQuery<GetContestQuery, GetContestQueryVariables>(GetContestDocument, baseOptions);
        }
export type GetContestQueryHookResult = ReturnType<typeof useGetContestQuery>;
export type GetContestLazyQueryHookResult = ReturnType<typeof useGetContestLazyQuery>;
export type GetContestQueryResult = Apollo.QueryResult<GetContestQuery, GetContestQueryVariables>;
export const FindContestDocument = gql`
    query FindContest($options: PaginationArgs!) {
  findContests(options: $options) {
    id
    name
    email
    website
    thumbnail
    description
    tags
    length
    startDate
    endDate
    private
    leaderboard
  }
}
    `;

/**
 * __useFindContestQuery__
 *
 * To run a query within a React component, call `useFindContestQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindContestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindContestQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useFindContestQuery(baseOptions?: Apollo.QueryHookOptions<FindContestQuery, FindContestQueryVariables>) {
        return Apollo.useQuery<FindContestQuery, FindContestQueryVariables>(FindContestDocument, baseOptions);
      }
export function useFindContestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindContestQuery, FindContestQueryVariables>) {
          return Apollo.useLazyQuery<FindContestQuery, FindContestQueryVariables>(FindContestDocument, baseOptions);
        }
export type FindContestQueryHookResult = ReturnType<typeof useFindContestQuery>;
export type FindContestLazyQueryHookResult = ReturnType<typeof useFindContestLazyQuery>;
export type FindContestQueryResult = Apollo.QueryResult<FindContestQuery, FindContestQueryVariables>;
export const FetchSessionDocument = gql`
    query FetchSession($contestId: String!) {
  fetchSession(contestId: $contestId)
}
    `;

/**
 * __useFetchSessionQuery__
 *
 * To run a query within a React component, call `useFetchSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchSessionQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useFetchSessionQuery(baseOptions?: Apollo.QueryHookOptions<FetchSessionQuery, FetchSessionQueryVariables>) {
        return Apollo.useQuery<FetchSessionQuery, FetchSessionQueryVariables>(FetchSessionDocument, baseOptions);
      }
export function useFetchSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchSessionQuery, FetchSessionQueryVariables>) {
          return Apollo.useLazyQuery<FetchSessionQuery, FetchSessionQueryVariables>(FetchSessionDocument, baseOptions);
        }
export type FetchSessionQueryHookResult = ReturnType<typeof useFetchSessionQuery>;
export type FetchSessionLazyQueryHookResult = ReturnType<typeof useFetchSessionLazyQuery>;
export type FetchSessionQueryResult = Apollo.QueryResult<FetchSessionQuery, FetchSessionQueryVariables>;
export const FindScoresDocument = gql`
    query FindScores {
  findScores {
    total
    scored
    contest {
      id
      name
    }
  }
}
    `;

/**
 * __useFindScoresQuery__
 *
 * To run a query within a React component, call `useFindScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindScoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindScoresQuery(baseOptions?: Apollo.QueryHookOptions<FindScoresQuery, FindScoresQueryVariables>) {
        return Apollo.useQuery<FindScoresQuery, FindScoresQueryVariables>(FindScoresDocument, baseOptions);
      }
export function useFindScoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindScoresQuery, FindScoresQueryVariables>) {
          return Apollo.useLazyQuery<FindScoresQuery, FindScoresQueryVariables>(FindScoresDocument, baseOptions);
        }
export type FindScoresQueryHookResult = ReturnType<typeof useFindScoresQuery>;
export type FindScoresLazyQueryHookResult = ReturnType<typeof useFindScoresLazyQuery>;
export type FindScoresQueryResult = Apollo.QueryResult<FindScoresQuery, FindScoresQueryVariables>;
export const HasSubmittedDocument = gql`
    query HasSubmitted($contestId: String!) {
  hasSubmitted(contestId: $contestId)
}
    `;

/**
 * __useHasSubmittedQuery__
 *
 * To run a query within a React component, call `useHasSubmittedQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasSubmittedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasSubmittedQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useHasSubmittedQuery(baseOptions?: Apollo.QueryHookOptions<HasSubmittedQuery, HasSubmittedQueryVariables>) {
        return Apollo.useQuery<HasSubmittedQuery, HasSubmittedQueryVariables>(HasSubmittedDocument, baseOptions);
      }
export function useHasSubmittedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HasSubmittedQuery, HasSubmittedQueryVariables>) {
          return Apollo.useLazyQuery<HasSubmittedQuery, HasSubmittedQueryVariables>(HasSubmittedDocument, baseOptions);
        }
export type HasSubmittedQueryHookResult = ReturnType<typeof useHasSubmittedQuery>;
export type HasSubmittedLazyQueryHookResult = ReturnType<typeof useHasSubmittedLazyQuery>;
export type HasSubmittedQueryResult = Apollo.QueryResult<HasSubmittedQuery, HasSubmittedQueryVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const JoinedContestsDocument = gql`
    query JoinedContests($options: PaginationArgs!) {
  joinedContests(options: $options) {
    id
    name
    email
    website
    thumbnail
    description
    tags
    length
    startDate
    endDate
    private
    leaderboard
  }
}
    `;

/**
 * __useJoinedContestsQuery__
 *
 * To run a query within a React component, call `useJoinedContestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJoinedContestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJoinedContestsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useJoinedContestsQuery(baseOptions?: Apollo.QueryHookOptions<JoinedContestsQuery, JoinedContestsQueryVariables>) {
        return Apollo.useQuery<JoinedContestsQuery, JoinedContestsQueryVariables>(JoinedContestsDocument, baseOptions);
      }
export function useJoinedContestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JoinedContestsQuery, JoinedContestsQueryVariables>) {
          return Apollo.useLazyQuery<JoinedContestsQuery, JoinedContestsQueryVariables>(JoinedContestsDocument, baseOptions);
        }
export type JoinedContestsQueryHookResult = ReturnType<typeof useJoinedContestsQuery>;
export type JoinedContestsLazyQueryHookResult = ReturnType<typeof useJoinedContestsLazyQuery>;
export type JoinedContestsQueryResult = Apollo.QueryResult<JoinedContestsQuery, JoinedContestsQueryVariables>;
export const LeaderBoardDocument = gql`
    query LeaderBoard($contestId: String!) {
  leaderboard(contestId: $contestId) {
    scored
    total
    user {
      id
      name
      profilePicture
    }
  }
}
    `;

/**
 * __useLeaderBoardQuery__
 *
 * To run a query within a React component, call `useLeaderBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaderBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaderBoardQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useLeaderBoardQuery(baseOptions?: Apollo.QueryHookOptions<LeaderBoardQuery, LeaderBoardQueryVariables>) {
        return Apollo.useQuery<LeaderBoardQuery, LeaderBoardQueryVariables>(LeaderBoardDocument, baseOptions);
      }
export function useLeaderBoardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeaderBoardQuery, LeaderBoardQueryVariables>) {
          return Apollo.useLazyQuery<LeaderBoardQuery, LeaderBoardQueryVariables>(LeaderBoardDocument, baseOptions);
        }
export type LeaderBoardQueryHookResult = ReturnType<typeof useLeaderBoardQuery>;
export type LeaderBoardLazyQueryHookResult = ReturnType<typeof useLeaderBoardLazyQuery>;
export type LeaderBoardQueryResult = Apollo.QueryResult<LeaderBoardQuery, LeaderBoardQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const FindProblemsDocument = gql`
    query FindProblems($contestId: String!) {
  findProblems(contestId: $contestId) {
    id
    points
    contestId
    shortAnswerId
    shortAnswer {
      id
      question
      answer
      solution
    }
  }
}
    `;

/**
 * __useFindProblemsQuery__
 *
 * To run a query within a React component, call `useFindProblemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProblemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProblemsQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useFindProblemsQuery(baseOptions?: Apollo.QueryHookOptions<FindProblemsQuery, FindProblemsQueryVariables>) {
        return Apollo.useQuery<FindProblemsQuery, FindProblemsQueryVariables>(FindProblemsDocument, baseOptions);
      }
export function useFindProblemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProblemsQuery, FindProblemsQueryVariables>) {
          return Apollo.useLazyQuery<FindProblemsQuery, FindProblemsQueryVariables>(FindProblemsDocument, baseOptions);
        }
export type FindProblemsQueryHookResult = ReturnType<typeof useFindProblemsQuery>;
export type FindProblemsLazyQueryHookResult = ReturnType<typeof useFindProblemsLazyQuery>;
export type FindProblemsQueryResult = Apollo.QueryResult<FindProblemsQuery, FindProblemsQueryVariables>;