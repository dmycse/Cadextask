import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { titleStyles } from './title.styles';

type CustomTitleProps = {
  component?: 'h1' |'h2' | 'h4';
  children: ReactNode;
};

export const CustomTitle = ({component = 'h2', children}: CustomTitleProps) => {

  let headingStyles = {
    h1: titleStyles.h1,
    h2: titleStyles.h2,
    h4: titleStyles.h4
  };

  return (
    <Box>
      <Typography 
        component={component} 
        sx={headingStyles[component]}
      >
        {children}
      </Typography>
    </Box>
  )
}
