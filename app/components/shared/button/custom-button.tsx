import { ReactNode } from 'react';
import { Box, Button } from '@mui/material';
import { buttonStyles } from './button.styles';

type CustomButtonProps = {
  type?: 'button' | 'submit';
  children: ReactNode;

};

export let CustomButton = ({
    type = 'button', 
    children
  }: CustomButtonProps) => {

  return (
    <Box>
      <Button variant='contained' sx={type === 'button' ? buttonStyles.button : buttonStyles.submit}>
        {children}
      </Button>
    </Box>
  );
};
