import { Container } from '@mui/material';
import { ReactNode } from 'react';
import NavBar from '../components/NavBar';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: '5rem' }}>{children}</Container>
    </>
  );
};

export default Layout;
