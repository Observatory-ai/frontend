import { Container } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthReducerAction } from '../../contexts/AuthContext';
import LoginForm from '../forms/LoginForm';

function LoginPage() {
  const { user, accessToken, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user || !accessToken) {
    // call refreshToken endpoint if the user is already authenticated

    // if the refreshToken endpoint returns an error
    dispatch({ type: AuthReducerAction.logout, payload: { user: null, accessToken: null } });

    // if the refreshToken endpoint returns a new access and refresh token
    navigate('/dashboard');
  }

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

export default LoginPage;
