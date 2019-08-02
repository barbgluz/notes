import React from 'react';

import Notebooks from '../../containers/Notebooks/Notebooks';

import classes from '../../containers/Layout/Layout.module.css';

const home = (props) => {

  return(
    <div className={classes.Home}>
      <div className={classes.Title}>
        <h1>Home</h1>

        <button className={classes.Btn}>New Note</button>
      </div>

      <div className={classes.Content}>
        <Notebooks />
      </div>
    </div>
    );
}

export default home;
