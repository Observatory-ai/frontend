import React, { Component } from "react";
import "../App.css";
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default class App extends Component {
  state = {
    email: "",
    password: ""
  };


  render() {
    return (
      <div className="App">
        <form className="form">
          
        <Input
            label="Name"
            id="name"
            type="text"
            className="form_button"
        />
          
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

          <Input
            label="Confirm Password"
            id="confirmpassword"
            type="password"
            className="form_button"
          />

          <Button component={Link} to="/" variant="contained" type="button" color="primary" className="form_button">
            Log in
          </Button>
        </form>
      </div>
    );
  }
}
