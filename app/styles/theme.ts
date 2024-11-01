'use client';

import { blueGrey, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      html, body {
        maxWidth: 100vw;
        height: 100vh;
        overflow-x: hidden;
      }

      a {
        text-decoration: none;
      }
    `
    }
  },
  palette: {
    primary: {
      main: grey[900],
      light: blueGrey[100],
      dark: blueGrey[400],
    },
    secondary: {
      main: grey[50],
    },
  },
  
  typography: {
    fontFamily: 'var(--font-inter)',
  }
});

export default theme;
