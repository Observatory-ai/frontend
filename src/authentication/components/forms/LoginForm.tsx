import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { Avatar, Container, Divider, Grid, IconButton, InputAdornment, Link, Stack, TextField, Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Iconify from '../../../common/components/Iconify';
import { useGoogleAuthMutation, useLoginMutation } from '../../../generated/graphql';
import { loginSchema } from '../../schemas/formSchemas';
import { LoginFormValues } from '../../types/formValues';
import classes from './LoginForm.styles';

export default function LoginForm() {
  const { t } = useTranslation(['common', 'auth']);
  const theme = useTheme();
  const navigate = useNavigate();
  const [login, { data, error }] = useLoginMutation();
  const [googleAuth, { data: googleData }] = useGoogleAuthMutation();
  const [loginError, setLoginError] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const { register, handleSubmit, formState, setError } = useForm<LoginFormValues>({
    defaultValues: { usernameOrEmail: '', password: '' },
    resolver: yupResolver(loginSchema),
  });

  const { isSubmitting, errors } = formState;
  const onSubmit = async (formValues: LoginFormValues) => {
    const { usernameOrEmail, password } = formValues;
    await login({ variables: { signInInput: { emailOrUsername: usernameOrEmail, password } } });
  };

  const onGoogleAuthSuccess = async (response: Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>) => {
    await googleAuth({ variables: { googleAuthInput: { accessToken: response.access_token } } });
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: onGoogleAuthSuccess,
  });

  useEffect(() => {
    if (data || googleData) {
      navigate('/dashboard');
    }
  }, [data, googleData, navigate]);

  useEffect(() => {
    if (error) {
      error.graphQLErrors.forEach((err) => {
        const response = err.extensions.response as { message: string };
        setLoginError(response.message.split(':')[1]);
      });
    }
  }, [error, setError, t]);

  return (
    <Container maxWidth="xs">
      <div style={classes.formHeader}>
        <Avatar sx={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Log in
        </Typography>
      </div>
      <Stack sx={{ marginTop: theme.spacing(4), width: '100%' }} direction="row" spacing={2}>
        <Button onClick={() => loginWithGoogle()} id="google-signin-button" fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:google-fill" color="#DF3E30" height={24} />
        </Button>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:facebook-fill" color="#1877F2" height={24} />
        </Button>
      </Stack>
      <Divider sx={{ marginTop: 4, marginBottom: 3, width: '100%' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          OR
        </Typography>
      </Divider>
      {loginError && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', alignItems: 'center' }}>
          <Avatar sx={classes.errorIcon}>
            <ErrorOutlineOutlinedIcon />
          </Avatar>
          <Typography sx={{ fontWeight: theme.typography.fontWeightBold, color: theme.palette.error.light }}>
            {t(`errors.${loginError}`, { ns: 'auth' })}
          </Typography>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          required
          autoFocus
          variant="outlined"
          margin="dense"
          label="Username or Email"
          type="text"
          fullWidth
          placeholder="Username or Email"
          {...register('usernameOrEmail')}
          error={!!loginError}
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          placeholder="Password"
          {...register('password')}
          error={!!loginError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" fullWidth disabled={isSubmitting} sx={classes.submit} variant="contained">
          {t('button.login', { ns: 'common' })}
        </Button>
        <Grid>
          <Grid item>
            <Link sx={{ fontWeight: 'bold' }} href="/signup" variant="body2">
              No account? Sign up
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
