import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Some Company Website",
  description: "Some Company great website",
};

export default function RootLayout(
  { children }: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
