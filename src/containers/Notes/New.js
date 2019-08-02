import React, { Component } from 'react';

import classes from '../../containers/Layout/Layout.module.css';
import styles from './Note.module.css';

class Notes extends Component {

  render() {
    return(
      <div>
        <div className={classes.Title}>
          <h1>New Note</h1>
        </div>

        <div className={styles.Content}>
          <form className={styles.Form}>
            <div className={styles.InputGroup}>
              <input
                className={styles.Input}
                type="text"
                id="title"
                required />
              <label className={styles.Label} htmlFor="title">Title</label>
            </div>

            <div className={styles.InputGroup}>
              <textarea
                className={styles.Textarea}
                id="description"
                name="description"
                cols="30" rows="10"
                required></textarea>
              <label className={styles.Label} htmlFor="description">Description</label>
            </div>

            <button className={styles.Btn}>Save</button>

          </form>
        </div>
      </div>
      );
  }
}

export default Notes;
