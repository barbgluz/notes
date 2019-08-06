import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/form.css';
import classes from '../Auth.module.css';

class Signup extends Component {
  render() {

    let emailErrors = null;
    if(this.props.errors.email) {
      emailErrors = this.props.errors.email.map(error => {
        return (<p> {error} </p>)
      })
    }

    let passwordErrors = null;
    if(this.props.errors.passwordConfirm) {
      passwordErrors = this.props.errors.passwordConfirm.map(error => {
        return (<p> {error} </p>)
      })
    }

    return(
      <div className={classes.Signup}>
        <h1 className={classes.FormTitle}>Signup</h1>

        <form className={classes.Form} id="signupForm">
          <div className={classes.InputGroup + " InputGroup"}>
            <input
              className="Input"
              type="text"
              id="name"
              onChange={this.props.changed}
              required />
            <label className="Label" htmlFor="name">Name</label>
          </div>

          <div className="Error">
            <p>{this.props.errors.name}</p>
          </div>

          <div className={classes.InputGroup + " InputGroup"}>
            <input
              className="Input"
              type="text"
              id="email"
              onChange={this.props.changed}
              required />
            <label className="Label" htmlFor="email">Email</label>
          </div>

          <div className="Error">
            {emailErrors}
          </div>

          <div className={classes.InputGroup + " InputGroup"}>
            <input
              className="Input"
              type="password"
              id="password"
              onChange={this.props.changed}
              required />
            <label className="Label" htmlFor="password">Password</label>
          </div>

          <div className="Error">
            <p>{this.props.errors.password}</p>
          </div>

          <div className={classes.InputGroup + " InputGroup"}>
            <input
              className="Input"
              type="password"
              id="passwordConfirm"
              onChange={this.props.changed}
              required />
            <label className="Label" htmlFor="passwordConfirm">Confirm Password</label>
          </div>

          <div className="Error">
            {passwordErrors}
          </div>

          <button
            className={classes.Btn + " Btn"}
            onClick={this.props.submit}>Signup</button>
        </form>

        <div className={classes.Footer}>
          <p>Already a member? <Link to="/">Log In</Link> </p>
        </div>
      </div>
      );
}
}

export default Signup;

