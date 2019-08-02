import React from 'react';

import Notebooks from '../../containers/Notebooks/Notebooks';

import classes from './Home.module.css';

const home = (props) => {

  return(
    <div className={classes.Home}>
      <div className={classes.Title}>
        <h1>Home</h1>
        <button>New Note</button>
      </div>

      <div className={classes.Notebooks}>
        <Notebooks />
      </div>
    </div>
    );
}

export default home;
