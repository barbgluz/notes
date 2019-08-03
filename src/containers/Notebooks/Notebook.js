import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import NoteItem from '../../components/NoteItem/NoteItem';

import classes from '../Notebooks/Notebooks.module.css';
import styles from '../../containers/Layout/Layout.module.css';

class Notebook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      title: this.props.location.state.title
    }
  }

  componentDidMount() {
    this.props.onGetNotebook(this.props.token, this.props.match.params.id);
  }

  render() {

    let notes = null;

    if(this.props.notebook) {
      notes = this.props.notebook.map(notebook => {
        return(
          <NoteItem
            title={notebook.title}
            key={notebook.id}
            description={notebook.description}
            date={notebook.created_at}
            id={notebook.id} />
          )
      })
    }

    return(
      <div>
        <div className={classes.Title + " " + styles.Title}>
          <h1>{this.state.title}</h1>

          <Link to={{
            pathname: "/note/new",
            state: {notebook_id: this.state.id}
            }}
            >
            <button className={styles.Btn}>New Note</button>
          </Link>
        </div>

        <div className={classes.Notebooks}>
          {notes}
        </div>
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    notebook: state.notebook.notes,
    token: state.auth.token,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetNotebook: (token, id) => dispatch(actions.notebook(token, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notebook);
