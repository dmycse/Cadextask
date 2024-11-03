import { Metadata } from "next";

let domainUrl = process.env.NEXT_PUBLIC_APP_URL as string;

export const rootMetadata: Metadata = {
  metadataBase: new URL(domainUrl),
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
    url: domainUrl,
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
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const contacUsMetadata: Metadata = {
  title: 'Contact Us',
  description: "Some Company's Contact Form page",
};