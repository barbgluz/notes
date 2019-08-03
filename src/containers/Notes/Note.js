import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import classes from '../../containers/Layout/Layout.module.css';
import styles from './Note.module.css';

class Note extends Component {

  constructor(props) {
    super(props);

    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidMount() {
    this.props.onGetNote(this.props.token, this.props.match.params.id);
  }

  deleteNote() {
    this.props.onDeleteNote(this.props.token, this.props.match.params.id);
  }

  render() {

    let note = null;

    if(this.props.note) {
      note = (
        <div>
          <div className={classes.Title}>
            <h1>{this.props.note.title}</h1>
            <Link to={{
                      pathname: (this.props.match.params.id + "/edit"),
                      state: { notebook_id: this.props.location.state.notebook_id,
                               note: this.props.note }
              }}>
              <button className={classes.Btn}>Edit</button>
            </Link>

            <button
              className={classes.Btn}
              onClick={this.deleteNote}>Delete</button>
          </div>

          <div className={styles.Content}>
            <div className={styles.Description}>
              <p>{this.props.note.description}</p>
            </div>
          </div>
        </div>
        );
    }

    return(
      <div>
        {note}
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note.note,
    token: state.auth.token,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetNote: (token, id) => dispatch(actions.note(token, id)),
    onDeleteNote: (token, id) => dispatch(actions.remove(id, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
