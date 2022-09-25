import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { useContext, useState } from 'react';
import { AuthContext, AuthReducerAction } from './authentication/contexts/AuthContext';

type AppProviderProps = {
  children: React.ReactNode;
};

type RestResponse = {
  body: ReadableStream;
  bodyUsed: boolean;
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { dispatch, accessToken } = useContext(AuthContext);

  const authRestLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: { headers: Headers }) => {
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    });
    return forward(operation).map((result: any) => {
      const { restResponses } = operation.getContext();
      const isLogin: RestResponse = restResponses.find((response: RestResponse) => response.url.includes('api/auth/login'));
      const isRegister: RestResponse = restResponses.find((response: RestResponse) => response.url.includes('api/auth/register'));

      if (isLogin) {
        const { accessToken, email, username, uuid } = result.data.login;
        dispatch({ type: AuthReducerAction.loginOrRegister, payload: { accessToken, user: { email, username, uuid } } });
      }
      if (isRegister) {
        const { accessToken, email, username, uuid } = result.data.register;
        dispatch({ type: AuthReducerAction.loginOrRegister, payload: { accessToken, user: { email, username, uuid } } });
      }
      return result;
    });
  });

  const restLink = new RestLink({
    credentials: 'include', // same-origin (same domains)
    uri: 'http://localhost:3000/api/auth', // switch to env variable
  });
  // need to add Hasura endpoint for graphql

  const createApolloClient = () => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: ApolloLink.from([authRestLink, restLink]), // restLink needs to be the last link in the chain
      connectToDevTools: true,
    });
  };

  const [client] = useState(createApolloClient());

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
