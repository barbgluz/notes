import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import Home from '../../components/Home/Home';
import Note from '../Notes/Note';
import NewNote from '../Notes/New';

import classes from './Layout.module.css';

class Layout extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.Container}>
          <div className={classes.Sidebar}>
            <Sidebar />
          </div>

          <div className={classes.MainContent}>
            <Route path="/" exact component={Home} />
            <Route path="/note" exact component={Note} />
          </div>
        </div>
      </BrowserRouter>
      );
}
}

export default Layout;
