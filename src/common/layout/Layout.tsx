import { Container } from '@mui/material';
import { ReactNode, useEffect } from 'react';
import { useRefreshTokensMutation } from '../../generated/graphql';
import NavBar from '../components/NavBar';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  const [refreshTokens] = useRefreshTokensMutation();

  useEffect(() => {
    const fetchRefreshTokens = async () => {
      await refreshTokens();
    };
    fetchRefreshTokens();
  }, []);

  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: '5rem' }}>{children}</Container>
    </>
  );
};

export default Layout;
