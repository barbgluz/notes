import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Auth from '../Auth/Auth';
import Sidebar from '../../components/Sidebar/Sidebar';
import Home from '../../components/Home/Home';
import Note from '../Notes/Note';
import NewNote from '../Notes/New';

import classes from './Layout.module.css';

class Layout extends Component {

  render() {
    let view = (
      <div>
        <Route path="/" exact render={()=> <Auth form="login" />} />
        <Route path="/signup" exact render={()=> <Auth form="signup" />} />
      </div>
    );

    if(this.props.isAuthenticated) {
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

const mapStateToProps = state => {
  return {
        isAuthenticated: state.auth.token !== null
  };
}

export default connect(mapStateToProps)(Layout);
