import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import { AppProvider } from './AppProvider';
import AuthContextProvider from './authentication/contexts/AuthContext';
import Router from './common/navigation/Router';
import theme from './theme';

const App = (): JSX.Element => {
  const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID as string;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
          <AppProvider>
            <Router />
          </AppProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
