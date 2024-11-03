import { ReactNode } from "react";
import { rootMetadata } from "@/app/components/seo/metadata";
import type { Metadata } from "next";

import { Tinos } from "next/font/google";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { Header, Footer } from "@/app/components";
import { Stack } from "@mui/material";


const tinos = Tinos({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-tinos',
 });

export const metadata: Metadata = rootMetadata;

export default function RootLayout(
  { children }: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <body className={tinos.variable}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack sx={{minHeight: '100dvh', position: 'relative'}}>
              <Header />
              {children}
              <Footer />
            </Stack>
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
