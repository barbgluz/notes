import React from 'react';

import classes from '../../ui/Modal/Modal.module.css';

const deleteConfirmation = (props) => (
  <div className={classes.Content}>
    <div className={classes.Title}>
      <h1>Are you sure?</h1>
    </div>

    <div className={classes.Links}>
      <p onClick={props.delete} className={classes.Link} role="link">Yes</p>
      <p onClick={props.cancel} className={classes.Link} role="link">No</p>
    </div>
  </div>
);

export default deleteConfirmation;
