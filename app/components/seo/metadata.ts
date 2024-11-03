import { Metadata } from "next";

export const rootMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL as string),
  title: {
    absolute: "Great Website | Some Company",
    default: "Some Company",
    template: "%s | Some Company",
  },
  description: "Some Company's Great Website",
  openGraph: {
    type: "website",
    title: "Great Website | Some Company",
    description: "Some Company's Great Website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "Some Company",
    images: [
      {
        url: "/somecompany.png",
        width: 600,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@somecompany",
    description: "Some Company's Great Website",
  },
  
};

export const contacUsMetadata: Metadata = {
  title: 'Contact Us',
  description: "Some Company's Contact Form page",
};