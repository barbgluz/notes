import React from 'react';
import { Link } from 'react-router-dom';

import Notebooks from '../../containers/Notebooks/Notebooks';

import classes from '../../containers/Layout/Layout.module.css';

const home = (props) => {

  return(
    <div className={classes.Home}>
      <div className={classes.Title}>
        <h1>Home</h1>

        <Link to="note/new">
          <button className={classes.Btn}>New Note</button>
        </Link>
      </div>

      <div className={classes.Content}>
        <Notebooks />
      </div>
    </div>
    );
}

export default home;
