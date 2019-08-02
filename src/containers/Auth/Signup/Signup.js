import React, { Component } from 'react';

import '../../../styles/form.css';
import classes from '../Auth.module.css';

class Signup extends Component {
  render() {
    return(
      <div className={classes.Signup}>
        <h1 className={classes.FormTitle}>Signup</h1>

        <form className={classes.Form}>
          <div className={classes.InputGroup + " InputGroup"}>
            <input
              className="Input"
              type="text"
              id="name"
              required />
            <label className="Label" htmlFor="name">Name</label>
          </div>

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

          <div className={classes.InputGroup + " InputGroup"}>
            <input
              className="Input"
              type="password"
              id="passwordContifm"
              required />
            <label className="Label" htmlFor="password">Confirm Password</label>
          </div>

          <button className={classes.Btn + " Btn"}>Signup</button>
        </form>

        <div className={classes.Footer}>
          <p>Already a member? <a href="#">Log In</a> </p>
        </div>
      </div>
    );
  }
}

export default Signup;

