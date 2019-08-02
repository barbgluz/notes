import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Auth from '../Auth/Auth';
import Sidebar from '../../components/Sidebar/Sidebar';
import Home from '../../components/Home/Home';
import Note from '../Notes/Note';
import NewNote from '../Notes/New';

import classes from './Layout.module.css';

class Layout extends Component {

  state = {
    isAuthenticated: false
  }

  render() {
    let view = (
      <Auth />
    );

    if(this.state.isAuthenticated) {
      view = (
        <div className={classes.Container}>
          <div className={classes.Sidebar}>
            <Sidebar />
          </div>

          <div className={classes.MainContent}>
            <Route path="/" exact component={Home} />
            <Route path="/note/new" exact component={NewNote} />
            <Route path="/note" exact component={Note} />
          </div>
        </div>
      );
    }

    return (
      <BrowserRouter>
        {view}
      </BrowserRouter>
      );
}
}

export default Layout;
