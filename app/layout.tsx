import { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from "./components";


const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter',
 });

export const metadata: Metadata = {
  title: "Some Company Website",
  description: "Some Company great website",
};

export default function RootLayout(
  { children }: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth='lg' sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
              <Header />
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
