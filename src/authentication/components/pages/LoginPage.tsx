import { Box, CircularProgress, Container } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRefreshTokensMutation } from '../../../generated/graphql';
import LoginForm from '../forms/LoginForm';

function LoginPage() {
  const navigate = useNavigate();
  const [refreshTokens, { loading, data }] = useRefreshTokensMutation();

  useEffect(() => {
    const fetchRefreshTokens = async () => {
      await refreshTokens();
    };
    fetchRefreshTokens();
  }, [refreshTokens]);

  useEffect(() => {
    if (data?.refreshTokens) {
      navigate('/dashboard');
    }
  }, [data, navigate]);

  return (
    <>
      {!loading ? (
        <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <LoginForm />
        </Container>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default LoginPage;
