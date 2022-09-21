import { createTheme } from '@mui/material';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#24212b',
    },
    secondary: {
      main: '#ff5851',
    },
    background: {
      default: '#f4f5fe',
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          asterisk: {
            color: '#db3131',
            '&$error': {
              color: '#db3131',
            },
          },
        },
      },
    },
  },
});

export default theme;
