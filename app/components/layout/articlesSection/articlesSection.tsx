import { Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ContactUsButton, CustomArticle, CustomTitle, Wrapper } from '@/app/components';
import { SECTION_TITLES } from '../../constants';
import { articleStyles } from './article.styles';

export const ArticlesSection = () => {
  return (
    <Wrapper>
      <Stack
        component='section'
        spacing={2}  
        sx={articleStyles.section}
      >
        <CustomTitle component='h2'>
          {SECTION_TITLES.ALSO_IMPORTANT}
        </CustomTitle>
        <Box
          component='section' 
          sx={articleStyles.articles}
        >
          <Grid container spacing={8}>
            {
              Array(6).fill(0).map((_, index) => (
                <CustomArticle key={index} />
              ))
            }
          </Grid>
        </Box>
        <ContactUsButton />
      </Stack>
    </Wrapper>
  );
}
