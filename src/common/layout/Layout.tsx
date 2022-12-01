import { Box, CircularProgress, Container } from '@mui/material';
import { ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthReducerAction } from '../../authentication/contexts/AuthContext';
import { useRefreshTokensMutation } from '../../generated/graphql';
import NavBar from '../components/NavBar';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [refreshTokens, { loading }] = useRefreshTokensMutation();

  useEffect(() => {
    const fetchRefreshTokens = async () => {
      try {
        await refreshTokens();
      } catch (e) {
        localStorage.removeItem('accessToken');
        dispatch({ type: AuthReducerAction.logout, payload: { user: null } });
        navigate('/login');
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
