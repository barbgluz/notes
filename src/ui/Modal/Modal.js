import React from 'react';

import classes from './Modal.module.css';

const modal = (props) => (
  <div aria-modal="true">
    <div
      className={classes.ModalContainer}
      onClick={props.hideModal}
      style={{
      transform: props.show? 'translateY(0)' : 'translateY(-100vh)',
      }}
    ></div>
    <div
      className={classes.Modal}
      style={{
      transform: props.show? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </div>
);

export default modal;
