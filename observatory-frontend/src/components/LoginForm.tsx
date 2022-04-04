import React, { Component } from "react";
import "../App.css";
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };


  render() {
    return (
      <div className="App">
        <form className="form">
          <Input
            label="Email"
            id="email"
            type="text"
            className="form_button"
          />
          <Input
            label="Password"
            id="password"
            type="password"
            className="form_button"
          />

          <Button component={Link} to="/main" variant="contained" type="button" color="primary" className="form_button">
            Log in
          </Button>
          <Button component={Link} to="/signup" variant="contained" type="button" color="primary" className="form_button">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}
