import { ReactNode } from 'react';
import { Button } from '@mui/material';
import { buttonStyles } from './button.styles';

type CustomButtonProps = {
  type?: 'button' | 'submit';
  disabled?: boolean;
  children: ReactNode;

};

export let CustomButton = ({
    type = 'button',
    disabled = false, 
    children
  }: CustomButtonProps) => {

  return (
    <Button 
      variant='contained'
      type={type} 
      disabled={disabled}
      sx={type === 'button' ? buttonStyles.button : buttonStyles.submit}
    >
      {children}
    </Button>
  );
};
