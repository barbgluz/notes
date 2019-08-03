import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import NotebookItem from '../../components/NotebookItem/NotebookItem';

import classes from './Notebooks.module.css';

class Notebooks extends Component {

  componentDidMount() {
    this.props.onGetNotebooks(this.props.token);
    this.setState({notebooks: this.props.notebooks});
  }

  render() {

    let notebooks = null;

    if(this.props.notebooks) {
      notebooks = this.props.notebooks.map(notebook => {
        return(
          <NotebookItem title={notebook.name} key={notebook.id} id={notebook.id}/>
        )
      })
    }

    return(
      <div className={classes.Notebooks}>
        {notebooks}
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    notebooks: state.notebooks.notebooks,
    token: state.auth.token,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetNotebooks: (token) => dispatch(actions.notebooks(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);
