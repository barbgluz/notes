import React, { Component } from 'react';

import NotebookItem from '../../components/NotebookItem/NotebookItem';

import classes from './Notebooks.module.css';

class Notebooks extends Component {

  render() {

    let notebooks = [];
    for (var i = 0; i < 9; i++) {
      notebooks.push(<NotebookItem />);
    }

    return(
      <div className={classes.Notebooks}>
        {notebooks}
      </div>
      );
  }
}

export default Notebooks;
