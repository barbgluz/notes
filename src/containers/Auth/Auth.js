import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import * as validate from '../../validation';

import Login from './Login/Login';
import Signup from './Signup/Signup';

import classes from './Auth.module.css';

class Auth extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loginForm: {
        email: {
          value: "",
          errors: {
            required: "Email is required",
            invalid: "Email is invalid"
          }
        },
        password: {
          value: "",
          errors: {
            required: "Password is required"
          }
        },
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

    form[key].value = event.target.value;

    this.setState({ [formName]: form });
  }

  validateForm(formName) {
    let form = this.state[formName];
    let errors;

    if(formName === "signupForm") {

    } else if(formName === "loginForm") {
      errors = {
        email: [],
        password: []
      };

      if(validate.empty(form.email.value)) errors.email.push(form.email.errors.required)
      if(!validate.validEmail(form.email.value)) errors.email.push(form.email.errors.invalid)
      if(validate.empty(form.password.value)) errors.password.push(form.password.errors.required)

    }

    let valid = true;
    for(let prop in errors) {
      if(errors[prop].length !== 0 && errors[prop][0] !== undefined) {
        valid = false;
      }
    }

    this.setState({isValid: valid})
    this.setState({errors: errors});

  }

  submitForm(formName) {
    if(formName === "signupForm") {
      this.props.onSignup(this.state.signupForm.name.value,
                          this.state.signupForm.email.value,
                          this.state.signupForm.password.value,
                          this.state.signupForm.passwordConfirm.value);
      this.props.onAuth(this.state.signupForm.email.value, this.state.signupForm.password.value);
    } else if(formName === "loginForm" ) {
      this.props.onAuth(this.state.loginForm.email.value, this.state.loginForm.password.value);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    var form = event.target.form.id;

    this.validateForm(form);

    if(this.state.isValid) {
      this.submitForm(form);
    }
  }

  render() {
    let form = (<Login
                  changed={this.handleChange}
                  errors={this.state.errors}
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
