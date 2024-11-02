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
    <Button variant='contained' type={type} sx={type === 'button' ? buttonStyles.button : buttonStyles.submit}>
      {children}
    </Button>
  );
};
