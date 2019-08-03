import React from 'react';

import classes from './NotebookItem.module.css';

const notebookItem = (props) => {

  return(
    <div className={classes.NotebookItem}>
      <h3 className={classes.Title}>{props.title}</h3>
      <p className={classes.Notes}>8 Notas</p>
    </div>
    );
}

export default notebookItem;
