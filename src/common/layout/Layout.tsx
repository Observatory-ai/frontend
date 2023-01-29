import { Box, CircularProgress, Container } from '@mui/material';
import { ReactNode, useEffect } from 'react';
import { useRefreshTokensMutation } from '../../generated/graphql';
import NavBar from '../components/NavBar';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  const [refreshTokens, { data, loading }] = useRefreshTokensMutation();

  useEffect(() => {
    const fetchRefreshTokens = async () => {
      await refreshTokens();
    };
    fetchRefreshTokens();
  }, [refreshTokens]);

  return (
    <>
      {!loading && data?.refreshTokens ? (
        <>
          <NavBar />
          <Container sx={{ marginTop: '5rem' }}>{children}</Container>
        </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Layout;
