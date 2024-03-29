import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Avatar,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import Button from '@mui/material/Button';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Iconify from '../../../common/components/Iconify';
import {
  useGoogleAuthMutation,
  useRegisterMutation,
} from '../../../generated/graphql';
import { signUpSchema } from '../../schemas/formSchemas';
import { SignUpFormValues } from '../../types/formValues';
import classes from './SignUpForm.styles';

const SignUpForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation(['common', 'auth']);
  const [registerMutation, { data, error }] = useRegisterMutation();
  const [googleAuth, { data: googleData }] = useGoogleAuthMutation();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { register, handleSubmit, formState, setError } =
    useForm<SignUpFormValues>({
      defaultValues: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      resolver: yupResolver(signUpSchema),
    });

  const { isSubmitting, errors } = formState;

  const onSubmit = async (formValues: SignUpFormValues) => {
    const { firstName, lastName, email, username, password, confirmPassword } =
      formValues;
    await registerMutation({
      variables: {
        signUpInput: {
          email,
          firstName,
          lastName,
          username,
          password,
          confirmPassword,
        },
      },
    });
  };

  const onGoogleAuthSuccess = async (
    response: Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>
  ) => {
    await googleAuth({
      variables: { googleAuthInput: { accessToken: response.access_token } },
    });
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: onGoogleAuthSuccess,
  });

  useEffect(() => {
    if (error) {
      error.graphQLErrors.forEach((err) => {
        const response = err.extensions.response as { message: string | [] };
        if (Array.isArray(response.message)) {
          response.message.forEach((errorMessage: string) => {
            const message = errorMessage.split(':');
            setError(message[0] as any, {
              message: t(`errors.${message[1]}`, { ns: 'auth' }),
            });
          });
        } else {
          const message = response.message.split(':');
          setError(message[0] as any, {
            message: t(`errors.${message[1]}`, { ns: 'auth' }),
          });
        }
      });
    }
  }, [error, setError, t]);

  useEffect(() => {
    if (data || googleData) {
      navigate('/dashboard');
    }
  }, [data, googleData, navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <div style={classes.formHeader}>
        <Avatar sx={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Sign Up
        </Typography>
      </div>
      <Stack
        sx={{ marginTop: theme.spacing(4), width: '100%' }}
        direction="row"
        spacing={2}
      >
        <Button
          onClick={() => loginWithGoogle()}
          id="google-signin-button"
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
        >
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              autoFocus
              variant="outlined"
              margin="dense"
              label="First Name"
              type="text"
              autoComplete="fname"
              placeholder="First name"
              {...register('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName?.message : null}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              variant="outlined"
              margin="dense"
              label="Last Name"
              type="text"
              autoComplete="lname"
              placeholder="Last name"
              {...register('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName?.message : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              variant="outlined"
              margin="dense"
              label="Email"
              type="text"
              placeholder="Email"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              variant="outlined"
              margin="dense"
              label="Username"
              type="text"
              placeholder="Username"
              {...register('username')}
              error={!!errors.username}
              helperText={errors.username ? errors.username?.message : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              margin="dense"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              placeholder="Password"
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : null}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              margin="dense"
              label="Confirm password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              placeholder="Confirm password"
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword ? errors.confirmPassword?.message : null
              }
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting}
          sx={classes.submit}
          variant="contained"
        >
          {t('button.signUp', { ns: 'common' })}
        </Button>
        <Grid>
          <Grid item>
            <MuiLink sx={{ fontWeight: 'bold' }} href="/login" variant="body2">
              Already have an account? Sign in
            </MuiLink>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUpForm;
