import { Container } from "@mui/material";
import { ReactNode } from "react";

type CustomContainerProps = {
  children?: ReactNode;
};


export let Wrapper = ({ children }: CustomContainerProps) => {

  return (
    <Container maxWidth='lg' sx={{margin: '0 auto'}}>
      {children}
    </Container>
  );
};