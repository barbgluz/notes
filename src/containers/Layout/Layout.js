import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Auth from '../Auth/Auth';
import Logout from '../Auth/Logout/Logout';
import Sidebar from '../../components/Sidebar/Sidebar';
import Home from '../../components/Home/Home';
import Note from '../Notes/Note';
import Notebook from '../Notebooks/Notebook';
import NewNote from '../Notes/New';

import classes from './Layout.module.css';

class Layout extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

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

          <main className={classes.MainContent}>
            <Switch>
              <Route path="/note/:id/edit" exact component={NewNote} />
              <Route path="/note/new" exact component={NewNote} />
              <Route path="/note/:id" exact component={Note} />
              <Route path="/notebook/:id" exact component={Notebook} />
              <Route path="/logout" exact component={Logout} />
              <Route path="/" exact component={Home} />
            </Switch>
          </main>
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

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
