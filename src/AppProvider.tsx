import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { RestLink } from 'apollo-link-rest';
import { useContext, useState } from 'react';
import { AuthContext } from './authentication/contexts/AuthContext';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { accessToken } = useContext(AuthContext);

  const link = new RestLink({
    credentials: 'include', // same-origin (same domains)
    uri: 'http://localhost:3000/api/auth', // switch env variable
  });
  // need to add Hasura endpoint for graphql

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };
  });

  const createApolloClient = () => {
    return new ApolloClient({
      link: authLink.concat(link),
      cache: new InMemoryCache(),
      connectToDevTools: true,
    });
  };

  const [client] = useState(createApolloClient());

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
