import Script from "next/script";
import { WithContext, WebSite } from "schema-dts";


export const homeSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Home Page",
  "description": "Some Company's Great Website",
  "url": process.env.NEXT_PUBLIC_APP_URL,
  "image": "/somecompany.png",
};

const HomeJsonLd = () =>{
 return (
    <Script
      id="home.id"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(homeSchema),
      }}
  />
 )
};

export const contactUsSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Contact-us` Page",
  description: "Some Company's Contact Form page",
  headline: "Contact us",
  url: process.env.NEXT_PUBLIC_APP_URL + 'contact-us',
  image: "/somecompany.png",
  isPartOf: {
    "@type": "WebSite",
    name: "Some Company",
    url: process.env.NEXT_PUBLIC_APP_URL,
    description: "Some Company's Great Website",
  },
};

const ContactUsJsonLd = () =>{
  return (
     <Script
      id="contact.id"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(contactUsSchema),
      }}
   />
  )
 };

 export { HomeJsonLd, ContactUsJsonLd };