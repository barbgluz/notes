import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NotebookItem.module.css';

const notebookItem = (props) => {

  return(
    <Link
      to={{
        pathname: ("/notebook/" + props.id ),
        state: {title: props.title}
        }}
      className={classes.NotebookItem}>
      <h3 className={classes.Title}>{props.title}</h3>
      <p className={classes.Notes}>8 Notas</p>
    </Link>
    );
}

export default notebookItem;
