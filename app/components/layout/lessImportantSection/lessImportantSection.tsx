import { Divider, Stack } from '@mui/material';
import { APP_ROUTES, SECTION_TITLES } from '@/app/components/constants';
import { ContactUsButton, CustomButton, CustomLink, CustomTitle, Wrapper } from '@/app/components';
import { sectionStyles } from './section.styles';


export let LessImportantSection = () => {
  
  return (
    <Wrapper>
      <Stack
        component='section'
        spacing={2}  
        sx={sectionStyles.section}
      >
        <CustomTitle component='h2'>
          {SECTION_TITLES.LESS_IMPORTANT}
        </CustomTitle>
        <ContactUsButton />
      </Stack>
    </Wrapper>
  )
}
