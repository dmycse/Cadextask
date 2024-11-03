'use client';

import { blueGrey, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body {
          maxWidth: 100vw;
          height: 100%;
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
      light: blueGrey[50],
      dark: blueGrey[400],
    },
    secondary: {
      main: grey[50],
    },
  },
  
});

export default theme;
