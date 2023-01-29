import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from 'apollo-link-error';
import { useContext } from 'react';
import { AuthContext, AuthReducerAction } from './authentication/contexts/AuthContext';
import { RefreshTokensDocument } from './generated/graphql';

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const { dispatch } = useContext(AuthContext);
  const graphqlURI = process.env.REACT_APP_GRAPHQL as string;

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED': {
            if (operation.operationName === 'RefreshTokens') {
              if (window.location.pathname !== '/login') {
                window.location.href = '/login';
              }
              return;
            }
            refreshToken().then((data) => {
              const oldHeaders = operation.getContext().headers;
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: data ? `Bearer ${data}` : '',
                },
              });
              return forward(operation);
            });
          }
        }
      }
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: { headers: Headers }) => {
      // TODO: find a way to pull this token from memory instead of local storage
      // Example: apollo cache, context, etc.
      const accessToken = localStorage.getItem('accessToken');
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    });
    return forward(operation).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result: any) => {
        const login = result.data?.login;
        const register = result.data?.register;
        const refreshTokens = result.data?.refreshTokens;
        const googleAuth = result.data?.authenticateWithGoogle;
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
          client.resetStore();
        }

        return result;
      }
    );
  });

  const httpLink = new HttpLink({
    credentials: 'include', // same-origin (same domains)
    uri: graphqlURI,
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink as unknown as ApolloLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  const refreshToken = async () => {
    try {
      const refreshTokensResponse = await client.mutate<{
        refreshTokens: { accessToken: string };
      }>({
        mutation: RefreshTokensDocument,
      });
      const accessToken = refreshTokensResponse.data?.refreshTokens.accessToken;
      return accessToken;
    } catch (err) {
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
      throw err;
    }
  };

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
