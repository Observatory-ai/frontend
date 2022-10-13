import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { useContext } from 'react';
import { AuthContext, AuthReducerAction } from './authentication/contexts/AuthContext';

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const { dispatch, accessToken } = useContext(AuthContext);
  // const errorLink = onError(({ graphQLErrors, networkError }) => {
  //   if (graphQLErrors)
  //     graphQLErrors.map(({ message, extensions }) => {
  //       console.log(`[GraphQL error]: Message: ${message}, Location: ${extensions.code}`);
  //     });
  //   if (networkError) {
  //     console.log(`[Network error]: ${networkError}`);
  //   }
  // });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: { headers: Headers }) => {
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
      const logout = result.data?.logout;

      if (login) {
        const { accessToken, email, username, uuid } = login;
        dispatch({ type: AuthReducerAction.setCredentials, payload: { accessToken, user: { email, username, uuid } } });
      }

      if (register) {
        const { accessToken, email, username, uuid } = register;
        dispatch({ type: AuthReducerAction.setCredentials, payload: { accessToken, user: { email, username, uuid } } });
      }

      if (refreshTokens) {
        const { accessToken, email, username, uuid } = refreshTokens;
        dispatch({ type: AuthReducerAction.setCredentials, payload: { accessToken, user: { email, username, uuid } } });
      }

      if (logout) {
        dispatch({ type: AuthReducerAction.logout, payload: { accessToken: null, user: null } });
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
      link: ApolloLink.from([authLink, hasuraLink]), // restLink needs to be the last link in the chain
      connectToDevTools: true,
    });
  };

  return <ApolloProvider client={createApolloClient()}>{children}</ApolloProvider>;
};
