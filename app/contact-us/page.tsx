import type { Metadata } from "next";
import { contacUsMetadata } from "@/app/components/seo/metadata";

import { Stack } from "@mui/material";
import { ContactUsForm, Wrapper, ContactUsJsonLd } from "@/app/components";
import { contactUsStyles } from "./contact-us.styles";

export const metadata: Metadata = contacUsMetadata;

export default function ContacUs() {
  return (
    <>
      <Stack component='main' sx={contactUsStyles.main}>
        <Wrapper>
          <Stack component='section' sx={contactUsStyles.section}>
            <ContactUsForm />
          </Stack>
        </Wrapper>
      </Stack>
      <ContactUsJsonLd />
    </>
  );
}