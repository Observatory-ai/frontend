import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { useContext } from 'react';
import { AuthContext, AuthReducerAction } from './authentication/contexts/AuthContext';

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const { dispatch } = useContext(AuthContext);
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
        const { accessToken, email, username, uuid } = login;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: AuthReducerAction.setCredentials, payload: { user: { email, username, uuid } } });
      }

      if (register) {
        const { accessToken, email, username, uuid } = register;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: AuthReducerAction.setCredentials, payload: { user: { email, username, uuid } } });
      }

      if (refreshTokens) {
        const { accessToken, email, username, uuid } = refreshTokens;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: AuthReducerAction.setCredentials, payload: { user: { email, username, uuid } } });
      }

      if (googleAuth) {
        const { accessToken, email, username, uuid } = googleAuth;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: AuthReducerAction.setCredentials, payload: { user: { email, username, uuid } } });
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
      link: ApolloLink.from([authLink, hasuraLink]), // restLink needs to be the last link in the chain
      connectToDevTools: true,
    });
  };

  return <ApolloProvider client={createApolloClient()}>{children}</ApolloProvider>;
};
