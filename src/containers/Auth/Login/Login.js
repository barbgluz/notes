import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/form.css';
import classes from '../Auth.module.css';

class Login extends Component {
  render() {
    return(
      <div className={classes.Login}>
        <h1 className={classes.FormTitle}>Login</h1>

        <form className={classes.Form}>
          <div className={classes.InputGroup + " InputGroup"}>
            <input
              className="Input"
              type="text"
              id="email"
              required />
            <label className="Label" htmlFor="email">Email</label>
          </div>

          <div className={classes.InputGroup + " InputGroup"}>
            <input
              className="Input"
              type="password"
              id="password"
              required />
            <label className="Label" htmlFor="password">Password</label>
          </div>

          <button className={classes.Btn + " Btn"}>Login</button>
        </form>

        <div className={classes.Footer}>
          <p>Not a member yet? <Link to="/signup">Sign Up</Link> </p>
        </div>
      </div>
    );
  }
}

export default Login;
