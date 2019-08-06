import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/form.css';
import classes from '../Auth.module.css';

class Login extends Component {
  render() {

    let emailErrors = null;
    if(this.props.errors.email) {
      emailErrors = this.props.errors.email.map((error, index) => {
        return (<p key={index}> {error} </p>)
      })
    }

    return(
      <div className={classes.Login}>
        <h1 className={classes.FormTitle}>Login</h1>

        <form className={classes.Form} id="loginForm">
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

          <button
            className={classes.Btn + " Btn"}
            onClick={this.props.submit}>Login</button>
        </form>

        <div className={classes.Footer}>
          <p>Not a member yet? <Link to="/signup">Sign Up</Link> </p>
        </div>
      </div>
    );
  }
}

export default Login;
