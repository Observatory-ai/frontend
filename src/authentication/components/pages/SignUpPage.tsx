import { Box, CircularProgress, Container } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRefreshTokensMutation } from '../../../generated/graphql';
import { AuthContext, AuthReducerAction } from '../../contexts/AuthContext';
import SignUpForm from '../forms/SignUpForm';

function SignupPage() {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [refreshTokens, { loading }] = useRefreshTokensMutation();

  useEffect(() => {
    const fetchRefreshTokens = async () => {
      try {
        await refreshTokens();
        navigate('/dashboard');
      } catch (e) {
        localStorage.removeItem('accessToken');
        dispatch({ type: AuthReducerAction.logout, payload: { user: null } });
      }
    };
    const accessToken = localStorage.getItem('accessToken');
    if (!user || !accessToken) {
      fetchRefreshTokens();
    }
  }, []);

  return (
    <>
      {!loading ? (
        <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <SignUpForm />
        </Container>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default SignupPage;
