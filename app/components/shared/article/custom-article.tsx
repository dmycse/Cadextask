import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { CustomTitle } from '@/app/components'

export const CustomArticle = () => {
  return (
    <Grid size={{md: 4, sm: 6 }} sx={{px: 2}}>
      <CustomTitle component='h4'>
        Title
      </CustomTitle>
      <Typography component='p' sx={{mt: 1}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
      </Typography>
    </Grid>
  )
}
