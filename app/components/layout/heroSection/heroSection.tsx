import { CustomTitle, Wrapper } from "@/app/components";
import { Stack, Typography } from "@mui/material";

import { SECTION_TITLES } from "../../constants";
import { heroStyles } from "./hero.styles";
import VideoPlayer from "./videoplayer";

export let HeroSection = () => {

  return (
    <Wrapper>
      <Stack
        component='section'
        direction='row'
        // spacing={4}
        sx={heroStyles.section}
      >
        <Stack spacing={4} sx={heroStyles.content}>
          <CustomTitle component='h1'>
            {SECTION_TITLES.HERO}
          </CustomTitle>
          <Typography component='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis qui atque, possimus temporibus officiis voluptatibus exercitationem doloremque vitae quidem.
          </Typography>
        </Stack>
        <Stack sx={heroStyles.video}>
          <VideoPlayer />
        </Stack>
      </Stack>
    </Wrapper>
  );
};