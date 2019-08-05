import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const sidebar = (props) => {

  return(
    <div className={classes.Navbar}>
      <div className={classes.Logo}>
        <p>NotesApp</p>
      </div>

      <nav className={classes.Navigation}>
        <ul>
          <li className={classes.Item}><Link to="/"> Home </Link></li>
          <li className={classes.Item}><Link to="/logout"> Logout </Link></li>
        </ul>
      </nav>
    </div>
    );
}

export default sidebar;
