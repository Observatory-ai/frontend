import { Container } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRefreshTokensMutation } from '../../../generated/graphql';
import { AuthContext } from '../../contexts/AuthContext';
import LoginForm from '../forms/LoginForm';

function LoginPage() {
  const { user, accessToken, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [refreshTokens, { loading }] = useRefreshTokensMutation();

  // useEffect(() => {
  //   const fetchRefreshTokens = async () => {
  //     try {
  //       await refreshTokens();
  //       navigate('/dashboard');
  //     } catch (e) {
  //       dispatch({ type: AuthReducerAction.logout, payload: { user: null, accessToken: null } });
  //     }
  //   };
  //   if (!user || !accessToken) {
  //     fetchRefreshTokens();
  //   }
  // }, []);

  return (
    <>
      {/* {!loading ? ( */}
      <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <LoginForm />
      </Container>
      {/* ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <CircularProgress />
        </Box>
      )} */}
    </>
  );
}

export default LoginPage;
