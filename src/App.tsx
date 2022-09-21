import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Router from './common/navigation/Router';
import theme from './theme';

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql', // this is gonna be Hasura endpoint for graphql
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
};

const App = (): JSX.Element => {
  const [client] = useState(createApolloClient());
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
