import { createTheme } from '@mui/material';

const theme = createTheme({
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

// theme = createTheme(theme, {
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           fontSize: '1rem',
//         },
//       },
//     },
//     MuiFormLabel: {
//       styleOverrides: {
//         root: {
//           asterisk: {
//             color: '#db3131',
//             '&$error': {
//               color: '#db3131',
//             },
//           },
//         },
//       },
//     },
//     MuiListSubheader: {
//       styleOverrides: {
//         root: {
//           fontSize: '1rem',
//           fontWeight: 'bold',
//           lineHeight: '1rem',
//           paddingTop: '0.5rem',
//         },
//       },
//     },
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           fontSize: '1rem',
//           fontWeight: 'bold',
//         },
//       },
//     },
//   },
// });

export default theme;
