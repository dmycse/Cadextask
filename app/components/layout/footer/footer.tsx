import { Box, Stack } from "@mui/material";
import { CustomLink, Wrapper } from "@/app/components";
import { APP_ROUTES } from "@/app/components/constants";
import { footerStyles } from "./footer.styles";

export let Footer = () => {

  return (
    <Box component={'footer'} sx={footerStyles.footer}>
      <Wrapper>
        <Stack 
          component='footer'
          direction='row'
          sx={footerStyles.content}
        >
          <Box>
            <CustomLink href={APP_ROUTES.HOME} linkType='link'>
              Some Company 2024
            </CustomLink>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};