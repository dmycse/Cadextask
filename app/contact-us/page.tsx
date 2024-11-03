import type { Metadata } from "next";
import { contacUsMetadata } from "@/app/components/seo/metadata";

import { Stack } from "@mui/material";
import { ContactUsForm, CustomTitle, Wrapper, ContactUsJsonLd } from "@/app/components";
import { SECTION_TITLES } from "../components/constants";
import { contactUsStyles } from "./contact-us.styles";

export const metadata: Metadata = contacUsMetadata;

export default function ContacUs() {
  return (
    <>
      <ContactUsJsonLd />
      <Stack component='main' sx={contactUsStyles.main}>
        <Wrapper>
          <Stack component='section' sx={contactUsStyles.section}>
            <CustomTitle component='h1'>
              {SECTION_TITLES.CONTACT_US}
            </CustomTitle>
            <ContactUsForm />
          </Stack>
        </Wrapper>
      </Stack>
    </>
  );
}