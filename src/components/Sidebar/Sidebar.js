import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Sidebar.module.css';

const sidebar = (props) => {

  return(
    <div className={classes.Sidebar}>
      <div className={classes.Logo}>
        <p>NotesApp</p>
        <p className={classes.Logout}>Logout</p>
      </div>

      <nav className={classes.Navigation}>
        <ul>
          <li className={classes.Item}><Link to="/"> Home </Link></li>
          <li className={classes.Item}><Link to="/"> Notebooks </Link></li>
        </ul>
      </nav>
    </div>
    );
}

export default sidebar;
