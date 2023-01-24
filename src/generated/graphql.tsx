import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ChangePasswordDto = {
  confirmPassword: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};

export type CurrentUserResponseDto = {
  __typename?: 'CurrentUserResponseDto';
  avatar: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  uuid: Scalars['String'];
};

export type ForgotPasswordDto = {
  email: Scalars['String'];
};

export type GoogleAuthDto = {
  accessToken: Scalars['String'];
};

export type GoogleCalendarActivationDto = {
  activationCode: Scalars['String'];
};

export type GoogleCalendarEvents = {
  __typename?: 'GoogleCalendarEvents';
  accessRole: Scalars['String'];
  defaultReminders: Array<GoogleCalendarEventsDefaultReminders>;
  etag: Scalars['String'];
  items: Array<GoogleCalendarEventsItems>;
  kind: Scalars['String'];
  summary: Scalars['String'];
  timeZone: Scalars['String'];
  updated: Scalars['String'];
};

export type GoogleCalendarEventsDefaultReminders = {
  __typename?: 'GoogleCalendarEventsDefaultReminders';
  method: Scalars['String'];
  minutes: Scalars['Int'];
};

export type GoogleCalendarEventsItems = {
  __typename?: 'GoogleCalendarEventsItems';
  attendees?: Maybe<Array<GoogleCalendarEventsItemsAttendees>>;
  created: Scalars['String'];
  creator?: Maybe<GoogleCalendarEventsItemsCreator>;
  end: GoogleCalendarEventsItemsEnd;
  etag: Scalars['String'];
  eventType: Scalars['String'];
  htmlLink: Scalars['String'];
  iCalUID: Scalars['String'];
  id: Scalars['String'];
  kind: Scalars['String'];
  organizer?: Maybe<GoogleCalendarEventsItemsOrganizer>;
  reminders: GoogleCalendarEventsItemsReminders;
  sequence: Scalars['Int'];
  start: GoogleCalendarEventsItemsStart;
  status: Scalars['String'];
  summary: Scalars['String'];
  updated: Scalars['String'];
};

export type GoogleCalendarEventsItemsAttendees = {
  __typename?: 'GoogleCalendarEventsItemsAttendees';
  additionalGuests?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  optional?: Maybe<Scalars['Boolean']>;
  organizer?: Maybe<Scalars['Boolean']>;
  resource?: Maybe<Scalars['Boolean']>;
  responseStatus?: Maybe<Scalars['String']>;
  self?: Maybe<Scalars['Boolean']>;
};

export type GoogleCalendarEventsItemsCreator = {
  __typename?: 'GoogleCalendarEventsItemsCreator';
  displayName: Scalars['String'];
  email: Scalars['String'];
  self: Scalars['Boolean'];
};

export type GoogleCalendarEventsItemsEnd = {
  __typename?: 'GoogleCalendarEventsItemsEnd';
  dateTime: Scalars['String'];
  timeZone: Scalars['String'];
};

export type GoogleCalendarEventsItemsOrganizer = {
  __typename?: 'GoogleCalendarEventsItemsOrganizer';
  displayName: Scalars['String'];
  email: Scalars['String'];
  self: Scalars['Boolean'];
};

export type GoogleCalendarEventsItemsReminders = {
  __typename?: 'GoogleCalendarEventsItemsReminders';
  useDefault: Scalars['Boolean'];
};

export type GoogleCalendarEventsItemsStart = {
  __typename?: 'GoogleCalendarEventsItemsStart';
  dateTime: Scalars['String'];
  timeZone: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateGoogleCalendar: Scalars['Boolean'];
  authenticateWithGoogle: UserResponseDto;
  changePassword: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: UserResponseDto;
  logout: Scalars['Boolean'];
  refreshTokens: UserResponseDto;
  register: UserResponseDto;
  verifyAccount: Scalars['Boolean'];
};


export type MutationActivateGoogleCalendarArgs = {
  GoogleCalendarActivationInput: GoogleCalendarActivationDto;
};


export type MutationAuthenticateWithGoogleArgs = {
  GoogleAuthInput: GoogleAuthDto;
};


export type MutationChangePasswordArgs = {
  ChangePasswordInput: ChangePasswordDto;
};


export type MutationForgotPasswordArgs = {
  ForgotPasswordInput: ForgotPasswordDto;
};


export type MutationLoginArgs = {
  SignInInput: SignInDto;
};


export type MutationRegisterArgs = {
  SignUpInput: SignUpDto;
};


export type MutationVerifyAccountArgs = {
  VerifyAccountInput: VerifyAccountDto;
};

export type Query = {
  __typename?: 'Query';
  currentUser: CurrentUserResponseDto;
  googleCalendarEvents?: Maybe<GoogleCalendarEvents>;
};

