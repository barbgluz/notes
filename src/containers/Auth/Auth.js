import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import Login from './Login/Login';
import Signup from './Signup/Signup';

import classes from './Auth.module.css';

class Auth extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loginForm: {
        email: "",
        password: ""
      },
      signupForm: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let formName = event.target.form.id;
    let form = {...this.state[formName]}
    let key = event.target.id;

    form[key] = event.target.value;

    this.setState({ [formName]: form });
  }

  handleSubmit(event) {
    event.preventDefault();
    let form = event.target.form.id;

    if(form === "signupForm") {
      this.props.onSignup(this.state.signupForm.name,
                          this.state.signupForm.email,
                          this.state.signupForm.password,
                          this.state.signupForm.passwordConfirm);
      this.props.onAuth(this.state.signupForm.email, this.state.signupForm.password);
    } else if( form === "loginForm" ) {
      this.props.onAuth(this.state.loginForm.email, this.state.loginForm.password);
    }
  }

  render() {
    let form = (<Login
                  changed={this.handleChange}
                  submit={this.handleSubmit}/>);

    if(this.props.form === "signup") {
      form = (<Signup
                changed={this.handleChange}
                submit={this.handleSubmit}/>);
    }

    let authRedirect = null;
    if(this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />
    }

    return(
      <div className={classes.Container}>
        <div className={classes.Box}>
          <div className={classes.ImgContainer}>
          </div>
          <div className={classes.FormContainer}>
            {authRedirect}
            {form}
          </div>
        </div>
      </div>
      );
  }
}

const mapDispatchToProps = dispatch => {
  return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        onSignup: (name, email, password, passwordConfirm) => dispatch(actions.signup(name, email, password, passwordConfirm))
  };
};

const mapStateToProps = state => {
  return {
        isAuthenticated: state.auth.token !== null
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
