import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    this.props.onAuth(this.state.loginForm.email, this.state.loginForm.password);
  }

  render() {
    let form = (<Login
                  changed={this.handleChange}
                  submit={this.handleSubmit}/>);

    if(this.props.form === "signup") {
      form = <Signup />;
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

const mapDispatchToProps = dispatch => {
  return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
  };
};

const mapStateToProps = state => {
  return {
        isAuthenticated: state.auth.token !== null
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
