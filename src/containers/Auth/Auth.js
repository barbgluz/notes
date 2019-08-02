import React, { Component } from 'react';

import Login from './Login/Login';

import classes from './Auth.module.css';

class Auth extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let form = (
      <Login />
    );

    if(this.props.form === "signup") {
      form = "signup form";
    }

    return(
      <div className={classes.Container}>
        <div className={classes.Box}>
          <div className={classes.ImgContainer}>
          </div>
          <div className={classes.FormContainer}>
            {form}
          </div>
        </div>
      </div>
      );
  }
}

export default Auth;
