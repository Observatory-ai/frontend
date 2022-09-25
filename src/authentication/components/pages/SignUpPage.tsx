import { Container } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import SignUpForm from '../forms/SignUpForm';

function SignupPage() {
  const { user, accessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user && accessToken) {
    navigate('/dashboard');
    return null;
  }

  return (
    <Container>
      <SignUpForm />
    </Container>
  );
}

export default SignupPage;
