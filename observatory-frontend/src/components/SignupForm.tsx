import * as React from 'react';
import Input from '@mui/material/Input';
import '../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const inputProps = {
    step: 300,
  };

export default function SignupForm(){
    const username = (
        <React.Fragment>
        <h1 className="font-link">Sign Up</h1>
        <h2 className="font-link">First Name</h2>
        <TextField id="firstname" type="text" inputProps={inputProps} />
        <br></br>
        <h2 className="font-link">Last Name</h2>
        <TextField id="lastname" type="text" inputProps={inputProps} />
        <br></br>
        <h2 className="font-link">Email</h2>
        <TextField id="email" type="text" inputProps={inputProps} />
        <br></br>
        <h2 className="font-link">Username</h2>
        <TextField id="username" type="text" inputProps={inputProps} />
        <br></br>
        <h2 className="font-link">Password</h2>
        <TextField id="password" type="text" inputProps={inputProps} />
        <br></br>
        <br></br>
        <Button component={Link} to="/" variant="contained" className="font-link">Register</Button>
        </React.Fragment>
    )
    
    return username;
  }