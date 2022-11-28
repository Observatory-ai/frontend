import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from 'apollo-link-error';
import { useContext } from 'react';
import { AuthContext, AuthReducerAction } from './authentication/contexts/AuthContext';

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const { dispatch } = useContext(AuthContext);
  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors)
      // need to handle unauthorized error
      // checkout retry link
      graphQLErrors.map(({ message }) => {
        // console.log(`[GraphQL error]: Message: ${JSON.parse(message).username}`);
      });
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: { headers: Headers }) => {
      const accessToken = localStorage.getItem('accessToken');
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
          'x-hasura-admin-secret': 'admin', // switch to .env variable
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
    uri: 'http://localhost:8080/v1/graphql', // switch to env variable
  });

  const createApolloClient = () => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: ApolloLink.from([errorLink as unknown as ApolloLink, authLink, hasuraLink]),
      connectToDevTools: true,
    });
  };

  return <ApolloProvider client={createApolloClient()}>{children}</ApolloProvider>;
};
