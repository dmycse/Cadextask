import { Stack, Box} from '@mui/material';
import { CustomButton, CustomLink } from '@/app/components';
import { APP_ROUTES } from '@/app/components/constants';
import { headerStyles } from './header.styles';


export let Header = () => {

  return (
    <Stack 
      component='header'
      direction='row' 
      justifyContent='space-between' 
      alignItems='center'  
      sx={headerStyles.header}
    >

      <Box>
        <CustomLink href={APP_ROUTES.HOME} linkType='link'>
          Some Company
        </CustomLink>
      </Box>
      
      <CustomButton>
        <CustomLink href={APP_ROUTES.CONTACT_US}>
          Contact Us
        </CustomLink>
      </CustomButton>

    </Stack>
  );
};