export type SignInDto = {
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpDto = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponseDto = {
  __typename?: 'UserResponseDto';
  accessToken: Scalars['String'];
  avatar: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  uuid: Scalars['String'];
};

export type VerifyAccountDto = {
  token: Scalars['String'];
};

export type GoogleAuthMutationVariables = Exact<{
  googleAuthInput: GoogleAuthDto;
}>;


export type GoogleAuthMutation = { __typename?: 'Mutation', authenticateWithGoogle: { __typename?: 'UserResponseDto', accessToken: string, email: string, username: string, uuid: string, avatar: string } };

export type LoginMutationVariables = Exact<{
  signInInput: SignInDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponseDto', accessToken: string, email: string, username: string, uuid: string, avatar: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'Mutation', refreshTokens: { __typename?: 'UserResponseDto', accessToken: string, email: string, username: string, uuid: string, avatar: string } };

export type RegisterMutationVariables = Exact<{
  signUpInput: SignUpDto;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponseDto', accessToken: string, email: string, username: string, uuid: string, avatar: string } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'CurrentUserResponseDto', email: string, username: string, uuid: string, avatar: string } };

export type GoogleCalendarActivationMutationVariables = Exact<{
  googleCalendarActivationInput: GoogleCalendarActivationDto;
}>;


export type GoogleCalendarActivationMutation = { __typename?: 'Mutation', activateGoogleCalendar: boolean };

export type GoogleCalendarEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GoogleCalendarEventsQuery = { __typename?: 'Query', googleCalendarEvents?: { __typename?: 'GoogleCalendarEvents', items: Array<{ __typename?: 'GoogleCalendarEventsItems', summary: string, start: { __typename?: 'GoogleCalendarEventsItemsStart', dateTime: string, timeZone: string }, end: { __typename?: 'GoogleCalendarEventsItemsEnd', dateTime: string, timeZone: string } }> } | null };

export type GoogleCalendarWeeklyTrendsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GoogleCalendarWeeklyTrendsQueryQuery = { __typename?: 'Query', googleCalendarEvents?: { __typename?: 'GoogleCalendarEvents', items: Array<{ __typename?: 'GoogleCalendarEventsItems', summary: string, start: { __typename?: 'GoogleCalendarEventsItemsStart', dateTime: string, timeZone: string }, end: { __typename?: 'GoogleCalendarEventsItemsEnd', dateTime: string, timeZone: string }, organizer?: { __typename?: 'GoogleCalendarEventsItemsOrganizer', email: string } | null, attendees?: Array<{ __typename?: 'GoogleCalendarEventsItemsAttendees', email?: string | null, displayName?: string | null, organizer?: boolean | null, self?: boolean | null }> | null }> } | null };


export const GoogleAuthDocument = gql`
    mutation GoogleAuth($googleAuthInput: GoogleAuthDto!) {
  authenticateWithGoogle(GoogleAuthInput: $googleAuthInput) {
    accessToken
    email
    username
    uuid
    avatar
  }
}
    `;
export type GoogleAuthMutationFn = Apollo.MutationFunction<GoogleAuthMutation, GoogleAuthMutationVariables>;

/**
 * __useGoogleAuthMutation__
 *
 * To run a mutation, you first call `useGoogleAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleAuthMutation, { data, loading, error }] = useGoogleAuthMutation({
 *   variables: {
 *      googleAuthInput: // value for 'googleAuthInput'
 *   },
 * });
 */
export function useGoogleAuthMutation(baseOptions?: Apollo.MutationHookOptions<GoogleAuthMutation, GoogleAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GoogleAuthMutation, GoogleAuthMutationVariables>(GoogleAuthDocument, options);
      }
export type GoogleAuthMutationHookResult = ReturnType<typeof useGoogleAuthMutation>;
export type GoogleAuthMutationResult = Apollo.MutationResult<GoogleAuthMutation>;
export type GoogleAuthMutationOptions = Apollo.BaseMutationOptions<GoogleAuthMutation, GoogleAuthMutationVariables>;
export const LoginDocument = gql`
    mutation Login($signInInput: SignInDto!) {
  login(SignInInput: $signInInput) {
    accessToken
    email
    username
    uuid
    avatar
  }
}
    `;
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
 *      signInInput: // value for 'signInInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshTokensDocument = gql`
    mutation RefreshTokens {
  refreshTokens {
    accessToken
    email
    username
    uuid
    avatar
  }
}
    `;
export type RefreshTokensMutationFn = Apollo.MutationFunction<RefreshTokensMutation, RefreshTokensMutationVariables>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokensMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokensMutation, RefreshTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokensMutation, RefreshTokensMutationVariables>(RefreshTokensDocument, options);
      }
export type RefreshTokensMutationHookResult = ReturnType<typeof useRefreshTokensMutation>;
export type RefreshTokensMutationResult = Apollo.MutationResult<RefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($signUpInput: SignUpDto!) {
  register(SignUpInput: $signUpInput) {
    accessToken
    email
    username
    uuid
    avatar
  }
}
    `;
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
 *      signUpInput: // value for 'signUpInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    email
    username
    uuid
    avatar
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const GoogleCalendarActivationDocument = gql`
    mutation googleCalendarActivation($googleCalendarActivationInput: GoogleCalendarActivationDto!) {
  activateGoogleCalendar(
    GoogleCalendarActivationInput: $googleCalendarActivationInput
  )
}
    `;
export type GoogleCalendarActivationMutationFn = Apollo.MutationFunction<GoogleCalendarActivationMutation, GoogleCalendarActivationMutationVariables>;

/**
 * __useGoogleCalendarActivationMutation__
 *
 * To run a mutation, you first call `useGoogleCalendarActivationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleCalendarActivationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleCalendarActivationMutation, { data, loading, error }] = useGoogleCalendarActivationMutation({
 *   variables: {
 *      googleCalendarActivationInput: // value for 'googleCalendarActivationInput'
 *   },
 * });
 */
export function useGoogleCalendarActivationMutation(baseOptions?: Apollo.MutationHookOptions<GoogleCalendarActivationMutation, GoogleCalendarActivationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GoogleCalendarActivationMutation, GoogleCalendarActivationMutationVariables>(GoogleCalendarActivationDocument, options);
      }
export type GoogleCalendarActivationMutationHookResult = ReturnType<typeof useGoogleCalendarActivationMutation>;
export type GoogleCalendarActivationMutationResult = Apollo.MutationResult<GoogleCalendarActivationMutation>;
export type GoogleCalendarActivationMutationOptions = Apollo.BaseMutationOptions<GoogleCalendarActivationMutation, GoogleCalendarActivationMutationVariables>;
export const GoogleCalendarEventsDocument = gql`
    query GoogleCalendarEvents {
  googleCalendarEvents {
    items {
      summary
      start {
        dateTime
        timeZone
      }
      end {
        dateTime
        timeZone
      }
    }
  }
}
    `;

/**
 * __useGoogleCalendarEventsQuery__
 *
 * To run a query within a React component, call `useGoogleCalendarEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoogleCalendarEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoogleCalendarEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGoogleCalendarEventsQuery(baseOptions?: Apollo.QueryHookOptions<GoogleCalendarEventsQuery, GoogleCalendarEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoogleCalendarEventsQuery, GoogleCalendarEventsQueryVariables>(GoogleCalendarEventsDocument, options);
      }
export function useGoogleCalendarEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoogleCalendarEventsQuery, GoogleCalendarEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoogleCalendarEventsQuery, GoogleCalendarEventsQueryVariables>(GoogleCalendarEventsDocument, options);
        }
export type GoogleCalendarEventsQueryHookResult = ReturnType<typeof useGoogleCalendarEventsQuery>;
export type GoogleCalendarEventsLazyQueryHookResult = ReturnType<typeof useGoogleCalendarEventsLazyQuery>;
export type GoogleCalendarEventsQueryResult = Apollo.QueryResult<GoogleCalendarEventsQuery, GoogleCalendarEventsQueryVariables>;
export const GoogleCalendarWeeklyTrendsQueryDocument = gql`
    query GoogleCalendarWeeklyTrendsQuery {
  googleCalendarEvents {
    items {
      summary
      start {
        dateTime
        timeZone
      }
      end {
        dateTime
        timeZone
      }
      organizer {
        email
      }
      attendees {
        email
        displayName
        organizer
        self
      }
    }
  }
}
    `;

/**
 * __useGoogleCalendarWeeklyTrendsQueryQuery__
 *
 * To run a query within a React component, call `useGoogleCalendarWeeklyTrendsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoogleCalendarWeeklyTrendsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoogleCalendarWeeklyTrendsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGoogleCalendarWeeklyTrendsQueryQuery(baseOptions?: Apollo.QueryHookOptions<GoogleCalendarWeeklyTrendsQueryQuery, GoogleCalendarWeeklyTrendsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoogleCalendarWeeklyTrendsQueryQuery, GoogleCalendarWeeklyTrendsQueryQueryVariables>(GoogleCalendarWeeklyTrendsQueryDocument, options);
      }
export function useGoogleCalendarWeeklyTrendsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoogleCalendarWeeklyTrendsQueryQuery, GoogleCalendarWeeklyTrendsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoogleCalendarWeeklyTrendsQueryQuery, GoogleCalendarWeeklyTrendsQueryQueryVariables>(GoogleCalendarWeeklyTrendsQueryDocument, options);
        }
export type GoogleCalendarWeeklyTrendsQueryQueryHookResult = ReturnType<typeof useGoogleCalendarWeeklyTrendsQueryQuery>;
export type GoogleCalendarWeeklyTrendsQueryLazyQueryHookResult = ReturnType<typeof useGoogleCalendarWeeklyTrendsQueryLazyQuery>;
export type GoogleCalendarWeeklyTrendsQueryQueryResult = Apollo.QueryResult<GoogleCalendarWeeklyTrendsQueryQuery, GoogleCalendarWeeklyTrendsQueryQueryVariables>;