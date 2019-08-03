import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../NotebookItem/NotebookItem.module.css';
import styles from './NoteItem.module.css';

const noteItem = (props) => {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let time = props.date.split(" ")[0];
  let date = new Date(time);
  let created = months[date.getMonth()] + ", " + date.getFullYear();

  return(
    <div className={classes.NotebookItem + ' ' + styles.Item }>
      <Link to={{
                pathname:"/note/" + props.id,
                state: { notebook_id: props.notebook_id,
                         notebook_title: props.notebook_title}
                }}>
        <h3 className={classes.Title + ' ' + styles.Title }>{props.title}</h3>
      </Link>
      <hr className={styles.Line} />
      <p className={classes.Notes + ' ' + styles.Description}>{props.description}</p>
      <div className={styles.Footer}>
        <p>{created}</p>
      </div>
    </div>
    );
}

export default noteItem;
