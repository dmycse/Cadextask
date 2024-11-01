'use client';

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

  typography: {
    fontFamily: 'var(--font-inter)',
  }
});

export default theme;
