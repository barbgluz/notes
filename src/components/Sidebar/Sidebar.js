import React from 'react';
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
          <li className={classes.Item}>Home</li>
          <li className={classes.Item}>Notebooks</li>
        </ul>
      </nav>
    </div>
    );
}

export default sidebar;
