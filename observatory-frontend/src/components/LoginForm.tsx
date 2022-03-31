import * as React from 'react';
import Input from '@mui/material/Input';
import '../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const inputProps = {
    step: 300,
  };
  
  export default function LoginForm(){
    const username = (
        <React.Fragment>
        <h1 className="font-link">Login</h1>
        <h2 className="font-link">Username</h2>
        <TextField id="username" type="text" inputProps={inputProps} />
        <br></br>
        <h2 className="font-link">Password</h2>
        <TextField id="password" type="text" inputProps={inputProps} />
        <br></br>
        <br></br>
        <Button variant="contained" className="font-link">Sign In</Button>
        <br></br><br></br>
        <a className="font-link">Sign Up!</a>
        </React.Fragment>
    )
    
    return username;
  }