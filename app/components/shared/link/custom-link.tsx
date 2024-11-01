import { ReactNode } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { linkStyles } from './link.styles';

type CustomLinkProps = {
  linkType?: 'link' | 'button';
  href: string;
  children: ReactNode;
};

export let CustomLink = ({
    linkType = 'button',
    href, 
    children
  }: CustomLinkProps) => {

  return (
    <Link href={href}>
      <Typography
        component='span' 
        sx={linkType === 'button' ? linkStyles.button : linkStyles.link}
      >
        {children}
      </Typography>
    </Link>
   );
};

 