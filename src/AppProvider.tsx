import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from 'apollo-link-error';
import { useContext } from 'react';
import { AuthContext, AuthReducerAction } from './authentication/contexts/AuthContext';

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const { dispatch } = useContext(AuthContext);
  const hasuraURI = process.env.REACT_APP_HASURA as string;
  const adminSecret = process.env.REACT_APP_ADMIN_SECRET as string;
  const errorLink = onError(({ graphQLErrors, networkError, response }) => {
    // need to handle unauthorized error
    // checkout retry link
    // if (networkError) {
    //   console.log(`[Network error]: ${networkError}`);
    // }
    // if (graphQLErrors) {
    //   const errors = graphQLErrors.map((error) => {
    //     const parsedMessage = JSON.parse(error.message);
    //     return { extensions: error.extensions, message: parsedMessage };
    //   }) as GraphQLError[];
    //   if (response) {
    //     response.errors = errors;
    //   }
    // }
  });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: { headers: Headers }) => {
      const accessToken = localStorage.getItem('accessToken');
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
          'x-hasura-admin-secret': adminSecret, // switch to .env variable
        },
      };
    });
    return forward(operation).map((result: any) => {
      const login = result.data?.login;
      const register = result.data?.register;
      const refreshTokens = result.data?.refreshTokens;
      const googleAuth = result.data?.googleAuth;
      const logout = result.data?.logout;

      if (login) {
        const { accessToken, email, username, uuid, avatar } = login;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: AuthReducerAction.setCredentials, payload: { user: { email, username, uuid, avatar } } });
      }

      if (register) {
        const { accessToken, email, username, uuid, avatar } = register;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: AuthReducerAction.setCredentials, payload: { user: { email, username, uuid, avatar } } });
      }

      if (refreshTokens) {
        const { accessToken, email, username, uuid, avatar } = refreshTokens;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: AuthReducerAction.setCredentials, payload: { user: { email, username, uuid, avatar } } });
      }

      if (googleAuth) {
        const { accessToken, email, username, uuid, avatar } = googleAuth;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: AuthReducerAction.setCredentials, payload: { user: { email, username, uuid, avatar } } });
      }

      if (logout) {
        localStorage.removeItem('accessToken');
        dispatch({ type: AuthReducerAction.logout, payload: { user: null } });
      }

      return result;
    });
  });

  const hasuraLink = new HttpLink({
    credentials: 'include', // same-origin (same domains)
    uri: hasuraURI,
  });

  const createApolloClient = () => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: ApolloLink.from([authLink, errorLink as unknown as ApolloLink, hasuraLink]),
      connectToDevTools: true,
    });
  };

  return <ApolloProvider client={createApolloClient()}>{children}</ApolloProvider>;
};
