import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SignupForm from './components/SignupForm';


function Login() {
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            //style={{ minHeight: '100vh' }
        >
            <Grid item xs={3}>
                <SignupForm />
            </Grid>          
        </Grid>
    );
  }

  export default Login;