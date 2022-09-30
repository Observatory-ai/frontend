import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import './App.css';
import { AppProvider } from './AppProvider';
import AuthContextProvider from './authentication/contexts/AuthContext';
import Router from './common/navigation/Router';
import theme from './theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthContextProvider>
        <AppProvider>
          <Router />
        </AppProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
