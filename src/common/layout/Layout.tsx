import { Container } from '@mui/material';
import { ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthReducerAction } from '../../authentication/contexts/AuthContext';
import NavBar from '../components/NavBar';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  const { user, accessToken, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user || !accessToken) {
    // need to call the refreshToken endpoint before
    dispatch({ type: AuthReducerAction.logout, payload: { user: null, accessToken: null } });
    navigate('/login');
    return null;
  }

  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: '3rem' }}>{children}</Container>
    </>
  );
};

export default Layout;
