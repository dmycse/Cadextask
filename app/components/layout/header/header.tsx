import { Stack, Box} from '@mui/material';
import { Wrapper, CustomLink, ContactUsButton} from '@/app/components';
import { APP_ROUTES } from '@/app/components/constants';
import { headerStyles } from './header.styles';


export let Header = () => {

  return (
    <Box component={'header'} sx={headerStyles.header}>
      <Wrapper>
        <Stack 
          component='header'
          direction='row'   
          sx={headerStyles.content}
        >
          <Box>
            <CustomLink href={APP_ROUTES.HOME} linkType='link'>
              Some Company
            </CustomLink>
          </Box>
          <ContactUsButton />
        </Stack>
      </Wrapper>
      </Box>
  );
};